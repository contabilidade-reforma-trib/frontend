const GARANTIAS = [
  "Acesso imediato após o pagamento",
  "7 dias de garantia incondicional",
  "Certificado de conclusão",
  "Base normativa atualizada",
];

export function BarraDeConfianca() {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-2 bg-navy px-6 py-3.5 text-[12px] text-[#a9becd] md:px-8">
      {GARANTIAS.map((garantia) => (
        <span key={garantia} className="flex items-center gap-2">
          <span aria-hidden className="text-verde">
            ✓
          </span>
          {garantia}
        </span>
      ))}
    </div>
  );
}
