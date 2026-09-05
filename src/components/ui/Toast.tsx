"use client";

import { useEffect, useState } from "react";

export type TipoDeToast = "sucesso" | "erro" | "carregando";

const ESTILO_POR_TIPO: Record<TipoDeToast, string> = {
  sucesso: "border-verde/40 bg-navy text-white",
  erro: "border-vermelho/50 bg-navy text-white",
  carregando: "border-borda-escura bg-navy text-white",
};

const COR_DO_PONTO: Record<TipoDeToast, string> = {
  sucesso: "bg-verde",
  erro: "bg-vermelho",
  carregando: "bg-amarelo",
};

type PropsDeToast = {
  tipo: TipoDeToast;
  titulo: string;
  descricao?: string;
  /** Milissegundos até sumir sozinho. Zero mantém na tela. */
  duracaoMs?: number;
  aoFechar?: () => void;
};

export function Toast({
  tipo,
  titulo,
  descricao,
  duracaoMs = 0,
  aoFechar,
}: PropsDeToast) {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    if (duracaoMs <= 0) return;

    const temporizador = setTimeout(() => {
      setVisivel(false);
      aoFechar?.();
    }, duracaoMs);

    return () => clearTimeout(temporizador);
  }, [duracaoMs, aoFechar]);

  if (!visivel) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-4 right-4 z-50 flex max-w-[min(92vw,380px)] items-start gap-3 rounded-xl border px-4 py-3 shadow-[0_18px_40px_-18px_rgba(11,26,43,0.8)] ${ESTILO_POR_TIPO[tipo]}`}
    >
      <span
        aria-hidden
        className={`mt-1.5 block size-2 shrink-0 rounded-full ${COR_DO_PONTO[tipo]} ${
          tipo === "carregando" ? "animate-pulse" : ""
        }`}
      />

      <div className="min-w-0">
        <p className="text-[13.5px] font-semibold leading-snug">{titulo}</p>
        {descricao ? (
          <p className="mt-0.5 text-[12px] leading-relaxed text-[#a9becd]">
            {descricao}
          </p>
        ) : null}
      </div>

      <button
        type="button"
        onClick={() => {
          setVisivel(false);
          aoFechar?.();
        }}
        aria-label="Fechar aviso"
        className="ml-auto -mr-1 -mt-1 shrink-0 rounded px-1.5 py-0.5 text-[#8fa8bc] hover:text-white"
      >
        ×
      </button>
    </div>
  );
}
