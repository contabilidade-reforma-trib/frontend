import { CabecalhoDeSecao } from "@/components/ui/CabecalhoDeSecao";
import { PRODUTOS } from "@/lib/conteudo-da-landing";

const CLASSE_DO_TOPO: Record<string, string> = {
  copiloto: "bg-navy",
  mentoria: "bg-azul",
};

export function SecaoDeProdutos() {
  return (
    <section
      id="copiloto"
      className="border-y border-borda-clara bg-papel px-6 py-10 md:px-8"
    >
      <CabecalhoDeSecao
        rotulo="O que você recebe"
        titulo="Dois produtos. Compre um, o outro, ou os dois."
        descricao="Não é um curso com chatbot de brinde, nem um chatbot com aulas de brinde. São produtos que funcionam sozinhos e são vendidos separados. Quem leva os dois paga menos e ganha uma coisa a mais: as aulas viram fonte citável do copiloto."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {PRODUTOS.map((produto) => (
          <article
            key={produto.id}
            id={produto.id === "mentoria" ? "mentoria" : undefined}
            className="flex flex-col overflow-hidden rounded-2xl border border-borda-clara"
          >
            <header className={`${CLASSE_DO_TOPO[produto.id]} px-5 py-4 text-white`}>
              <p className="mb-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] opacity-80">
                {produto.rotulo}
              </p>
              <h3 className="mb-1.5 text-[22px] font-bold">{produto.nome}</h3>
              <p className="text-[13px] leading-relaxed opacity-90">
                {produto.resumo}
              </p>
            </header>

            <ul className="flex flex-1 flex-col gap-2.5 bg-white px-5 py-4">
              {produto.itens.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[18px_1fr] gap-2.5 text-[13px] leading-snug text-apagado"
                >
                  <span aria-hidden className="font-bold text-verde">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="border-t border-borda-clara bg-papel px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.08em] text-apagado">
              {produto.independencia}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
