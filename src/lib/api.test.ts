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

  it("Deve_devolver_os_dados_quando_a_api_responde_ok", async () => {
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

  it("Deve_dizer_o_status_http_quando_a_api_responde_com_erro", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 503 }));

    const resultado = await consultarSaude();

    expect(resultado.ok).toBe(false);
    if (!resultado.ok) {
      expect(resultado.mensagem).toContain("503");
      expect(resultado.mensagem).toContain("Railway");
    }
  });

  it("Deve_orientar_sobre_cors_e_variavel_quando_a_rede_falha", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));

    const resultado = await consultarSaude();

    expect(resultado.ok).toBe(false);
    if (!resultado.ok) {
      // A mensagem de erro precisa dizer o que fazer, não só que deu errado.
      expect(resultado.mensagem).toContain("NEXT_PUBLIC_API_URL");
      expect(resultado.mensagem).toContain("CORS");
    }
  });

  it("Deve_avisar_sobre_hibernacao_quando_estoura_o_tempo_limite", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new DOMException("Aborted", "AbortError")),
    );

    const resultado = await consultarSaude();

    expect(resultado.ok).toBe(false);
    if (!resultado.ok) {
      expect(resultado.mensagem).toContain("hibernando");
    }
  });
});
