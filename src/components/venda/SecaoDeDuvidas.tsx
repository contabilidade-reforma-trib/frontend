import { CabecalhoDeSecao } from "@/components/ui/CabecalhoDeSecao";
import { DUVIDAS } from "@/lib/conteudo-da-landing";

export function SecaoDeDuvidas() {
  return (
    <section id="duvidas" className="px-6 py-10 md:px-8">
      <CabecalhoDeSecao
        rotulo="Dúvidas"
        titulo="O que perguntam antes de assinar"
      />

      <div className="grid gap-2.5 lg:grid-cols-2">
        {DUVIDAS.map((duvida) => (
          <article
            key={duvida.pergunta}
            className="rounded-xl border border-borda-clara bg-white px-4 py-3.5"
          >
            <h3 className="mb-1.5 text-[13.5px] font-bold">
              {duvida.pergunta}
            </h3>
            <p className="text-[12.5px] leading-relaxed text-apagado">
              {duvida.resposta}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
