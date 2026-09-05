# Em andamento — frontend

**Leia este arquivo no começo de toda sessão.** É onde está a feature em curso e em que passo ela parou.

Regra: **uma feature por vez.** Se precisar começar outra antes de terminar esta, mova a atual para "Pausadas" com o motivo, em vez de deixar duas meio-feitas.

Marcação: `[x]` feito · `[>]` em execução agora · `[ ]` ainda não · `[!]` travado

---

## Feature atual

**F-03 · Landing completa** — concluída em 2026-09-05, aguardando revisão de copy

Objetivo: a página de vendas inteira, funcionando, no formato aprovado em
`design/copiloto-fiscal.html` — deixando explícito que são dois produtos
independentes com três ofertas.

Passos:

```
[x] App Next.js criado (TypeScript, Tailwind 4, App Router, src/)
[x] Tokens do design system em globals.css, via @theme do Tailwind 4
[x] Fontes Archivo e JetBrains Mono por next/font
[x] Estrutura de pastas: (venda), (app)/copiloto, (app)/mentoria, components, lib
[x] Vitest + Testing Library configurados, npm test verde
[x] ui/Botao com as três variantes e teste cobrindo a regra do amarelo
[x] CabecalhoDeVenda
[x] Hero com o card escuro do copiloto e exemplo marcado como ilustrativo
[x] Conteúdo centralizado em lib/conteudo-da-landing.ts
[x] Seção "O problema" — três dores em cartões
[x] Seção "Dois produtos" — os dois cartões lado a lado, independentes
[x] Seção "As trilhas" — seis cartões com capa
[x] Seção "Quem somos" — contadora e advogada (nomes são marcador de lugar)
[x] Seção "Prova social" — três depoimentos
[x] Seção "A oferta" — três cartões: Copiloto, Mentoria, Combo
[x] Seção "Dúvidas" — FAQ
[x] Rodapé
[x] Conferido em mobile — sem rolagem lateral em 375px
[x] Testes da seção de ofertas (7 testes verdes no total)
[x] Atualizar estado-atual.md e backlog.md
[!] Copy e números aguardando confirmação das mentoras (F-18)
```

Pendências desta feature, para quando as mentoras confirmarem:

- Nomes, registros e fotos reais das duas profissionais
- Quantidade real de trilhas, aulas e horas
- Preços definitivos e se o certificado vale como EPC (D-06 no backend)
- Depoimentos reais, com autorização de uso

A **faixa de números** (X trilhas, Y aulas, Z documentos, N contadores) do
desenho foi **deliberadamente omitida** por enquanto: são métricas de venda
que ainda não existem, e publicar número inventado contraria a regra 10 do
`AGENTS.md`. Entra quando houver o dado.

Decisões tomadas no caminho:

- **Tailwind 4 com tokens em `@theme`**, em vez de CSS Modules puro. Os tokens
  continuam sendo variáveis CSS (fonte da verdade é `docs/design-system.md`),
  mas viram utilitários (`bg-navy`, `text-amarelo`) — o que acelera muito o
  desenvolvimento assistido por IA sem soltar a paleta.
- **`@types/node` subido para 24** para bater com o Node instalado. O template
  vinha com 20 e o vitest 5 não aceitava.
- **`vite-tsconfig-paths` removido**: o Vite resolve paths do tsconfig
  nativamente com `resolve.tsconfigPaths`. Plugin a menos.
- **Copy como dado, componente como apresentação**: todo o texto da landing
  vive em `lib/conteudo-da-landing.ts`, tipado. Revisar a copy passa a ser
  mexer num arquivo só, e os componentes ficam legíveis.

Travas: nenhuma para desenvolvimento. A landing é estática e não depende do
backend. A publicação, sim, depende da confirmação de copy pelas mentoras.

---

## Próxima feature

**Entidades de domínio no backend** — combinado com o usuário. Ver
`backlog.md` do repositório `backend`, itens B-01 a B-04.

---

## Pausadas

Nenhuma.

---

## Concluídas recentemente

| Data | Feature | Onde ficou registrado |
|---|---|---|
| 2026-09-05 | Escolha da direção visual e as cinco telas desenhadas | [backlog.md](backlog.md) |
| 2026-09-05 | Fundação do app: tokens, fontes, estrutura, testes | [backlog.md](backlog.md) |
