# Padrões — frontend

Complementa as regras inegociáveis do [AGENTS.md](../AGENTS.md).

## 1. Stack

- **Next.js** (App Router) em TypeScript, hospedado na Vercel.
- TypeScript em modo estrito. `any` precisa de justificativa escrita no código.
- Estado de servidor separado de estado de UI. Não guarde resposta de API em store global sem motivo.

## 2. Organização

```
src/
  app/                    rotas (App Router)
    (venda)/              landing, checkout simulado
    (app)/
      copiloto/
      mentoria/           aplicação própria, com layout e submenus próprios
  components/
    ui/                   primitivos sem regra de negócio (Botao, Campo, Selo)
    copiloto/             componentes do domínio Copiloto
    mentoria/             componentes do domínio Mentoria
  lib/                    cliente de API, formatação, hooks
  docs/
```

Componente em `ui/` **não** conhece domínio. Se ele precisa saber o que é uma Trilha, não pertence a `ui/`.

## 3. Componentes

- Um componente por arquivo, nome do arquivo igual ao do componente.
- Props tipadas explicitamente. Nada de `props: any`.
- Componente que passa de ~150 linhas normalmente é dois.
- Formatação de valor (moeda, percentual, data) vive em `lib/`, nunca repetida dentro do JSX.
- Toda listagem tem estado vazio, estado de carregamento e estado de erro escritos. Tela que só funciona no caminho feliz não está pronta.

## 4. Texto de interface

Palavra é material de design.

- Escreva do lado do usuário: ele gerencia **assinatura**, não *entitlement*; vê **fontes**, não *chunks*.
- Botão diz exatamente o que acontece: "Consultar", "Assinar", "Ir ao minuto".
- Mensagem de erro diz o que houve **e** o que fazer. Sem pedido de desculpa, sem vago.
- Nunca invente número, prazo ou alíquota em texto de interface. Dado tributário sai do backend ou não aparece.

## 5. Acesso

O usuário pode ter Copiloto, Mentoria ou ambos, com vigências diferentes.

- A UI **pergunta** ao backend qual direito de uso está ativo. Não deduz do plano, não guarda cópia, não decide no front.
- Produto não contratado continua visível no menu, como oferta. Sumir com ele esconde a possibilidade de venda.
- Nenhuma regra de acesso é implementada apenas no front. O front esconde; o backend proíbe.

## 6. Testes

- Componente com lógica: teste de unidade cobrindo condicional, formatação e estado.
- Fluxo entre telas ou com API: teste de integração com a API mockada.
- Bug: primeiro o teste que reproduz falhando, depois a correção.
- Não teste detalhe de implementação (nome de classe CSS, ordem interna de hook). Teste o que o usuário vê e faz.

## 7. Desempenho

- Componente de servidor por padrão; cliente só onde há interação.
- Listagem paginada desde o primeiro dia.
- Vídeo por URL assinada com validade curta, nunca link público de bucket.
- Imagem pelo componente otimizado do Next, com dimensão declarada.

## 8. Git

- Não commitar nem dar push sem o usuário pedir.
- Branch por tarefa: `feat/`, `fix/`, `chore/` + kebab-case.
- Commit no imperativo, em português, dizendo o efeito.
- `.env.local` nunca entra. Confira com `git status`.

### 8.1 Portão de commit

Commit feito por IA passa antes pela skill **`revisao-pre-commit`**, sobre `git diff --staged`. Os achados são **relatados à pessoa** antes do commit. Achado bloqueante (segredo, teste ausente, regra de acesso decidida no front, token de design hardcoded, dado tributário inventado, `ui/` conhecendo domínio, nome que engana) trava o commit até ser corrigido ou dispensado explicitamente.

### 8.2 Portão de push

Push feito por IA exige a **suíte inteira verde** e o build de produção passando — não só o que a feature tocou:

```bash
npm test && npm run build
```

Um único teste vermelho, mesmo em área que você não encostou, cancela o push. Nesse caso, **avise a pessoa e pergunte o que fazer**. Não marque como `skip`, não comente o teste, não deixe para depois.
