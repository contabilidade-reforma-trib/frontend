import { CabecalhoDeSecao } from "@/components/ui/CabecalhoDeSecao";
import { DORES } from "@/lib/conteudo-da-landing";

export function SecaoDeProblema() {
  return (
    <section className="px-6 py-10 md:px-8">
      <CabecalhoDeSecao
        rotulo="O problema"
        titulo="A lei você já leu. O cliente não pergunta a lei."
        descricao="Todo material sobre a reforma explica o que muda. Quase nenhum explica o que fazer na segunda-feira de manhã, com o caso concreto na mesa."
      />

      <div className="grid gap-3.5 md:grid-cols-3">
        {DORES.map((dor) => (
          <article
            key={dor.pergunta}
            className="rounded-xl border border-borda-clara bg-white p-4"
          >
            <p className="mb-2 text-[14px] font-semibold leading-snug">
              &ldquo;{dor.pergunta}&rdquo;
            </p>
            <p className="text-[12.5px] leading-relaxed text-apagado">
              {dor.desenvolvimento}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
