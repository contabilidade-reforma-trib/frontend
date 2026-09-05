import { afterEach, describe, expect, it, vi } from "vitest";
import { consultarSaude } from "./api";

const SAUDE_OK = {
  status: "ok",
  servico: "praxis-api",
  versao: "1.0.0",
  ambiente: "Development",
  momentoUtc: "2026-09-05T21:00:00+00:00",
  banco: { conectado: true, latenciaMs: 42, erro: null },
  armazenamento: { configurado: false },
};

describe("consultarSaude", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("Deve_chamar_a_propria_origem_e_nunca_o_backend_direto", async () => {
    const espiao = vi.fn().mockResolvedValue({ ok: true, json: async () => SAUDE_OK });
    vi.stubGlobal("fetch", espiao);

    await consultarSaude();

    // Caminho relativo é o que garante que o navegador fale só com a Vercel:
    // sem URL absoluta, não há origem cruzada e não há CORS.
    const [url] = espiao.mock.calls[0];
    expect(url).toBe("/api/saude");
  });

  it("Deve_devolver_os_dados_quando_o_bff_responde_ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: true, json: async () => SAUDE_OK }),
    );

    const resultado = await consultarSaude();

    expect(resultado.ok).toBe(true);
    if (resultado.ok) {
      expect(resultado.dados.banco.conectado).toBe(true);
      expect(resultado.dados.banco.latenciaMs).toBe(42);
    }
  });

  it("Deve_repassar_a_mensagem_que_o_bff_devolveu_no_erro", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 502,
        json: async () => ({ mensagem: "A API respondeu 503. Verifique o serviço no Railway." }),
      }),
    );

    const resultado = await consultarSaude();

    expect(resultado.ok).toBe(false);
    if (!resultado.ok) {
      expect(resultado.mensagem).toContain("Railway");
    }
  });

  it("Deve_usar_mensagem_padrao_quando_o_erro_vem_sem_corpo_legivel", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        json: async () => {
          throw new SyntaxError("resposta não é JSON");
        },
      }),
    );

    const resultado = await consultarSaude();

    expect(resultado.ok).toBe(false);
    if (!resultado.ok) {
      // Mesmo sem corpo, a mensagem precisa dizer o que fazer.
      expect(resultado.mensagem).toContain("Vercel");
    }
  });

  it("Deve_tratar_queda_de_rede_sem_estourar_excecao", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));

    const resultado = await consultarSaude();

    expect(resultado.ok).toBe(false);
    if (!resultado.ok) {
      expect(resultado.mensagem).toContain("servidor do Next");
    }
  });
});
