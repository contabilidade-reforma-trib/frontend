import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Botao } from "./Botao";

describe("Botao", () => {
  it("Deve_renderizar_como_botao_quando_nao_recebe_href", () => {
    render(<Botao>Consultar</Botao>);

    const botao = screen.getByRole("button", { name: "Consultar" });
    expect(botao).toBeInTheDocument();
  });

  it("Deve_renderizar_como_link_quando_recebe_href", () => {
    render(<Botao href="#preco">Ver as ofertas</Botao>);

    const link = screen.getByRole("link", { name: "Ver as ofertas" });
    expect(link).toHaveAttribute("href", "#preco");
  });

  it("Deve_usar_o_amarelo_apenas_na_variante_de_compra", () => {
    const { rerender } = render(<Botao variante="compra">Assinar</Botao>);
    expect(screen.getByRole("button")).toHaveClass("bg-amarelo");

    rerender(<Botao variante="acao">Consultar</Botao>);
    expect(screen.getByRole("button")).not.toHaveClass("bg-amarelo");

    rerender(<Botao variante="contorno">Voltar</Botao>);
    expect(screen.getByRole("button")).not.toHaveClass("bg-amarelo");
  });
});
