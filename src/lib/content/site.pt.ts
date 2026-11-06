import type {
  Competency,
  FooterLink,
  Metric,
  NavLink,
  SiteConfig,
  SocialLink,
} from "@/lib/content/site";

const links = {
  linkedin: "https://www.linkedin.com/in/matheuskris/",
  github: "https://github.com/matheuskris",
  email: "mailto:matheus.kris@gmail.com",
  emailAddress: "matheus.kris@gmail.com",
} as const;

export const siteConfigPt: SiteConfig = {
  brandName: "Matheus Krisciumas",
  brandMark: "Matheus Krisciumas",
  roleTitle: "Engenheiro de software",
  tagline:
    "Engenheiro de software. Construo sistemas full-stack para o dia a dia da operação. Remoto, no Brasil.",
  hero: {
    subtitle:
      "Construo sistemas full-stack para fluxos reais de operação. Trabalho remoto, no Brasil.",
    primaryCta: { label: "Ver todos os projetos", href: "/projects" },
    secondaryCta: { label: "Falar comigo", href: "#contact" },
  },
  work: {
    title: "Projetos",
    subtitle:
      "Faturamento, mapas, pagamentos, saúde, fundo fixo e ponto. Cada caso conta o que mudou.",
  },
  impact: {
    index: "// 02. Resultados mensuráveis",
    title: "Impacto em produção, com números",
    subtitle:
      "Números de sistemas que as pessoas já usavam — não de um teste de laboratório.",
    principles: [
      "Falhas isoladas e fáceis de achar",
      "Técnica a serviço do negócio",
      "Contratos tipados",
      "Estável no horário de pico",
    ],
  },
  metrics: [
    {
      label: "Redução de latência",
      value: "~50%",
      title: "Tempo de carga do mapa de imóveis",
      body: "Refatorei consultas e rotas críticas numa plataforma legada de mapa de imóveis, cortando o tempo de carga pela metade e eliminando quedas no horário de pico.",
      meta: "Sistema",
      metaValue: "Mapas WITEK",
    },
    {
      label: "Volume mensal",
      value: "R$ 1,5 mi+",
      title: "Faturamento médico processado",
      body: "Único desenvolvedor full-stack de um sistema de faturamento que processa cerca de R$ 1,5 milhão por mês em 74 hospitais.",
      meta: "Escopo",
      metaValue: "74 hospitais",
    },
    {
      label: "Escala do produto",
      value: "25 mil",
      title: "Parâmetros de pagamento modelados",
      body: "Modelo SQL e telas do produto para 25 mil parâmetros de pagamento e 4 mil procedimentos, com boleto, e-mail e WhatsApp.",
      meta: "Procedimentos",
      metaValue: "4.000",
    },
  ] satisfies Metric[],
  experience: {
    title: "Experiência",
    subtitle: "Saúde, mapas e pagamentos. Remoto, no Brasil.",
  },
  about: {
    title: "Sobre",
    quote:
      "Prefiro entender o problema primeiro e só então construir sistemas que continuem fáceis de acompanhar conforme crescem.",
    paragraphs: [
      "Sou engenheiro de software e trabalho com fluxos de operação e e-commerce. Me importo com comunicação clara, entrega confiável em equipe e decisão técnica ligada a valor de verdade — não código pelo código.",
      "Fora do trabalho, toco violão, mantenho a rotina de treino e passo tempo com amigos. Esse equilíbrio me ajuda a manter o foco.",
    ],
    signatureRole: "Desenvolvedor full-stack",
    skills: [
      "Node.js / APIs",
      "TypeScript",
      "Produto full-stack",
      "Arquitetura de sistemas",
      "Fluxos de e-commerce",
    ],
    competencies: [
      {
        icon: "dns",
        title: "APIs e backend",
        tools: "NestJS, Node.js, tRPC, Java, Spring Boot, PHP, SQL, Prisma.",
      },
      {
        icon: "account_tree",
        title: "Produto de ponta a ponta",
        tools:
          "Next.js, React Native, TypeScript, Firebase em tempo real, pagamentos e mensagens.",
      },
      {
        icon: "map",
        title: "Domínios em que atuei",
        tools:
          "Faturamento médico, mapas geoespaciais, conversão UTM para WGS84, pagamentos assíncronos.",
      },
    ] satisfies Competency[],
    portraitUrl: "/profile-pic.jpeg",
    portraitAlt: "Matheus Krisciumas",
  },
  contact: {
    title: "Olá.",
    subtitle:
      "O jeito mais rápido de me achar é o LinkedIn. Se preferir e-mail, manda uma mensagem abaixo ou escreve direto.",
    avatarUrl: "/profile-pic.jpeg",
    avatarAlt: "Matheus Krisciumas",
    email: links.emailAddress,
    availability: "UTC-3 · Remoto, Brasil",
    languages: "Inglês e português",
  },
  nav: [
    { label: "Projetos", href: "#projects" },
    { label: "Experiência", href: "#experience" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ] satisfies NavLink[],
  social: [
    { icon: "terminal", href: links.github, label: "GitHub" },
    { icon: "share", href: links.linkedin, label: "LinkedIn" },
    { icon: "mail", href: links.email, label: "E-mail" },
  ] satisfies SocialLink[],
  footer: {
    precision: "Matheus Krisciumas",
    stack: "TypeScript · NestJS · Next.js · React Native · Java · SQL",
    availability: "UTC-3 · Remoto",
    copyright: "© 2026 Matheus Krisciumas. Remoto, no Brasil.",
    links: [
      { label: "GitHub", href: links.github },
      { label: "LinkedIn", href: links.linkedin },
      { label: "E-mail", href: links.email },
      { label: "Todos os projetos", href: "/projects" },
      { label: "Textos", href: "/blog" },
    ] satisfies FooterLink[],
  },
  chrome: {
    systems: "",
    available: "Disponível",
    getInTouch: "Falar comigo",
    menu: "Menu",
    close: "Fechar",
    projectsIndex: "Todos os projetos",
    seeAllProjects: "Ver todos os projetos",
    blog: "Textos",
    language: "Idioma",
    competenciesHeading: "O que uso no dia a dia",
    openToConversations: "Disponível para conversar",
    portraitRole: "Full-stack em sistemas de operação",
    remote: "Remoto",
    primaryCommunication: "Contato principal",
    copyAddress: "Copiar e-mail",
    copied: "Copiado",
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "E-mail",
    message: "Mensagem",
    messagePlaceholder: "Sobre o que você quer conversar?",
    sending: "Enviando...",
    sendMessage: "Enviar mensagem",
    engineeringChallenge: "O problema",
    impactOutcome: "O que entreguei",
    theIdea: "A ideia",
    backToProjects: "Todos os projetos",
    allNotes: "Todos os textos",
  },
  pages: {
    projects: {
      title: "Projetos",
      subtitle:
        "Emprego, contratos e iniciativas pessoais. Filtre por tipo ou stack.",
      kindLabel: "Tipo de projeto",
      tagsLabel: "Stack",
      kinds: {
        all: "Todos",
        "full-time": "Emprego",
        contract: "Contrato",
        personal: "Pessoal",
      },
      shown: "{count} projetos",
      empty: "Nenhum projeto com esse filtro. Tire um filtro para ver mais.",
    },
    blog: {
      title: "Textos",
      subtitle: "Escrita de vez em quando sobre sistemas e as decisões por trás deles.",
      emptyTitle: "Nada publicado ainda",
      emptyBody:
        "Quando houver um texto, ele aparece aqui. Os projetos estão na página inicial.",
      back: "Voltar aos projetos",
    },
    notFound: {
      title: "Essa página não está aqui.",
      body: "Pode ter mudado de lugar, ou nunca foi publicada.",
      cta: "Ir para o início",
    },
  },
};
