# Revisão pré-commit — frontend

## Quando

Antes de **todo** `git commit` feito por IA. A revisão é sobre o que está preparado, não sobre o repositório inteiro.

```bash
git diff --staged
```

Se nada estiver preparado, revise o que será preparado e diga isso no relatório.

## O que olhar aqui

Cinco eixos. Cada achado com **arquivo:linha**, o problema e a correção concreta.

### 1. Separação de responsabilidade

- Componente em `components/ui/` que conhece domínio (sabe o que é Trilha, Consulta, Assinatura)? `ui/` é primitivo, não conhece o produto.
- Componente misturando busca de dados, regra e apresentação? Separe.
- Formatação de moeda, percentual ou data escrita dentro do JSX em vez de `lib/`?
- Chamada de API espalhada em componente em vez de passar pelo cliente de API?
- **Regra de acesso decidida no front?** O front esconde; o backend proíbe. Decidir no front é bloqueante.
- Estado de servidor jogado em store global sem motivo.

### 2. Centralização

- Mesmo bloco de JSX repetido em duas telas? Vira componente.
- Mesma formatação ou mesma chamada duplicada?
- Literal repetida (rótulo, rota, chave de query) que deveria ser constante nomeada?
- **Token de design hardcoded** — `#0B1A2B`, `#F0B429` escritos direto em vez da variável CSS. Bloqueante: quebra o design system silenciosamente.
- Já existe componente ou hook que faz isso? Procure antes de aceitar código novo.

Cuidado com o excesso: dois componentes parecidos hoje não são necessariamente o mesmo componente. Unificar cedo demais produz componente com sete props booleanas.

### 3. Simplificação — KISS

- `useEffect` que poderia ser derivação direta do estado.
- Estado guardando o que dá para calcular.
- Componente cliente onde componente de servidor bastaria.
- Abstração com um único uso.
- Componente com muitas props booleanas de configuração — normalmente são dois componentes.
- Aninhamento profundo de ternário no JSX.
- Biblioteca nova para algo que dez linhas resolvem.

A pergunta guia: **existe uma versão mais simples disto?** Se existir, é achado.

### 4. Legibilidade e nomenclatura

- Nome genérico: `data`, `item`, `handleClick2`, `Component1`, `temp`.
- Idioma misturado no mesmo identificador. Domínio em português, técnico em inglês.
- Componente que não diz o que é: `CartaoDeTrilha` vence `Card`.
- Boolean sem `esta`, `possui`, `deve`, `pode`.
- **Nome que engana** — o componente faz mais do que o nome diz.
- `any` sem justificativa escrita.

### 5. Regras do repositório

Consulte [AGENTS.md](../AGENTS.md) e [docs/padroes-frontend.md](./padroes-frontend.md).

- **Teste para o que mudou?** Faltou, é bloqueante.
- Segredo no diff? `.env.local` preparado? Chave em `NEXT_PUBLIC_` que não é pública? Bloqueante.
- **Número, prazo ou alíquota inventado em texto de interface?** Dado tributário vem do backend ou não aparece. Bloqueante.
- Listagem sem estado vazio, de carregamento e de erro?
- Listagem que pode crescer sem paginação?
- Vídeo ou material por link público de bucket em vez de URL assinada?
- Foco de teclado invisível, contraste não conferido nos dois ambientes, cor como único portador de informação?
- Layout conferido em mobile? A tela do copiloto é usada no celular em reunião.
- Alteração em fluxo de compra, login, regra de acesso, contrato de API ou token de design **sem** ter pedido revisão explícita antes?

## Bloqueiam neste repositório

Além dos bloqueantes comuns (segredo, teste ausente, regra duplicada, nome que engana):

- Regra de acesso decidida no front.
- Token de design hardcoded — hex escrito direto no componente.
- Dado tributário inventado em texto de interface.
- Componente de `ui/` conhecendo domínio.

## Severidade

| Nível | Significado |
|---|---|
| **Bloqueia** | Não commite. Corrija, ou peça dispensa explícita à pessoa. |
| **Recomenda** | Vale corrigir agora; a pessoa decide. |
| **Observa** | Fica registrado, não trava nada. |

Bloqueiam nos dois repositórios: **segredo no diff**, **teste ausente** para o que mudou, **regra duplicada ou no lugar errado**, **nome que engana**, e alteração de núcleo feita **sem a revisão explícita** que o `AGENTS.md` exige.

## Formato do relatório

Sempre relate à pessoa antes de commitar, mesmo quando não houver nada.

```
REVISÃO PRÉ-COMMIT — 7 arquivos, +212/−38

BLOQUEIA
  caminho/do/arquivo.ext:64
    O que está errado, em uma frase.
    → A correção concreta.

RECOMENDA
  caminho/do/arquivo.ext:22
    O que está errado.
    → A correção concreta.

OBSERVA
  caminho/do/arquivo.ext:31
    Observação que não trava nada.

Nada bloqueante além do item acima. Confirma o commit?
```

Achado sem **arquivo:linha** e sem proposta de correção não serve.

## Regras da própria revisão

- **Não corrija silenciosamente.** Relate. A pessoa decide o que entra.
- Não commite por cima de achado bloqueante sem dispensa explícita.
- Não invente achado para parecer útil. **"Nada a apontar" é resultado legítimo** e deve ser dito com todas as letras.
- Revise **o diff**, não o repositório. Código antigo encontrado de passagem vira item no `docs/backlog.md` do repositório, não bloqueio de commit.
- Alteração que atravessa os dois repositórios gera **dois commits**, cada um com sua própria revisão.
