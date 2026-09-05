# Estado atual

Atualize ao final de **toda** sessão. É por aqui que a próxima sessão descobre onde o trabalho parou sem ler histórico de conversa.

**Última atualização:** 2026-09-05

## Onde estamos

App Next.js criado e funcionando, com a **landing completa** em `/` e o **teste de comunicação com o backend** por toast. 11 testes verdes. Copy e números são provisórios até as mentoras confirmarem (F-18). Ver [em-andamento.md](em-andamento.md).

## Stack

| Peça | Versão | Observação |
|---|---|---|
| Next.js | 16.3.4 | App Router, Turbopack, `src/` |
| React | 19.2.8 | |
| Tailwind CSS | 4 | Tokens do design system em `@theme` |
| TypeScript | 5 | Modo estrito |
| Vitest + Testing Library | 5 | `npm test` |

## Já existe

- App criado, `npm run build` e `npm test` verdes
- Tokens do design system em `src/app/globals.css`, via `@theme` do Tailwind 4
- Fontes Archivo e JetBrains Mono por `next/font`
- Estrutura de pastas conforme `docs/padroes-frontend.md`
- `src/components/ui/` — `Botao` (três variantes, com teste garantindo que o amarelo só aparece na de compra) e `CabecalhoDeSecao`
- `src/components/venda/` — cabeçalho, hero, barra de confiança, problema, produtos, trilhas, quem somos, depoimentos, ofertas, dúvidas e rodapé
- `src/lib/conteudo-da-landing.ts` — toda a copy, tipada e centralizada
- `src/app/(venda)/page.tsx` servindo `/` — landing completa, estática
- 7 testes verdes; build de produção limpo; sem rolagem lateral em 375px
- `.githooks/pre-push` versionado (ative com `git config core.hooksPath .githooks`)
- `COMECE-AQUI.md` — guia de entrada com instalação, hooks e instalação da skill de contexto
- `.agents/skills/praxis-contexto/` — skill do Codex que carrega o contexto; é ponteiro para os `AGENTS.md`, não contém regra
- `src/lib/api.ts` — cliente da API, com mensagens de erro que dizem o que fazer
- `src/components/ui/Toast.tsx` e `src/components/sistema/TesteDeComunicacao.tsx` — prova de que front e API se enxergam
- `docs/deploy.md` — configuração e variáveis da Vercel
- `.env.example` com `NEXT_PUBLIC_API_URL`
- `docs/revisao-pre-commit.md` — procedimento de revisão, legível por qualquer ferramenta
- `design/direcoes.html` e `design/copiloto-fiscal.html` — estudos e direção aprovada
- Documentação: produto, padrões, design system, backlog, em andamento

## Ainda não existe

- Login, cadastro, copiloto e mentoria
- Área administrativa
- Checkout, mesmo simulado — os botões da oferta ainda não levam a lugar nenhum

## Como rodar

```bash
npm --prefix frontend run dev
```

```bash
npm --prefix frontend test
```

## Travas conhecidas

| Trava | Efeito |
|---|---|
| Backend sem endpoint | Login, copiloto e mentoria só com mock |
| Sem chave de IA | Copiloto só com resposta falsa |
| Entrega de vídeo indefinida (D-08 no backend) | Player fica genérico até decidir |
| Nomes reais das mentoras | Landing usa marcador de lugar; trocar antes de publicar (F-18) |
