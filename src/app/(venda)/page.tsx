import { TesteDeComunicacao } from "@/components/sistema/TesteDeComunicacao";
import { BarraDeConfianca } from "@/components/venda/BarraDeConfianca";
import { CabecalhoDeVenda } from "@/components/venda/CabecalhoDeVenda";
import { Hero } from "@/components/venda/Hero";
import { RodapeDeVenda } from "@/components/venda/RodapeDeVenda";
import { SecaoDeDepoimentos } from "@/components/venda/SecaoDeDepoimentos";
import { SecaoDeDuvidas } from "@/components/venda/SecaoDeDuvidas";
import { SecaoDeOfertas } from "@/components/venda/SecaoDeOfertas";
import { SecaoDeProblema } from "@/components/venda/SecaoDeProblema";
import { SecaoDeProdutos } from "@/components/venda/SecaoDeProdutos";
import { SecaoDeTrilhas } from "@/components/venda/SecaoDeTrilhas";
import { SecaoQuemSomos } from "@/components/venda/SecaoQuemSomos";

export default function PaginaDeVendas() {
  return (
    <main>
      <CabecalhoDeVenda />
      <Hero />
      <BarraDeConfianca />
      <SecaoDeProblema />
      <SecaoDeProdutos />
      <SecaoDeTrilhas />
      <SecaoQuemSomos />
      <SecaoDeDepoimentos />
      <SecaoDeOfertas />
      <SecaoDeDuvidas />
      <RodapeDeVenda />
      <TesteDeComunicacao />
    </main>
  );
}
