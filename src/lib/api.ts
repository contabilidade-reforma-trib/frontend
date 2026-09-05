/**
 * Cliente da API, do lado do navegador.
 *
 * Todas as chamadas vão para a **própria origem** (`/api/...`), onde o servidor
 * do Next atua como BFF e repassa para o backend no Railway. O navegador nunca
 * conhece a URL do backend, e o backend não precisa de CORS.
 *
 * Os nomes dos campos abaixo espelham o contrato do backend, que é escrito em
 * inglês — traduzir aqui só criaria um dicionário a mais para manter.
 */

export type DatabaseStatus = {
  connected: boolean;
  latencyMs: number;
  error: string | null;
};

export type StorageStatus = {
  configured: boolean;
};

export type HealthResponse = {
  status: "ok" | "degraded";
  service: string;
  version: string;
  environment: string;
  timestampUtc: string;
  database: DatabaseStatus;
  storage: StorageStatus;
};

export type CallResult<T> = { ok: true; data: T } | { ok: false; message: string };

const DEFAULT_FAILURE_MESSAGE =
  "Não foi possível falar com o servidor do Next. Recarregue a página e, se persistir, verifique o deploy na Vercel.";

/**
 * Erro de rede e erro HTTP viram a mesma forma de retorno, porque quem chama
 * precisa tratar os dois — e uma mensagem que diz o que fazer vale mais que uma
 * exceção genérica na tela.
 */
export async function fetchHealth(): Promise<CallResult<HealthResponse>> {
  try {
    const response = await fetch("/api/health", {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    const body = await response.json().catch(() => null);

    if (!response.ok) {
      const message =
        body && typeof body.message === "string" ? body.message : DEFAULT_FAILURE_MESSAGE;

      return { ok: false, message };
    }

    return { ok: true, data: body as HealthResponse };
  } catch {
    return { ok: false, message: DEFAULT_FAILURE_MESSAGE };
  }
}
