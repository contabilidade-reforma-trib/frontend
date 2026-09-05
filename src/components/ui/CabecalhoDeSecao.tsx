type PropsDeCabecalhoDeSecao = {
  rotulo: string;
  titulo: string;
  descricao?: string;
};

export function CabecalhoDeSecao({
  rotulo,
  titulo,
  descricao,
}: PropsDeCabecalhoDeSecao) {
  return (
    <header className="mb-6 max-w-[60ch]">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-azul">
        {rotulo}
      </p>
      <h2 className="mb-2 text-[28px] font-bold leading-tight">{titulo}</h2>
      {descricao ? (
        <p className="text-[14.5px] leading-relaxed text-apagado">
          {descricao}
        </p>
      ) : null}
    </header>
  );
}
