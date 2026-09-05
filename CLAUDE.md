# Praxis — Frontend

## As regras deste repositório estão em [AGENTS.md](AGENTS.md)

Primeira vez aqui? [COMECE-AQUI.md](COMECE-AQUI.md) tem instalação, hooks e o prompt de abertura.

**Leia [AGENTS.md](AGENTS.md) inteiro agora, antes de escrever a primeira linha.** Ele é o arquivo canônico e vale para qualquer ferramenta de IA. As regras não estão duplicadas aqui de propósito — duas cópias divergem.

Depois dele, leia [docs/em-andamento.md](docs/em-andamento.md): é onde está a feature em curso e em que passo ela parou.

---

## Portões que valem mesmo que você não abra mais nada

Se por algum motivo você não puder ler o `AGENTS.md`, estes seis continuam valendo:

1. **Teste é parte da entrega.** Toda alteração entra com teste. Bug começa pelo teste que reproduz a falha.
2. **Peça revisão explícita** antes de mexer em fluxo de compra, login, regra de acesso, contrato de API ou tokens do design system.
3. **Antes de commitar:** faça a revisão de [docs/revisao-pre-commit.md](docs/revisao-pre-commit.md) sobre `git diff --staged` e **relate os achados à pessoa**. Achado bloqueante trava o commit.
4. **Antes de dar push:** `npm test && npm run build`, tudo verde. O hook `.githooks/pre-push` também barra, mas não conte com ele: avise a pessoa se algo alheio quebrou.
5. **Cor só sai dos tokens.** Hex escrito direto no componente é achado bloqueante.
6. **Nunca invente número, prazo ou alíquota** em texto de interface. Dado tributário vem do backend, ou aparece marcado como exemplo ilustrativo.

E o de sempre: não faça commit nem push sem o usuário pedir.

---

## Mapa dos documentos

| Arquivo | Para quê |
|---|---|
| [AGENTS.md](AGENTS.md) | **Regras canônicas.** Comece aqui |
| [docs/em-andamento.md](docs/em-andamento.md) | Feature em curso e em que passo parou |
| [docs/backlog.md](docs/backlog.md) | O que fazer, por prioridade |
| [docs/produto.md](docs/produto.md) | O que é o produto, para quem, como é vendido |
| [docs/design-system.md](docs/design-system.md) | Paleta, tipografia, composição — e por que essa paleta |
| [docs/padroes-frontend.md](docs/padroes-frontend.md) | Estrutura de pastas, componentes, testes, git |
| [docs/estado-atual.md](docs/estado-atual.md) | Onde o trabalho parou |
| `design/copiloto-fiscal.html` | Direção visual aprovada, cinco telas navegáveis |
