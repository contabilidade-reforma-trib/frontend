import Link from "next/link";
import { Botao } from "@/components/ui/Botao";

const ITENS_DE_NAVEGACAO = [
  { rotulo: "O copiloto", destino: "#copiloto" },
  { rotulo: "Mentoria", destino: "#mentoria" },
  { rotulo: "Quem somos", destino: "#quem-somos" },
  { rotulo: "Preço", destino: "#preco" },
  { rotulo: "Dúvidas", destino: "#duvidas" },
];

export function CabecalhoDeVenda() {
  return (
    <header className="flex flex-wrap items-center gap-6 border-b border-borda-clara px-6 py-3.5 md:px-8">
      <Link
        href="/"
        className="flex items-center gap-2.5 text-[17px] font-extrabold tracking-[-0.04em]"
      >
        <span className="relative block size-6 rounded-[7px] bg-navy">
          <span className="absolute inset-[7px] rounded-full bg-amarelo" />
        </span>
        Praxis Fiscal
      </Link>

      <nav className="hidden gap-5 text-[13px] font-medium text-apagado lg:flex">
        {ITENS_DE_NAVEGACAO.map((item) => (
          <a key={item.destino} href={item.destino} className="hover:text-tinta">
            {item.rotulo}
          </a>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-3 text-[13px] font-semibold">
        <Link href="/entrar" className="text-tinta hover:text-azul">
          Entrar
        </Link>
        <Botao href="#preco" variante="compra">
          Quero acesso
        </Botao>
      </div>
    </header>
  );
}
