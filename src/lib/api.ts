/**
 * Cliente da API, do lado do navegador.
 *
 * Todas as chamadas vão para a **própria origem** (`/api/...`), onde o servidor
 * do Next atua como BFF e repassa para o backend no Railway. O navegador nunca
 * conhece a URL do backend, e o backend não precisa de CORS.
 *
 * A URL do backend vive em `API_URL`, variável de servidor, lida apenas nos
 * route handlers em `src/app/api/`. Nada de `NEXT_PUBLIC_`.
 */

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

const MENSAGEM_PADRAO_DE_FALHA =
  "Não foi possível falar com o servidor do Next. Recarregue a página e, se persistir, verifique o deploy na Vercel.";

/**
 * Erro de rede e erro HTTP viram a mesma forma de retorno, porque quem chama
 * precisa tratar os dois — e uma mensagem que diz o que fazer vale mais que uma
 * exceção genérica na tela.
 */
export async function consultarSaude(): Promise<ResultadoDaChamada<RespostaDeSaude>> {
  try {
    const resposta = await fetch("/api/saude", {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    const corpo = await resposta.json().catch(() => null);

    if (!resposta.ok) {
      const mensagem =
        corpo && typeof corpo.mensagem === "string" ? corpo.mensagem : MENSAGEM_PADRAO_DE_FALHA;

      return { ok: false, mensagem };
    }

    return { ok: true, dados: corpo as RespostaDeSaude };
  } catch {
    return { ok: false, mensagem: MENSAGEM_PADRAO_DE_FALHA };
  }
}
