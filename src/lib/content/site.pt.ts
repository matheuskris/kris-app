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
  email: "mailto:matheuskris@gmail.com",
  emailAddress: "matheuskris@gmail.com",
} as const;

export const siteConfigPt: SiteConfig = {
  brandName: "Matheus Krisciumas",
  brandMark: "Matheus Krisciumas",
  roleTitle: "Engenheiro de software",
  tagline:
    "Engenheiro de software. Trabalho full-stack em sistemas de negócio. Remoto, a partir do Brasil.",
  hero: {
    subtitle:
      "Trabalho em sistemas full-stack para fluxos de negócio reais. Remoto, a partir do Brasil.",
    primaryCta: { label: "Ver o trabalho", href: "#projects" },
    secondaryCta: { label: "Dizer olá", href: "#contact" },
  },
  work: {
    title: "Trabalho",
    subtitle:
      "Faturamento, mapas, movimentação de dinheiro e um produto de saúde. Os resultados ficam em cada caso.",
  },
  impact: {
    index: "// 02. Resultados mensuráveis",
    title: "Impacto de sistema e métricas de produção",
    subtitle:
      "Números de sistemas que já estavam em uso, não de um laboratório de benchmark.",
    principles: [
      "Domínios de falha claros",
      "Decisões ligadas ao negócio",
      "Contratos com tipagem segura",
      "Estabilidade no pico",
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
      title: "Vazão do faturamento médico",
      body: "Único responsável full-stack de um sistema de faturamento que processa cerca de R$ 1,5 milhão por mês em 74 hospitais.",
      meta: "Escopo",
      metaValue: "74 hospitais",
    },
    {
      label: "Escala do domínio",
      value: "25 mil",
      title: "Parâmetros de pagamento modelados",
      body: "Modelo SQL e superfície de produto para 25 mil parâmetros de pagamento e 4 mil procedimentos, com integrações de boleto, e-mail e WhatsApp.",
      meta: "Procedimentos",
      metaValue: "4.000",
    },
  ] satisfies Metric[],
  experience: {
    title: "Experiência",
    subtitle:
      "Saúde, mapas e movimentação de dinheiro. Remoto, a partir do Brasil.",
  },
  about: {
    title: "Sobre",
    quote:
      "Gosto de entender o problema primeiro e depois construir sistemas que continuem simples de raciocinar conforme crescem.",
    paragraphs: [
      "Sou engenheiro de software e trabalho com fluxos de negócio e e-commerce. Me importo com comunicação clara, entrega confiável em equipe e decisões técnicas ligadas a valor real — não só código pelo código.",
      "Fora do trabalho, toco violão, mantenho a rotina de treino e passo tempo com amigos. Esse equilíbrio me deixa mais presente e focado.",
    ],
    signatureRole: "Desenvolvedor full-stack",
    skills: [
      "Node.js / APIs",
      "TypeScript",
      "Produto full-stack",
      "Design de sistemas",
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
        title: "Sistemas de produto",
        tools:
          "Next.js, React Native, TypeScript, Firebase em tempo real, integrações de pagamento e mensagem.",
      },
      {
        icon: "map",
        title: "Trabalho de domínio",
        tools:
          "Faturamento médico, mapas geoespaciais, conversão de UTM para WGS84, movimentação de dinheiro assíncrona.",
      },
    ] satisfies Competency[],
    portraitUrl: "/profile-pic.jpeg",
    portraitAlt: "Matheus Krisciumas",
  },
  contact: {
    title: "Olá.",
    subtitle:
      "O caminho mais rápido é o LinkedIn. Prefere e-mail? Manda uma mensagem abaixo ou escreve direto.",
    avatarUrl: "/profile-pic.jpeg",
    avatarAlt: "Matheus Krisciumas",
    email: links.emailAddress,
    availability: "UTC-3 · Remoto, Brasil",
    languages: "Inglês e português",
  },
  nav: [
    { label: "Trabalho", href: "#projects" },
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
    copyright: "© 2026 Matheus Krisciumas. Remoto, a partir do Brasil.",
    links: [
      { label: "GitHub", href: links.github },
      { label: "LinkedIn", href: links.linkedin },
      { label: "E-mail", href: links.email },
      { label: "Projetos", href: "/projects" },
      { label: "Blog", href: "/blog" },
    ] satisfies FooterLink[],
  },
  chrome: {
    systems: "",
    available: "Disponível",
    getInTouch: "Dizer olá",
    menu: "Menu",
    close: "Fechar",
    projectsIndex: "Todo o trabalho",
    blog: "Notas",
    language: "Idioma",
    competenciesHeading: "Com o que eu trabalho",
    openToConversations: "Aberto a conversas",
    portraitRole: "Full-stack e sistemas de negócio",
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
    impactOutcome: "O que saiu",
    allNotes: "Todas as notas",
  },
  pages: {
    projects: {
      title: "Trabalho",
      subtitle:
        "Faturamento, mapas, movimentação de dinheiro e um produto de saúde — os mesmos casos da home.",
    },
    blog: {
      title: "Notas",
      subtitle: "Escrita ocasional sobre sistemas e as decisões por trás deles.",
      emptyTitle: "Nada publicado ainda",
      emptyBody: "Quando uma nota estiver pronta, ela mora aqui. O trabalho está na home.",
      back: "Voltar ao trabalho",
    },
    notFound: {
      title: "Essa página não está aqui.",
      body: "Pode ter mudado de lugar, ou nunca foi publicada.",
      cta: "Ir para a home",
    },
  },
};
