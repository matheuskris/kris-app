import type {
  EarlyCareerNote,
  ExperienceEntry,
} from "@/lib/content/experience";

export const experiencesPt: ExperienceEntry[] = [
  {
    id: "witek",
    company: "WITEK",
    role: "Desenvolvedor full-stack",
    period: "jan 2025 — atual",
    summary:
      "Responsável por desempenho e estabilidade numa plataforma legada de mapa de imóveis usada por cartórios brasileiros.",
    highlights: [
      "Refatorei consultas e rotas críticas, cortando o tempo de carga do mapa em ~50% e eliminando quedas no horário de pico.",
      "Construí um sistema de conversão de UTM para WGS84 para padronizar os dados geoespaciais e melhorar a precisão do mapa.",
      "Me adaptei rápido a uma base PHP/JS sem documentação, contribuindo com autonomia e alinhando os trade-offs com o time.",
    ],
    tags: ["PHP", "JavaScript", "Desempenho", "Geoespacial"],
  },
  {
    id: "dbkz",
    company: "DBKZ",
    role: "Desenvolvedor full-stack",
    period: "set 2024 — atual",
    summary:
      "Único desenvolvedor full-stack de um sistema de faturamento médico crítico, processando R$ 1,5 milhão/mês em 74 hospitais.",
    highlights: [
      "Assumi o desenho do sistema, a organização na nuvem e a modelagem SQL de um produto com 25 mil parâmetros de pagamento e 4 mil procedimentos.",
      "Construí e mantive a API em NestJS, o app em React Native e a aplicação web em Next.js de ponta a ponta.",
      "Integrei serviços de boleto, e-mail, WhatsApp, upload de arquivos e analytics de uso.",
    ],
    tags: ["NestJS", "Next.js", "React Native", "SQL", "Nuvem"],
  },
  {
    id: "refmed",
    company: "Refmed",
    role: "Desenvolvedor full-stack",
    period: "jan 2024 — dez 2024",
    summary:
      "Construí do zero um produto de encaminhamento de pacientes, cobrindo mobile, web, API e banco.",
    highlights: [
      "Desenhei e entreguei React Native, Next.js e a API tRPC/Prisma do zero, com mentoria sênior.",
      "Modelei o banco SQL e integrei PIX, e-mail, WhatsApp, uploads e analytics baseado em eventos.",
      "Implementei chat em tempo real com Firebase para sincronizar informação entre os clientes.",
    ],
    tags: ["Next.js", "tRPC", "Prisma", "React Native", "Firebase"],
  },
  {
    id: "keiken",
    company: "Keiken",
    role: "Desenvolvedor full-stack",
    period: "fev 2023 — jan 2024",
    summary:
      "Responsável pelo backend dos fluxos de movimentação de dinheiro entre parceiros, clientes e empresas associadas num marketplace de benefícios.",
    highlights: [
      "Construí fluxos assíncronos de movimentação de dinheiro com Spring Messaging e cron jobs processando ~R$ 120 mil/mês.",
      "Aprendi Java e Spring Boot por conta própria para manter e estender a API.",
      "Desenvolvi testes automatizados com JUnit e consultas complexas com QueryDSL.",
    ],
    tags: ["Java", "Spring Boot", "Eventos assíncronos", "QueryDSL"],
  },
];

export const earlyCareerNotePt: EarlyCareerNote = {
  label: "Autônomo",
  period: "ago 2022 — dez 2022",
  description: "Construí aplicações de página única sob demanda.",
};
