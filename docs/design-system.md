# Design system

Direção aprovada: **Copiloto** — ambiente escuro para o aplicativo, claro para a venda. A escolha de paleta não é gosto: veio de uma varredura dos maiores sites de contabilidade e gestão contábil do Brasil.

Referência visual navegável: `design/copiloto-fiscal.html` neste repositório.

## 1. Por que azul e navy

Amostra de nove sites do setor:

| Cluster | Onde aparece |
|---|---|
| **Azul / navy** | Contabilizei, Conta Azul, Nibo, CFC |
| Laranja | Contmatic, Questor, Qive |
| Roxo | Agilize |
| Teal / ciano | Omie |

Azul é o maior grupo e é também o código institucional da profissão (CFC). Amarelo como cor de botão aparece em Conta Azul, Nibo e CFC. Fundo escuro tem precedente (Omie, Qive), então o app escuro não destoa do mercado.

**Laranja foi descartado de propósito:** é a cor dos ERPs contábeis tradicionais e aproximaria o produto de "sistema de escritório" em vez de produto de conhecimento.

## 2. Tokens

```
/* Ambiente do aplicativo (escuro) */
--navy:        #0B1A2B   /* fundo */
--navy-2:      #112741   /* painel */
--navy-3:      #173252   /* elemento ativo */
--linha-esc:   #1E3E5E   /* borda no escuro */

/* Marca e ação */
--azul:        #2E7DE0   /* marca, botão de ação dentro do app, links */
--azul-claro:  #5AA3F0   /* estado hover, texto de apoio no escuro */

/* Semântica — separada da marca */
--verde:       #1FA97C   /* valor, progresso, confirmação */
--amarelo:     #F0B429   /* exclusivo do CTA de venda e do "você está aqui" */
--vermelho:    #E0644F   /* valor negativo, erro */

/* Ambiente claro (venda e leitura) */
--branco:      #FFFFFF
--papel:       #F3F7FB
--tinta:       #0B1A2B
--apagado:     #5A7183
--linha-clara: #DCE5EF
```

Regra de uso: **amarelo é só do botão de compra.** Se ele começar a aparecer em toda ação, perde a função e a landing perde conversão.

## 3. Tipografia

| Papel | Fonte | Uso |
|---|---|---|
| Display e corpo | **Archivo** | Títulos, textos, interface. Pesos 400/500/600/700/800 |
| Dados e citação | **JetBrains Mono** | Referência normativa, valores em tabela, timestamps, rótulos técnicos |

- Título com `letter-spacing` negativo (`-.03em`) e `text-wrap: balance`.
- Texto corrido perto de 65 caracteres de largura.
- **Todo número em coluna usa `font-variant-numeric: tabular-nums`.** Valor tributário desalinhado é erro de leitura, não de estética.
- Rótulo em caixa alta leva `letter-spacing` de `.12em` e vive na mono.

## 4. Composição

- **Claro vende, escuro trabalha.** A landing é clara; o app é escuro. Mesma marca, dois ambientes. O card do copiloto aparece escuro dentro da landing clara — é o que mostra o produto sem explicar.
- Densidade de ferramenta profissional no app: trilho de ícones, listas compactas, painéis. Nada de card arredondado gigante com muito ar.
- Borda, preenchimento e sombra são gastos **por papel**, não aplicados em tudo. Nem todo bloco é um card.
- Conteúdo largo (tabela, código, diagrama) rola dentro do próprio contêiner. A página nunca rola de lado.

## 5. Mobile

O contador abre o copiloto no celular durante reunião com cliente. A tela de consulta precisa funcionar bem em tela estreita — é caso de uso real, não adaptação defensiva. A Mentoria pode degradar com mais liberdade.

## 6. Acessibilidade mínima

- Foco de teclado sempre visível.
- Contraste conferido nos dois ambientes.
- `prefers-reduced-motion` respeitado.
- Cor nunca é o único portador de informação: estado leva também rótulo ou ícone.
