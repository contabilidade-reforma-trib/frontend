import { Botao } from "@/components/ui/Botao";
import { OFERTAS } from "@/lib/conteudo-da-landing";

const MEIOS_DE_PAGAMENTO = ["Pix", "Boleto", "Cartão 12x", "Nota fiscal"];

export function SecaoDeOfertas() {
  return (
    <section id="preco" className="bg-navy px-6 py-11 text-white md:px-8">
      <div className="max-w-[1060px]">
        <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-amarelo">
          A oferta
        </p>
        <h2 className="mb-2 text-[29px] font-bold leading-tight">
          Escolha o que você precisa agora
        </h2>
        <p className="max-w-[62ch] text-[14.5px] leading-relaxed text-[#a9becd]">
          Os dois produtos são independentes. Comece por um e adicione o outro
          quando quiser — o histórico das suas consultas e o progresso das aulas
          continuam onde estavam.
        </p>

        <div className="mt-5 grid gap-3.5 lg:grid-cols-3">
          {OFERTAS.map((oferta) => (
            <article
              key={oferta.id}
              className={`flex flex-col rounded-2xl border p-5 ${
                oferta.destaque
                  ? "border-amarelo bg-[#132c43]"
                  : "border-navy-3 bg-[#0f2337]"
              }`}
            >
              <p
                className={`mb-2 flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.13em] ${
                  oferta.destaque ? "text-amarelo" : "text-[#8aa2b5]"
                }`}
              >
                <span>{oferta.rotulo}</span>
                {oferta.destaque ? <span>Mais escolhido</span> : null}
              </p>

              <h3 className="mb-1 text-[18px] font-bold">{oferta.nome}</h3>
              <p className="mb-3.5 min-h-[34px] text-[12px] leading-snug text-[#8aa2b5]">
                {oferta.resumo}
              </p>

              {oferta.ancora ? (
                <p className="text-[13px] text-[#8aa2b5] line-through">
                  {oferta.ancora}
                </p>
              ) : null}

              <p
                data-numerico
                className="mb-1 text-[30px] font-extrabold leading-none tracking-tight"
              >
                {oferta.parcelado}
              </p>
              <p className="mb-3.5 text-[12.5px] text-[#8aa2b5]">
                {oferta.aVista}
              </p>

              <ul className="mb-4 flex flex-col gap-1.5 text-[12.5px] leading-snug text-[#c3d3e0]">
                {oferta.itens.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="font-bold text-verde">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Botao
                variante={oferta.destaque ? "compra" : "acao"}
                className="mt-auto text-center"
              >
                {oferta.chamada}
              </Botao>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-6 border-t border-navy-3 pt-4">
          <p className="flex max-w-[420px] items-center gap-3 text-[11.5px] leading-snug text-[#a9becd]">
            <span
              aria-hidden
              className="flex size-[34px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-verde text-[11px] font-extrabold text-verde"
            >
              7d
            </span>
            Se em 7 dias você achar que não é para você, devolvemos tudo. Sem
            formulário e sem pergunta.
          </p>

          <ul className="flex flex-wrap gap-1.5">
            {MEIOS_DE_PAGAMENTO.map((meio) => (
              <li
                key={meio}
                className="rounded border border-navy-3 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.06em] text-[#8aa2b5]"
              >
                {meio}
              </li>
            ))}
          </ul>

          <p className="max-w-[36ch] text-[12.5px] leading-snug text-[#a9becd]">
            Já é assinante de um deles? O outro entra com desconto proporcional
            direto no painel.
          </p>
        </div>
      </div>
    </section>
  );
}
