"use client";

import { useEffect, useState } from "react";
import { Toast, type TipoDeToast } from "@/components/ui/Toast";
import { consultarSaude, type RespostaDeSaude } from "@/lib/api";

type Estado =
  | { fase: "consultando" }
  | { fase: "ok"; saude: RespostaDeSaude }
  | { fase: "erro"; mensagem: string };

/**
 * Prova de que a cadeia inteira funciona: navegador → servidor do Next na
 * Vercel → API no Railway → banco no Neon. Roda uma vez ao abrir a página.
 *
 * A chamada é para /api/saude, na própria origem: o navegador não conhece a URL
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

    consultarSaude().then((resultado) => {
      if (cancelado) return;

      setEstado(
        resultado.ok
          ? { fase: "ok", saude: resultado.dados }
          : { fase: "erro", mensagem: resultado.mensagem },
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
  const tipo: TipoDeToast = saude.banco.conectado ? "sucesso" : "erro";

  const descricao = saude.banco.conectado
    ? `${saude.servico} · ${saude.ambiente} · banco respondeu em ${saude.banco.latenciaMs} ms`
    : `${saude.servico} respondeu, mas o banco não: ${saude.banco.erro ?? "motivo não informado"}`;

  return (
    <Toast
      tipo={tipo}
      titulo={
        saude.banco.conectado
          ? "Comunicação com o backend feita com sucesso"
          : "Backend no ar, banco indisponível"
      }
      descricao={descricao}
      duracaoMs={saude.banco.conectado ? 8000 : 0}
    />
  );
}
