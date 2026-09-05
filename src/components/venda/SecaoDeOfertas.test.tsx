import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SecaoDeOfertas } from "./SecaoDeOfertas";
import { OFERTAS } from "@/lib/conteudo-da-landing";

describe("SecaoDeOfertas", () => {
  it("Deve_oferecer_os_dois_produtos_separados_e_o_combo", () => {
    render(<SecaoDeOfertas />);

    expect(screen.getByRole("heading", { name: "Copiloto" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Mentoria" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Combo" })).toBeInTheDocument();
  });

  it("Deve_usar_o_amarelo_somente_no_combo", () => {
    render(<SecaoDeOfertas />);

    const botaoDoCombo = screen.getByRole("button", { name: "Quero os dois" });
    expect(botaoDoCombo).toHaveClass("bg-amarelo");

    for (const oferta of OFERTAS.filter((o) => !o.destaque)) {
      const botao = screen.getByRole("button", { name: oferta.chamada });
      expect(botao).not.toHaveClass("bg-amarelo");
    }
  });

  it("Deve_ancorar_o_preco_apenas_onde_ha_economia_real", () => {
    render(<SecaoDeOfertas />);

    const ofertasComAncora = OFERTAS.filter((oferta) => oferta.ancora);
    expect(ofertasComAncora).toHaveLength(1);
    expect(screen.getByText(ofertasComAncora[0].ancora!)).toBeInTheDocument();
  });

  it("Deve_deixar_claro_que_da_para_adicionar_o_outro_produto_depois", () => {
    render(<SecaoDeOfertas />);

    expect(screen.getByText(/desconto proporcional/i)).toBeInTheDocument();
  });
});
