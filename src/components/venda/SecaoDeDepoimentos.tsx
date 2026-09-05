import { CabecalhoDeSecao } from "@/components/ui/CabecalhoDeSecao";
import { DEPOIMENTOS } from "@/lib/conteudo-da-landing";

export function SecaoDeDepoimentos() {
  return (
    <section className="px-6 py-10 md:px-8">
      <CabecalhoDeSecao
        rotulo="Prova social"
        titulo="O que mudou na rotina de quem já entrou"
      />

      <div className="grid gap-3.5 md:grid-cols-3">
        {DEPOIMENTOS.map((depoimento) => (
          <figure
            key={depoimento.iniciais}
            className="rounded-xl border border-borda-clara bg-white p-4"
          >
            <p aria-hidden className="mb-2 tracking-[2px] text-amarelo">
              ★★★★★
            </p>
            <blockquote className="mb-3 text-[13.5px] leading-relaxed">
              &ldquo;{depoimento.texto}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-2.5 text-[11.5px] text-apagado">
              <span
                aria-hidden
                className="flex size-[26px] items-center justify-center rounded-full border border-borda-clara bg-papel text-[10px] font-bold text-navy"
              >
                {depoimento.iniciais}
              </span>
              {depoimento.autor}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
