import { Botao } from "@/components/ui/Botao";

/**
 * Exemplo de resposta mostrado na landing. É ilustrativo e está marcado como tal
 * na interface — dado tributário real vem do backend (CLAUDE.md §2.3 do frontend).
 */
const LINHAS_DA_SIMULACAO = [
  { descricao: "Retenção no ato (IBS + CBS)", valor: "−119.250" },
  { descricao: "Apuração do mês anterior", valor: "−118.700" },
];

const FONTES_DO_EXEMPLO = ["LC 214/2025 art. 31", "Trilha 03 · aula 3.3 · 12:40"];

export function Hero() {
  return (
    <section className="grid items-center gap-10 bg-gradient-to-b from-[#f6fafe] to-white px-6 py-12 md:px-8 lg:grid-cols-2">
      <div>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#cfe1f8] bg-[#eaf2fd] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-azul">
          Copiloto fiscal <span className="text-verde">●</span> Mentoria em
          reforma tributária
        </p>

        <h1 className="mb-4 max-w-[16ch] text-4xl font-extrabold leading-[1.03] md:text-[41px]">
          Pare de{" "}
          <span className="bg-gradient-to-b from-transparent from-62% to-[#fdecc4] to-62%">
            procurar na lei
          </span>{" "}
          o que o cliente precisa saber hoje.
        </h1>

        <p className="mb-5 max-w-[44ch] text-[15.5px] leading-relaxed text-apagado">
          Dois produtos, vendidos separados ou juntos: um{" "}
          <strong className="font-semibold text-tinta">copiloto de IA</strong>{" "}
          que responde a dúvida prática citando a fonte, e a{" "}
          <strong className="font-semibold text-tinta">mentoria em vídeo</strong>{" "}
          sobre reforma tributária aplicada. Leve o que você precisa agora — dá
          para adicionar o outro depois, sem perder nada.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Botao href="#preco" variante="compra">
            Ver as três ofertas
          </Botao>
          <Botao href="#copiloto" variante="contorno">
            Como o copiloto responde
          </Botao>
        </div>

        <p className="mt-3 text-[11.5px] text-apagado">
          Pix, boleto ou 12x no cartão · 7 dias de garantia · acesso imediato
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-navy-3 bg-navy shadow-[0_24px_48px_-26px_rgba(11,26,43,0.6)]">
        <div className="flex items-center gap-2.5 border-b border-navy-3 px-3.5 py-2.5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-apagado">
          <span className="block size-[7px] rounded-full bg-verde" />
          Copiloto · modo cálculo
          <span className="ml-auto text-azul-claro">exemplo ilustrativo</span>
        </div>

        <div className="p-4">
          <p className="mb-3.5 border-l-2 border-navy-3 pl-3 text-[12.5px] leading-relaxed text-[#9fb6c8]">
            Atacadista no RS, R$ 900 mil/mês, recebimento em 32 dias. Quanto de
            giro ele precisa no primeiro mês de split payment?
          </p>

          <p className="text-[13.5px] leading-relaxed text-[#dce7f0]">
            Cerca de <strong className="text-amarelo">R$ 238 mil</strong>. No mês
            da virada ele paga a apuração do regime antigo{" "}
            <strong className="text-amarelo">e</strong> perde a retenção do mês
            corrente. É efeito de caixa, não de carga.
          </p>

          <table className="mt-3 w-full overflow-hidden rounded-lg border border-navy-3 text-[11.5px]">
            <tbody>
              {LINHAS_DA_SIMULACAO.map((linha) => (
                <tr key={linha.descricao} className="border-b border-[#16304c]">
                  <td className="px-3 py-1.5 text-[#a9becd]">
                    {linha.descricao}
                  </td>
                  <td className="px-3 py-1.5 text-right font-mono text-[#f0917e]">
                    {linha.valor}
                  </td>
                </tr>
              ))}
              <tr className="bg-[#0f2237] font-semibold text-white">
                <td className="px-3 py-1.5">Giro adicional necessário</td>
                <td className="px-3 py-1.5 text-right font-mono">−237.950</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {FONTES_DO_EXEMPLO.map((fonte) => (
              <span
                key={fonte}
                className="rounded border border-[#1c4a3d] bg-verde/10 px-1.5 py-0.5 font-mono text-[9px] text-[#8fd3be]"
              >
                {fonte}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
