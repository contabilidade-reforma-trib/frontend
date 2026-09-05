/**
 * Cliente da API do backend. Base configurada por variável de ambiente para que
 * localhost, preview da Vercel e produção usem o mesmo código.
 */

export const URL_DA_API =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") ?? "http://localhost:5000";

export type EstadoDoBanco = {
  conectado: boolean;
  latenciaMs: number;
  erro: string | null;
};

export type EstadoDoArmazenamento = {
  configurado: boolean;
};

export type RespostaDeSaude = {
  status: "ok" | "degradado";
  servico: string;
  versao: string;
  ambiente: string;
  momentoUtc: string;
  banco: EstadoDoBanco;
  armazenamento: EstadoDoArmazenamento;
};

export type ResultadoDaChamada<T> =
  | { ok: true; dados: T }
  | { ok: false; mensagem: string };

const TEMPO_LIMITE_MS = 8000;

/**
 * Erro de rede e erro HTTP viram a mesma forma de retorno, porque quem chama
 * precisa tratar os dois — e uma mensagem que diz o que fazer vale mais que
 * uma exceção genérica na tela.
 */
export async function consultarSaude(): Promise<ResultadoDaChamada<RespostaDeSaude>> {
  const controlador = new AbortController();
  const expiracao = setTimeout(() => controlador.abort(), TEMPO_LIMITE_MS);

  try {
    const resposta = await fetch(`${URL_DA_API}/api/saude`, {
      signal: controlador.signal,
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!resposta.ok) {
      return {
        ok: false,
        mensagem: `A API respondeu ${resposta.status}. Verifique se o backend subiu no Railway.`,
      };
    }

    const dados = (await resposta.json()) as RespostaDeSaude;
    return { ok: true, dados };
  } catch (erro) {
    if (erro instanceof DOMException && erro.name === "AbortError") {
      return {
        ok: false,
        mensagem: "A API não respondeu em 8 segundos. Ela pode estar hibernando — tente de novo.",
      };
    }

    return {
      ok: false,
      mensagem: `Não foi possível falar com a API em ${URL_DA_API}. Confira NEXT_PUBLIC_API_URL e o CORS do backend.`,
    };
  } finally {
    clearTimeout(expiracao);
  }
}
