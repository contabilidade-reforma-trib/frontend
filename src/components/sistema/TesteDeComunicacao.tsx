"use client";

import { useEffect, useState } from "react";
import { Toast, type TipoDeToast } from "@/components/ui/Toast";
import { fetchHealth, type HealthResponse } from "@/lib/api";

type Estado =
  | { fase: "consultando" }
  | { fase: "ok"; saude: HealthResponse }
  | { fase: "erro"; mensagem: string };

/**
 * Prova de que a cadeia inteira funciona: navegador → servidor do Next na
 * Vercel → API no Railway → banco no Neon. Roda uma vez ao abrir a página.
 *
 * A chamada é para /api/health, na própria origem: o navegador não conhece a URL
 * do backend, e por isso não há CORS envolvido.
 *
 * É intencionalmente visível: enquanto a POC está sendo montada, saber que os
 * dois ambientes conversam vale mais do que uma tela limpa. Sai quando o
 * produto tiver telas de verdade consumindo a API.
 */
export function TesteDeComunicacao() {
  const [estado, setEstado] = useState<Estado>({ fase: "consultando" });

  useEffect(() => {
    let cancelado = false;

    fetchHealth().then((resultado) => {
      if (cancelado) return;

      setEstado(
        resultado.ok
          ? { fase: "ok", saude: resultado.data }
          : { fase: "erro", mensagem: resultado.message },
      );
    });

    return () => {
      cancelado = true;
    };
  }, []);

  if (estado.fase === "consultando") {
    return (
      <Toast
        tipo="carregando"
        titulo="Testando comunicação com o backend…"
        descricao="navegador → Next (BFF) → API → banco"
      />
    );
  }

  if (estado.fase === "erro") {
    return <Toast tipo="erro" titulo="Falha ao falar com o backend" descricao={estado.mensagem} />;
  }

  const { saude } = estado;
  const tipo: TipoDeToast = saude.database.connected ? "sucesso" : "erro";

  const descricao = saude.database.connected
    ? `${saude.service} · ${saude.environment} · banco respondeu em ${saude.database.latencyMs} ms`
    : `${saude.service} respondeu, mas o banco não: ${saude.database.error ?? "motivo não informado"}`;

  return (
    <Toast
      tipo={tipo}
      titulo={
        saude.database.connected
          ? "Comunicação com o backend feita com sucesso"
          : "Backend no ar, banco indisponível"
      }
      descricao={descricao}
      duracaoMs={saude.database.connected ? 8000 : 0}
    />
  );
}
