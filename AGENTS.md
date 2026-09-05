# Praxis — Frontend

**Este é o arquivo canônico de regras deste repositório.** Vale para qualquer ferramenta de IA — Codex, Cursor, Copilot, Claude Code, Gemini, Windsurf — e para qualquer pessoa. `CLAUDE.md` e `.github/copilot-instructions.md` apenas apontam para cá; não há uma segunda cópia das regras, de propósito: duas cópias divergem.

Contexto obrigatório para qualquer sessão de IA neste repositório. Leia antes de escrever a primeira linha.

Primeira vez no projeto? Comece por **[COMECE-AQUI.md](COMECE-AQUI.md)** — instalação, credenciais, hooks e prompt de abertura para IA.

Ative os hooks de git uma vez por clone:

```bash
git config core.hooksPath .githooks
```

Documentos complementares: [produto](docs/produto.md) · [padrões de frontend](docs/padroes-frontend.md) · [design system](docs/design-system.md) · [estado atual](docs/estado-atual.md) · [em andamento](docs/em-andamento.md) · [backlog](docs/backlog.md)

**Comece toda sessão lendo [docs/em-andamento.md](docs/em-andamento.md)** — é onde está a feature em curso e em que passo ela parou.

Backend em repositório separado: `contabilidade-reforma-trib/backend`. O contexto de produto (`docs/produto.md`) é **idêntico** nos dois — ao alterar aqui, replique lá.

---

## 1. O que é o sistema

Plataforma para contadores brasileiros, especializada na **Reforma Tributária do consumo** (IBS, CBS, Imposto Seletivo). **Dois produtos vendidos separadamente**, sob o mesmo login:

1. **Copiloto** — assistente de IA que responde dúvidas práticas citando a fonte. Responde *como resolver*, não *o que a lei diz*.
2. **Mentoria** — plataforma de ensino em vídeo sobre o assunto. Não ensina a usar o copiloto e não depende dele.

Compra-se um, o outro, os dois, ou um agora e o outro depois. Detalhes em [docs/produto.md](docs/produto.md).

> A **Mentoria é uma aplicação inteira dentro da aplicação**, com navegação e submenus próprios — trilhas, aulas, materiais, progresso, plantões, certificado. Não a trate como uma lista de vídeos pendurada num menu.

## 2. Regras inegociáveis

### 2.1 Teste é parte da entrega

- **Toda** alteração — feature, correção de bug, refatoração — entra com **teste**. Sem teste, a tarefa não está pronta.
- Componente com lógica (estado, condicional, formatação, cálculo) tem teste de unidade.
- Fluxo que atravessa telas ou fala com a API tem teste de integração, com a API mockada.
- Correção de bug começa pelo teste que reproduz o bug falhando.

### 2.2 Peça revisão explícita antes de mexer no núcleo

Pare, descreva e aguarde resposta antes de alterar:

- Fluxo de compra, login ou liberação de acesso.
- Qualquer coisa que mude **o que o usuário pode ver** conforme o produto contratado.
- Contrato com a API já em uso.
- Tokens do design system (cor, tipografia, escala).
- Troca de biblioteca ou de padrão de estado.

### 2.3 Nomes dizem o que a coisa faz

- Componente e função com nome legível por quem nunca viu o código: `CartaoDeTrilha`, `useDireitoDeUso`.
- **Idioma:** domínio em **português** (`Trilha`, `Aula`, `Consulta`, `Assinatura`); técnico em **inglês** (`Provider`, `Layout`, `useState`). Nunca misturado no mesmo identificador.
- Nada de `data`, `item`, `handleClick2`, `Component1`.

### 2.4 Escalável desde agora

- Nada de componente de 400 linhas. Quebre por responsabilidade, não por tamanho.
- Listagem que pode crescer nasce paginada.
- Estado de servidor não é estado global de UI — não jogue resposta de API dentro de store global sem motivo.
- Imagem e vídeo entram otimizados; vídeo nunca é servido por link público de bucket.

### 2.5 Acesso é verificado, não presumido

O usuário pode ter Copiloto, Mentoria, ou os dois. A UI **pergunta** ao backend o direito de uso; nunca deduz do plano nem esconde regra no front. Produto não contratado aparece como oferta — não some do menu.

### 2.6 Segredo não entra no repositório

Variáveis de ambiente locais em `.env.local` (ignorado). Em produção, nas variáveis da Vercel. Nada de chave em código, nem em `NEXT_PUBLIC_` que não seja realmente público.

### 2.7 Antes de commitar: revisão obrigatória

Quando o commit é feito por IA, ele **não** é feito direto. Antes de `git commit`:

1. Faça a revisão do que está preparado (`git diff --staged`) seguindo **[docs/revisao-pre-commit.md](docs/revisao-pre-commit.md)**. No Claude Code há a skill `revisao-pre-commit` como atalho; em qualquer outra ferramenta, abra o documento e siga.
2. A revisão avalia: separação de responsabilidade, centralização do que se repete, **simplificação (KISS)**, legibilidade e nomenclatura, e aderência às regras deste arquivo.
3. **Relate os achados à pessoa que está desenvolvendo**, com arquivo e linha, antes de commitar. Não commite silenciosamente por cima de um achado.
4. Achado grave (regra de acesso decidida no front, token de design hardcoded, componente de `ui/` conhecendo domínio, valor tributário inventado em texto) **bloqueia o commit** até ser resolvido ou dispensado explicitamente pela pessoa.

### 2.8 Antes de dar push: suíte inteira verde

Quando o push é feito por IA, antes de `git push`:

1. Rode **toda** a suíte do repositório, não só os testes da feature em questão, mais o build de produção.

```bash
npm test && npm run build
```

2. Push só acontece com **tudo** verde. Um único teste vermelho, mesmo em área não tocada, cancela o push.
3. Se algo alheio à sua alteração quebrou, **avise a pessoa** e pergunte o que fazer. Não pule o teste, não marque como `skip`, não empurre para depois.

## 3. Antes de encerrar qualquer tarefa

1. Build sem erro e sem warning novo
2. Testes verdes
3. Teste escrito para o que mudou
4. Layout conferido em desktop **e** mobile — o contador consulta o copiloto no celular, em reunião
5. [docs/em-andamento.md](docs/em-andamento.md) com os passos atualizados
6. [docs/estado-atual.md](docs/estado-atual.md) atualizado
7. [docs/backlog.md](docs/backlog.md) atualizado, se algo novo foi descoberto ou concluído
8. Nada de segredo no diff

Não faça commit nem push sem o usuário pedir. Quando pedir:

- **Commit** → revisão de [docs/revisao-pre-commit.md](docs/revisao-pre-commit.md) antes, achados relatados (§2.7).
- **Push** → suíte inteira verde antes (§2.8).
