import type { Project } from "@/lib/content/projects";

export const projectsPt: Project[] = [
  {
    slug: "dbkz-billing",
    ref: "SYS.REF: 01 // BILLING",
    kicker: "DBKZ",
    title: "Faturamento médico em 74 hospitais",
    description:
      "Produto de faturamento de ponta a ponta para uma operação médica que movimenta cerca de R$ 1,5 milhão por mês.",
    challenge:
      "Assumir o desenho do sistema, a organização na nuvem e a modelagem SQL de 25 mil parâmetros de pagamento e 4 mil procedimentos — sem um segundo engenheiro no produto.",
    outcome:
      "Entreguei a API em NestJS, o app em React Native e o web em Next.js, e integrei boleto, e-mail, WhatsApp, uploads e analytics.",
    stack: ["NestJS", "Next.js", "React Native", "SQL"],
    featured: true,
    visual: "ledger",
    visualTitle: "billing_flow.trace",
    visualStatus: "LIVE // DBKZ",
    steps: [
      { title: "Resolver parâmetros de pagamento", detail: "25 mil regras" },
      { title: "Casar códigos de procedimento", detail: "4 mil procedimentos" },
      { title: "Emitir boleto e avisar", detail: "e-mail + WhatsApp" },
    ],
    stats: [
      { label: "Hospitais", value: "74" },
      { label: "Mensal", value: "R$ 1,5 mi" },
      { label: "Superfícies", value: "3" },
    ],
    linkLabel: "Abrir o caso no índice de projetos",
  },
  {
    slug: "witek-maps",
    ref: "SYS.REF: 02 // GEOSPATIAL",
    kicker: "WITEK",
    title: "Carga do mapa de imóveis, pela metade",
    description:
      "Trabalho de estabilidade numa plataforma legada de mapa de imóveis usada por cartórios brasileiros.",
    challenge:
      "Uma base PHP e JavaScript sem documentação falhava no horário de pico. Consultas do mapa e o tratamento de coordenadas eram o gargalo.",
    outcome:
      "Refatorei consultas e rotas críticas, cortei o tempo de carga em cerca de 50% e acrescentei a conversão de UTM para WGS84 para os dados geoespaciais ficarem consistentes.",
    stack: ["PHP", "JavaScript", "Geoespacial", "Desempenho"],
    featured: true,
    visual: "geo",
    visualTitle: "map_request.pipeline",
    visualStatus: "~50% NO CARREGAMENTO",
    steps: [
      { title: "Viewport do mapa no cliente", detail: "pedido de bbox" },
      { title: "Conversão UTM → WGS84", detail: "coords normalizadas" },
      { title: "Consultas críticas refatoradas", detail: "menos idas e voltas" },
      { title: "Render estável no pico", detail: "quedas removidas" },
    ],
    stats: [
      { label: "Tempo de carga", value: "~50%" },
      { label: "Coords", value: "UTM→WGS84" },
      { label: "Pico", value: "Estável" },
    ],
    linkLabel: "Abrir o caso no índice de projetos",
  },
  {
    slug: "keiken-money",
    ref: "SYS.REF: 03 // MONEY MOVEMENT",
    kicker: "Keiken",
    title: "Movimentação de dinheiro assíncrona num marketplace de benefícios",
    description:
      "Responsabilidade de backend nos fluxos entre parceiros, clientes e empresas associadas.",
    challenge:
      "O dinheiro precisava se mover com confiabilidade entre as partes. Aprendi Java e Spring Boot no trabalho para estender uma API existente sem quebrar a liquidação.",
    outcome:
      "Construí fluxos assíncronos com Spring Messaging e cron jobs processando cerca de R$ 120 mil por mês, além de cobertura com JUnit e consultas em QueryDSL.",
    stack: ["Java", "Spring Boot", "Eventos assíncronos", "QueryDSL"],
    featured: true,
    visual: "pipeline",
    visualTitle: "settlement.workers",
    visualStatus: "~R$ 120 MIL / MÊS",
    steps: [
      { title: "Evento do parceiro ingerido", detail: "Spring Messaging" },
      { title: "Cron liquida o lote", detail: "agendado" },
      { title: "QueryDSL lê o livro", detail: "filtros complexos" },
      { title: "JUnit protege o caminho", detail: "rede de regressão" },
    ],
    stats: [
      { label: "Mensal", value: "R$ 120 mil" },
      { label: "Estilo", value: "Assíncrono" },
      { label: "Testes", value: "JUnit" },
    ],
    linkLabel: "Abrir o caso no índice de projetos",
  },
  {
    slug: "refmed-referral",
    ref: "SYS.REF: 04 // FROM ZERO",
    kicker: "Refmed",
    title: "Produto de encaminhamento de pacientes, feito do zero",
    description:
      "Mobile, web, API e banco para um fluxo de encaminhamento em saúde.",
    challenge:
      "Ainda não existia nada. O produto precisava de pagamentos, mensagens, uploads e um chat que ficasse sincronizado entre os clientes.",
    outcome:
      "Entreguei React Native, Next.js e uma API tRPC/Prisma, e depois PIX, e-mail, WhatsApp, uploads, analytics e chat em tempo real com Firebase.",
    stack: ["Next.js", "tRPC", "Prisma", "React Native", "Firebase"],
    featured: true,
    visual: "surfaces",
    visualTitle: "product.surfaces",
    visualStatus: "ENTREGUE 2024",
    steps: [
      { title: "Cliente React Native", detail: "encaminhamentos" },
      { title: "Console Next.js", detail: "operadores" },
      { title: "API tRPC + Prisma", detail: "modelo SQL" },
      { title: "Chat Firebase", detail: "sync em tempo real" },
    ],
    stats: [
      { label: "Clientes", value: "2" },
      { label: "Pagamentos", value: "PIX" },
      { label: "Chat", value: "Firebase" },
    ],
    linkLabel: "Abrir o caso no índice de projetos",
  },
];
