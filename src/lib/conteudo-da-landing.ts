/**
 * Conteúdo da página de vendas, centralizado aqui para que os componentes
 * fiquem só com apresentação e para que a copy seja revisada num lugar só.
 *
 * ATENÇÃO — números provisórios. Quantidade de trilhas e aulas, preços e
 * depoimentos ainda não foram confirmados pelas mentoras (backlog F-18).
 * Nada aqui é dado tributário: o exemplo do hero está marcado como ilustrativo
 * na interface. Ver AGENTS.md, regra 10.
 */

export type Dor = {
  pergunta: string;
  desenvolvimento: string;
};

export const DORES: Dor[] = [
  {
    pergunta: "Meu saldo credor de ICMS some em 2033?",
    desenvolvimento:
      "Você sabe que ele vira crédito em parcelas. Sabe o que protocolar, em que ordem e até quando?",
  },
  {
    pergunta: "Fico no Simples ou saio?",
    desenvolvimento:
      "A resposta não está na carga tributária dele. Está em quem compra dele — e isso muda o cálculo inteiro.",
  },
  {
    pergunta: "O split payment quebra meu caixa?",
    desenvolvimento:
      "Quebra um mês. Quem descobre isso pelo extrato paga juros de conta garantida sem precisar.",
  },
];

export type Produto = {
  id: "copiloto" | "mentoria";
  rotulo: string;
  nome: string;
  resumo: string;
  itens: string[];
  independencia: string;
};

export const PRODUTOS: Produto[] = [
  {
    id: "copiloto",
    rotulo: "Produto 01 · uso diário · vendido sozinho",
    nome: "Copiloto Fiscal",
    resumo:
      "O assistente que responde a dúvida prática, com a fonte ao lado de cada afirmação.",
    itens: [
      "Consultas ilimitadas, com o caso concreto: regime, UF, CNAE e valores",
      "Três modos de resposta: Prático, Cálculo e Norma",
      "Toda afirmação com citação verificável — norma ou minuto da aula",
      "Histórico por cliente, para retomar a consulta meses depois",
    ],
    independencia: "Funciona sem a mentoria",
  },
  {
    id: "mentoria",
    rotulo: "Produto 02 · formação · vendida sozinha",
    nome: "Mentoria",
    resumo:
      "Trilhas em vídeo sobre reforma tributária aplicada. Ensina o assunto, não a ferramenta.",
    itens: [
      "Aulas em trilhas, com a trilha inicial montada a partir do seu cadastro",
      "Planilhas, modelos de petição e de parecer prontos para adaptar",
      "Plantão de dúvidas ao vivo, direto com quem ensina",
      "Certificado de conclusão com carga horária",
    ],
    independencia: "Funciona sem o copiloto",
  },
];

export type Trilha = {
  numero: string;
  assunto: string;
  titulo: string;
  descricao: string;
  classeDaCapa: string;
};

export const TRILHAS: Trilha[] = [
  {
    numero: "01",
    assunto: "Fundamentos",
    titulo: "IBS e CBS do zero",
    descricao:
      "O que é crédito financeiro, por que a não cumulatividade virou plena e o que isso faz com a sua planilha.",
    classeDaCapa: "from-navy-3 to-navy",
  },
  {
    numero: "02",
    assunto: "Transição",
    titulo: "Transição até o regime pleno",
    descricao:
      "Ano de teste, fim do PIS/Cofins, rampa do ICMS e do ISS, e o destino do saldo credor.",
    classeDaCapa: "from-azul to-[#154c93]",
  },
  {
    numero: "03",
    assunto: "Caixa",
    titulo: "Split payment e fluxo de caixa",
    descricao:
      "Projeção de giro, venda parcelada, cartão e conciliação. Com planilha de simulação.",
    classeDaCapa: "from-verde to-[#0e5d45]",
  },
  {
    numero: "04",
    assunto: "Simples",
    titulo: "Simples Nacional pós-reforma",
    descricao:
      "A árvore de decisão de ficar ou sair, e o meio-termo que quase ninguém usa.",
    classeDaCapa: "from-[#c68a11] to-[#7a5306]",
  },
  {
    numero: "05",
    assunto: "Nota fiscal",
    titulo: "Leiaute da nota com IBS, CBS e IS",
    descricao:
      "Campo a campo, e o que fazer quando o ERP do cliente ainda não atualizou.",
    classeDaCapa: "from-[#4c5fa8] to-[#232f5e]",
  },
  {
    numero: "06",
    assunto: "Setorial",
    titulo: "Regimes específicos",
    descricao:
      "Bar e restaurante, hotelaria, transporte, saúde e imobiliário — o que cada um ganhou.",
    classeDaCapa: "from-[#1f7e8c] to-[#0d3e46]",
  },
];

export type Mentora = {
  iniciais: string;
  papel: string;
  registro: string;
  descricao: string;
};

export const MENTORAS: Mentora[] = [
  {
    iniciais: "CT",
    papel: "Contadora, especialista em tributário",
    registro: "CRC · nome a definir",
    descricao:
      "Atende carteira própria e já dá mentoria para outros contadores. É de onde vem o material prático: o caso real, a planilha que resolveu e o passo que ninguém conta no curso teórico.",
  },
  {
    iniciais: "AT",
    papel: "Advogada tributarista, especialista em Reforma",
    registro: "OAB · nome a definir",
    descricao:
      "Responde pela fundamentação de tudo que o copiloto afirma e pela leitura normativa das aulas. É quem separa o que a lei já resolveu do que ainda é interpretação.",
  },
];

export type Depoimento = {
  iniciais: string;
  texto: string;
  autor: string;
};

export const DEPOIMENTOS: Depoimento[] = [
  {
    iniciais: "CB",
    texto:
      "Respondi uma dúvida de saldo credor em minutos, com o artigo na tela. Antes eu levava meio dia e ainda ficava inseguro.",
    autor: "Camila B. · escritório contábil · Belo Horizonte",
  },
  {
    iniciais: "JN",
    texto:
      "A trilha do split payment pagou a assinatura do ano em um cliente só. Antecipamos a linha de giro e ele não pagou juros na virada.",
    autor: "Jonas N. · contabilidade para indústria · Joinville",
  },
  {
    iniciais: "PA",
    texto:
      "O que me convenceu foi ver a fonte de cada resposta. Já testei outros e todos inventavam artigo. Este diz quando não sabe.",
    autor: "Patrícia A. · consultoria tributária · Recife",
  },
];

export type Oferta = {
  id: "copiloto" | "mentoria" | "combo";
  rotulo: string;
  nome: string;
  resumo: string;
  ancora?: string;
  parcelado: string;
  aVista: string;
  itens: string[];
  chamada: string;
  destaque: boolean;
};

export const OFERTAS: Oferta[] = [
  {
    id: "copiloto",
    rotulo: "Produto 01",
    nome: "Copiloto",
    resumo: "A ferramenta do dia a dia. Sem aulas.",
    parcelado: "12x R$ 81,40",
    aVista: "ou R$ 970 à vista · 12 meses",
    itens: [
      "Consultas ilimitadas",
      "Citação de fonte em tudo",
      "Três modos de resposta",
      "Histórico por cliente",
    ],
    chamada: "Assinar o copiloto",
    destaque: false,
  },
  {
    id: "mentoria",
    rotulo: "Produto 02",
    nome: "Mentoria",
    resumo: "A formação completa. Não precisa do copiloto.",
    parcelado: "12x R$ 129,00",
    aVista: "ou R$ 1.290 à vista · 12 meses",
    itens: [
      "Todas as trilhas e aulas",
      "Planilhas e modelos em Word",
      "Plantão ao vivo quinzenal",
      "Certificado de conclusão",
    ],
    chamada: "Assinar a mentoria",
    destaque: false,
  },
  {
    id: "combo",
    rotulo: "Os dois juntos",
    nome: "Combo",
    resumo: "Tudo liberado, e as aulas viram fonte do copiloto.",
    ancora: "Separados sairiam R$ 2.260",
    parcelado: "12x R$ 157,40",
    aVista: "ou R$ 1.890 à vista no Pix — economia de R$ 370",
    itens: [
      "Copiloto + Mentoria",
      "Bônus: simulador de carga na transição",
      "Bônus: modelos de petição e parecer",
      "Bônus: checklist de diagnóstico",
    ],
    chamada: "Quero os dois",
    destaque: true,
  },
];

export type Duvida = {
  pergunta: string;
  resposta: string;
};

export const DUVIDAS: Duvida[] = [
  {
    pergunta: "O copiloto inventa resposta?",
    resposta:
      "Ele só responde a partir da base de documentos e das aulas, e mostra o trecho que usou. Quando a base não cobre a pergunta, ele diz que não sabe e encaminha para o plantão.",
  },
  {
    pergunta: "Dá para comprar só a mentoria?",
    resposta:
      "Dá. São produtos separados: você pode levar só a mentoria, só o copiloto, ou os dois. As aulas não ensinam a usar a ferramenta — elas ensinam o assunto.",
  },
  {
    pergunta: "Se eu comprar um agora, dá para adicionar o outro depois?",
    resposta:
      "Dá, direto no painel e com desconto proporcional ao que você já pagou. Histórico de consultas e progresso de aulas continuam onde estavam.",
  },
  {
    pergunta: "Serve para quem já é especialista?",
    resposta:
      "Serve melhor ainda. As trilhas partem do caso concreto, não do conceito. Você pode ir direto para a trilha que resolve o seu problema de hoje.",
  },
  {
    pergunta: "E quando a lei mudar de novo?",
    resposta:
      "A base é atualizada e a data aparece no topo do copiloto. Aula afetada por norma nova é regravada, não corrigida por errata.",
  },
  {
    pergunta: "Posso usar com dados do meu cliente?",
    resposta:
      "Pode. Os dados que você digita não são usados para treinar modelo e ficam restritos à sua conta.",
  },
];
