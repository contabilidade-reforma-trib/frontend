# Backlog — frontend

Tudo que deve ou pode ser feito, com prioridade. O que está **em execução agora** não fica aqui — fica em [em-andamento.md](em-andamento.md).

## Escala de prioridade

| Nível | Significado | Critério |
|---|---|---|
| **P0** | Trava outras coisas | Ninguém consegue avançar enquanto não existir |
| **P1** | Necessário para a POC | Sem isso a POC não demonstra o produto |
| **P2** | Importante, depois da POC | Necessário para produção, não para demonstrar |
| **P3** | Ideia | Vale considerar; ninguém está esperando |

Ao concluir um item, mova para **Concluídos** com a data. Não apague.

---

## P0 — trava outras coisas

| # | Item | Observação |
|---|---|---|
| F-01 | Primitivos de `ui/`: `Campo`, `Selo`, `Cartao`, `Secao` | Toda tela depende; `Botao` já existe |

## P1 — necessário para a POC

| # | Item | Observação |
|---|---|---|
| F-04 | Três ofertas com checkout simulado (Copiloto, Mentoria, Combo) | Inclui "adicionar o outro depois" |
| F-05 | Login e cadastro | Depende de autenticação no backend |
| F-06 | Cadastro que monta a trilha: 4 perguntas com prévia ao vivo | A prévia reordenando é o ponto alto da tela |
| F-07 | Roteamento por direito de uso após login | Quem tem copiloto cai no copiloto; quem só tem mentoria, na mentoria |
| F-08 | Tela do Copiloto: conversa, modos, fontes, joinha | Precisa funcionar bem no celular |
| F-09 | Mentoria: layout próprio com submenus | Aplicação inteira; maior superfície do front |
| F-10 | Mentoria: player, transcrição com marcação de tempo, anexos | |
| F-11 | Ponte copiloto ↔ aula ("perguntar sobre este trecho") | Só aparece para quem tem os dois produtos |
| F-12 | Área administrativa | Telas já desenhadas |
| F-13 | Estados vazio, carregando e erro em todas as listagens | Regra do repositório; não deixar para o fim |

## P2 — depois da POC

| # | Item | Observação |
|---|---|---|
| F-14 | Revisão de acessibilidade nos dois ambientes | Contraste, foco, cor não sendo o único sinal |
| F-15 | Testes de fluxo ponta a ponta | |
| F-16 | Analytics de funil na landing | Medir onde a compra se perde |
| F-17 | Metadados de compartilhamento (Open Graph) | A landing vai circular em grupo de WhatsApp |
| F-18 | Confirmar toda a copy provisória: nomes, registros e fotos das mentoras, quantidade de trilhas e aulas, preços e depoimentos | Tudo em `lib/conteudo-da-landing.ts`; **antes de qualquer publicação** |
| F-23 | Faixa de números da landing (trilhas, aulas, documentos, alunos) | Omitida de propósito — entra quando a métrica existir de verdade |

## P3 — ideias

| # | Item | Observação |
|---|---|---|
| F-24 | Remover o toast de teste de comunicação | Ele existe só enquanto a POC é montada; sai quando houver telas consumindo a API |
| F-19 | Copiar resposta do copiloto formatada para e-mail ao cliente | O contador vai fazer isso na mão de qualquer jeito |
| F-20 | Atalho de teclado global para nova consulta | O `⌘K` já aparece no desenho |
| F-21 | Modo de leitura para a transcrição | Ler é mais rápido que assistir, para quem já sabe |
| F-22 | Instalável no celular (PWA) | Consulta em reunião com cliente |

---

## Concluídos

| Data | Item |
|---|---|
| 2026-09-05 | Estudo de três direções visuais e escolha da direção Copiloto |
| 2026-09-05 | Cinco telas desenhadas em `design/copiloto-fiscal.html` |
| 2026-09-05 | App Next.js 16 criado: TypeScript, Tailwind 4, App Router, `src/` |
| 2026-09-05 | Tokens do design system, fontes Archivo e JetBrains Mono |
| 2026-09-05 | Vitest e Testing Library configurados, primeiros testes verdes |
| 2026-09-05 | Cabeçalho de venda e hero da landing |
| 2026-09-05 | **F-03 · Landing completa** — problema, dois produtos, trilhas, quem somos, depoimentos, três ofertas, FAQ e rodapé |
| 2026-09-05 | Copy centralizada e tipada em `lib/conteudo-da-landing.ts` |
| 2026-09-05 | Hook `pre-push` versionado em `.githooks/`, ativado por `core.hooksPath` |
| 2026-09-05 | Skill `praxis-contexto` para o Codex, versionada em `.agents/skills/` |
| 2026-09-05 | `AGENTS.md` promovido a canônico; `CLAUDE.md` e `.github/copilot-instructions.md` viraram ponteiros |
| 2026-09-05 | **F-02** Cliente de API tipado em `lib/api.ts` |
| 2026-09-05 | Toast e teste de comunicação com o backend |
| 2026-09-05 | `docs/deploy.md` com a configuração da Vercel |
| 2026-09-05 | **BFF (D-14)**: navegador fala só com a própria origem; `API_URL` sai do bundle e o backend dispensa CORS |
