# Comece aqui — frontend

Guia de entrada para quem vai desenvolver neste repositório, com ou sem assistente de IA.

## 1. Como a pasta de trabalho é organizada

```
Sistema Contabilidade Tributaria/   ← pasta comum, SEM git próprio
  frontend/                         ← este repositório (Next.js, Vercel)
  backend/                          ← repositório separado (.NET, Railway)
```

Dois repositórios independentes, lado a lado. **A pasta que os contém não é um repositório** — não existe nada versionado nela, e nunca rode `git init` ali. Todo comando git roda dentro de `frontend/` ou de `backend/`, e commit e push são sempre por repositório.

**Abra sua ferramenta na pasta de cima**, a que contém os dois, e não dentro de `frontend/`. Você vai precisar do backend como contexto para mexer aqui, e eventualmente vai atravessar os dois numa mesma feature.

## 2. Pré-requisitos

| Ferramenta | Versão | Conferir com |
|---|---|---|
| Node | 24 ou superior | `node --version` |
| Git | qualquer recente | `git --version` |

## 3. Preparar

```bash
npm --prefix frontend install
```

```bash
git -C frontend config core.hooksPath .githooks
```

O `core.hooksPath` é **obrigatório e não dá para pular**: liga o `pre-push`, que roda a suíte inteira e o build antes de qualquer push. Configuração de git não é versionada, então cada clone precisa fazer isso uma vez. Sem ele, o portão de push não existe na sua máquina.

Conferindo:

```bash
npm --prefix frontend test
```

```bash
npm --prefix frontend run dev
```

Abre em `http://localhost:3000`. Não há variável de ambiente a configurar — a landing é estática e ainda não fala com a API.

## 4. Leia nesta ordem

1. **[AGENTS.md](AGENTS.md)** — regras obrigatórias. É o arquivo canônico deste repositório.
2. **[docs/produto.md](docs/produto.md)** — o que é o produto e como é vendido.
3. **[docs/em-andamento.md](docs/em-andamento.md)** — onde o trabalho parou.
4. **[docs/design-system.md](docs/design-system.md)** — paleta, tipografia, e por que essa paleta.

Referência visual: abra `design/copiloto-fiscal.html` no navegador. São as cinco telas aprovadas.

> `docs/produto.md` existe **idêntico** em `backend/docs/produto.md`, porque cada repositório precisa se sustentar sozinho. **Alterou aqui, replique lá na mesma tarefa.**

## 5. Se você vai usar IA

Codex, Cursor e Copilot carregam o `AGENTS.md` automaticamente **quando ele está na pasta que você abriu**. Como você vai abrir a pasta de cima, que não tem `AGENTS.md`, **nada é carregado sozinho**. A skill abaixo resolve isso.

### Instale a skill de contexto — uma vez só

O Codex procura skills em `.agents/skills/` **da pasta que ele abriu** — no nosso caso, a pasta que contém `frontend/` e `backend/`. O arquivo da skill mora versionado dentro dos repositórios; o comando abaixo só o materializa na raiz.

Rode **de dentro da pasta raiz** (`C:\Workspace\Sistema Contabilidade Tributaria`), no cmd:

```bash
xcopy /E /I /Y frontend\.agents\skills\praxis-contexto .agents\skills\praxis-contexto
```

Ou no Git Bash:

```bash
mkdir -p .agents/skills && cp -r frontend/.agents/skills/praxis-contexto .agents/skills/
```

> A cópia na raiz é **gerada**, não versionada — some se você refizer a pasta e não vem no `git clone`. Precisou mudar a skill? Mude em `frontend/.agents/skills/praxis-contexto/SKILL.md`, replique no backend, e rode o comando de novo. Editar direto a cópia da raiz é trabalho que se perde.

### Use no início de toda sessão

```
/praxis-contexto
```

A skill **não contém as regras** — ela manda ler os `AGENTS.md` dos repositórios, que são a fonte da verdade. É por isso que ela nunca desatualiza: quando uma regra muda no repositório, a skill continua correta. Nunca copie regra para dentro dela.

Rode de novo ao **trocar de repositório** no meio da sessão: as regras do front e do back não são iguais.

> O arquivo da skill existe **idêntico** em `backend/.agents/skills/praxis-contexto/`, porque cada repositório precisa se sustentar sozinho. Alterou aqui, replique lá na mesma tarefa.

Se a skill não estiver disponível por algum motivo, o equivalente colado à mão é:

```
Antes de tocar em qualquer arquivo, leia inteiros frontend/AGENTS.md e
frontend/docs/em-andamento.md. Confirme listando a regra de teste, o que exige
revisão explícita minha, e os portões de commit e push. Não faça commit nem
push sem eu pedir.
```

**Não rode em modo totalmente automático** (`--yolo` no Codex) enquanto estiver aprendendo o projeto. Boa parte das regras depende de a IA **parar e te perguntar** — fluxo de compra, regra de acesso, contrato de API, tokens de design. Em modo automático ela não para, e o portão vira decoração.

No Claude Code, o `CLAUDE.md` aponta para o `AGENTS.md`, e as skills em `.claude/skills/` são atalhos cujo conteúdo mora em `docs/` — nada se perde em outra ferramenta.

## 6. As cinco coisas que mais dão problema

1. **Cor escrita direto no componente.** Use os tokens (`bg-navy`, `text-amarelo`). Hex solto quebra o design system em silêncio e é achado bloqueante.
2. **Amarelo fora do botão de compra.** Ele é exclusivo do CTA de venda. Espalhou, perdeu a função.
3. **Número tributário inventado em texto.** Alíquota, prazo, valor: vem do backend, ou aparece marcado como exemplo ilustrativo.
4. **Componente em `ui/` que conhece domínio.** `ui/` é primitivo. Se precisa saber o que é uma Trilha, o lugar é `components/mentoria/`.
5. **Regra de acesso decidida no front.** O front esconde; o backend proíbe.

## 7. Antes de pedir commit ou push

- **Commit** → revisão do diff seguindo [docs/revisao-pre-commit.md](docs/revisao-pre-commit.md), com os achados relatados a você.
- **Push** → `npm test && npm run build` verdes. O hook barra, mas não conte só com ele.
- Terminou uma etapa? Atualize [docs/em-andamento.md](docs/em-andamento.md). É o que a próxima sessão vai ler.

## 8. Onde pedir ajuda

Decisão que ainda não foi tomada e trava o trabalho: veja se já está em [docs/backlog.md](docs/backlog.md) ou em `backend/docs/decisoes.md`, onde moram as decisões de produto e arquitetura. Se não estiver, pergunte antes de escolher por conta própria — decisão tomada silenciosamente por IA é o tipo de coisa que só aparece três semanas depois.
