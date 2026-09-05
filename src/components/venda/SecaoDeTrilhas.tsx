import { CabecalhoDeSecao } from "@/components/ui/CabecalhoDeSecao";
import { TRILHAS } from "@/lib/conteudo-da-landing";

export function SecaoDeTrilhas() {
  return (
    <section className="px-6 py-10 md:px-8">
      <CabecalhoDeSecao
        rotulo="As trilhas"
        titulo="Organizadas pelo assunto que aparece no escritório"
        descricao="Não pela ordem dos artigos da lei. Você entra pela dor que tem hoje e o sistema monta o resto do caminho."
      />

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {TRILHAS.map((trilha) => (
          <article
            key={trilha.numero}
            className="flex flex-col overflow-hidden rounded-xl border border-borda-clara bg-white"
          >
            <div
              className={`relative flex h-[74px] items-end bg-gradient-to-br p-3 text-white ${trilha.classeDaCapa}`}
            >
              <span
                aria-hidden
                className="absolute -top-3.5 right-2 text-[56px] font-extrabold tracking-tighter opacity-20"
              >
                {trilha.numero}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] opacity-85">
                {trilha.assunto}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-1.5 p-3.5">
              <h3 className="text-[14.5px] font-bold leading-snug">
                {trilha.titulo}
              </h3>
              <p className="text-[12px] leading-relaxed text-apagado">
                {trilha.descricao}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
