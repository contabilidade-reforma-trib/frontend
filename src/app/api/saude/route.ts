import { NextResponse } from "next/server";
import type { RespostaDeSaude } from "@/lib/api";

/**
 * BFF: o navegador chama esta rota na origem da Vercel, e é o servidor do Next
 * que fala com a API no Railway.
 *
 * Duas consequências que valem a arquitetura inteira: a URL do backend nunca vai
 * para o bundle, e o backend não precisa de CORS, porque nenhum navegador o
 * chama diretamente. Quando entrar autenticação, é aqui que o cookie httpOnly
 * será lido e traduzido em cabeçalho para o backend — o token não chega ao
 * navegador em momento algum.
 */

const URL_DO_BACKEND = (process.env.API_URL ?? "http://localhost:5000").replace(/\/+$/, "");
const TEMPO_LIMITE_MS = 8000;

// Sem isso o Next tentaria resolver a rota no build, quando o backend não existe.
export const dynamic = "force-dynamic";

export async function GET() {
  const controlador = new AbortController();
  const expiracao = setTimeout(() => controlador.abort(), TEMPO_LIMITE_MS);

  try {
    const resposta = await fetch(`${URL_DO_BACKEND}/api/saude`, {
      signal: controlador.signal,
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!resposta.ok) {
      return NextResponse.json(
        { mensagem: `A API respondeu ${resposta.status}. Verifique o serviço no Railway.` },
        { status: 502 },
      );
    }

    const saude = (await resposta.json()) as RespostaDeSaude;
    return NextResponse.json(saude, { status: 200 });
  } catch (erro) {
    const expirou = erro instanceof DOMException && erro.name === "AbortError";

    return NextResponse.json(
      {
        mensagem: expirou
          ? "A API não respondeu em 8 segundos. Ela pode estar hibernando — tente de novo."
          : "O servidor do Next não conseguiu falar com a API. Confira a variável API_URL e se o serviço do Railway está no ar.",
      },
      { status: 502 },
    );
  } finally {
    clearTimeout(expiracao);
  }
}
