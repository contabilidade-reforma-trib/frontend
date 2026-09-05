import { CabecalhoDeSecao } from "@/components/ui/CabecalhoDeSecao";
import { MENTORAS } from "@/lib/conteudo-da-landing";

export function SecaoQuemSomos() {
  return (
    <section
      id="quem-somos"
      className="border-y border-borda-clara bg-papel px-6 py-10 md:px-8"
    >
      <CabecalhoDeSecao
        rotulo="Quem somos"
        titulo="Duas profissionais na ativa — não uma produtora de curso"
        descricao="A contadora atende clientes hoje e já conduz mentorias; a advogada responde pela fundamentação. Todo procedimento que entra na plataforma passou antes por um cliente real."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {MENTORAS.map((mentora) => (
          <article
            key={mentora.iniciais}
            className="grid grid-cols-[52px_1fr] gap-3.5 rounded-xl border border-borda-clara bg-white p-4"
          >
            <span
              aria-hidden
              className="flex size-[52px] items-center justify-center rounded-xl bg-navy-2 text-base font-bold text-white"
            >
              {mentora.iniciais}
            </span>

            <div>
              <h3 className="mb-0.5 text-[15px] font-bold">{mentora.papel}</h3>
              <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.06em] text-azul">
                {mentora.registro}
              </p>
              <p className="text-[12.5px] leading-relaxed text-apagado">
                {mentora.descricao}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
