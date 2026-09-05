import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Variantes por papel, não por cor solta.
 * "compra" é a única que usa amarelo — ver docs/design-system.md §2.
 */
export type VarianteDeBotao = "compra" | "acao" | "contorno";

const CLASSES_POR_VARIANTE: Record<VarianteDeBotao, string> = {
  compra: "bg-amarelo text-[#2a1d02] hover:brightness-105",
  acao: "bg-azul text-white hover:bg-azul-claro",
  contorno:
    "border border-borda-clara text-tinta hover:border-tinta bg-transparent",
};

type PropsDeBotao = {
  children: ReactNode;
  variante?: VarianteDeBotao;
  href?: string;
  className?: string;
};

export function Botao({
  children,
  variante = "acao",
  href,
  className = "",
}: PropsDeBotao) {
  const classes = `inline-block rounded-lg px-5 py-2.5 text-sm font-bold tracking-tight transition ${CLASSES_POR_VARIANTE[variante]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
