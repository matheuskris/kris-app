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
    kind: "contract",
    period: "set 2024 — atual",
    startedAt: "2024-09",
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
    images: [
      {
        src: "/projects/dbkz/registro.jpg",
        alt: "Console web da DBKZ para registro de imagem: agenda enviada, prompt de extração e campos de faturamento de hospital e convênio.",
        width: 1024,
        height: 591,
        caption: "Console de registro: o documento vira procedimento faturável, ainda com hospital e convênio para casar.",
      },
    ],
    idea: "Faturamento aqui não é um checkout. É casar dezenas de milhares de regras de pagamento com códigos de procedimento para os hospitais emitirem boleto todo mês — sem um segundo engenheiro no produto.",
    body: [
      {
        heading: "A situação",
        paragraphs: [
          "A operação movimenta cerca de R$ 1,5 milhão por mês em 74 hospitais. O produto precisava dono do caminho inteiro: qual regra vale, qual procedimento está sendo faturado, como o boleto sai e como o hospital é avisado.",
          "Eu era o único engenheiro nessa superfície. Desenho do sistema, nuvem e modelo SQL ficavam no mesmo lugar que os apps que as pessoas de fato usavam.",
        ],
      },
      {
        heading: "Como funciona",
        paragraphs: [
          "Tratar o faturamento como um motor de regras com uma superfície humana, não como um formulário que despeja numa planilha. Vinte e cinco mil parâmetros de pagamento e quatro mil procedimentos têm que virar um documento pagável. Se o casamento erra, o mês não fecha.",
          "O trabalho era deixar esse casamento chato: modelar em SQL, expor numa API NestJS e dar aos operadores um console Next.js e um app React Native no mesmo contrato.",
        ],
      },
      {
        heading: "O que saiu",
        paragraphs: [
          "API, mobile e web saíram juntos. Boleto, e-mail, WhatsApp, uploads e analytics entraram no mesmo fluxo para o procedimento faturado não morrer num canal paralelo.",
        ],
      },
    ],
    linkLabel: "Ler o caso",
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
    kind: "full-time",
    period: "jan 2025 — atual",
    startedAt: "2025-01",
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
    images: [
      {
        src: "/projects/witek/map.jpg",
        alt: "Mapa de imóveis da Witek sobre Brasília, com camadas selecionadas, busca por endereço e controles UTM.",
        width: 1024,
        height: 753,
        caption: "Mapa de imóveis: camadas, busca por endereço e overlay UTM no viewport.",
      },
    ],
    idea: "O mapa já estava em produção. O trabalho era sobreviver ao horário de pico: o gargalo era consulta e coordenada, não uma feature faltando.",
    body: [
      {
        heading: "A situação",
        paragraphs: [
          "Cartórios brasileiros já usavam a plataforma de mapa de imóveis. No pico, ela falhava. A base era PHP e JavaScript sem documentação, então o primeiro trabalho era achar quais pedidos de fato doíam.",
        ],
      },
      {
        heading: "Como funciona",
        paragraphs: [
          "O viewport do mapa é uma bounding box. Se essa caixa é consultada do jeito longo, e se as coordenadas estão em UTM enquanto o cliente espera WGS84, a página não só fica errada — ela estoura o tempo.",
          "A ideia era cortar as idas e voltas no caminho crítico e colocar a conversão no pipeline para o dado geoespacial ficar consistente, em vez de ser remendado no browser.",
        ],
      },
      {
        heading: "O que saiu",
        paragraphs: [
          "Consultas e rotas críticas foram refatoradas. O tempo de carga caiu pela metade. Queda no pico deixou de ser o caso normal. A conversão de UTM para WGS84 agora faz parte do pedido, não um chute local.",
        ],
      },
    ],
    linkLabel: "Ler o caso",
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
    kind: "full-time",
    period: "fev 2023 — jan 2024",
    startedAt: "2023-02",
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
    images: [
      {
        src: "/projects/keiken/marketplace.jpg",
        alt: "Marketplace da Keiken listando uma psicóloga com preço, filtros e calendário de agendamento.",
        width: 1024,
        height: 590,
        caption: "Superfície do marketplace: especialistas, filtros e agendamento.",
      },
      {
        src: "/projects/keiken/payment-flow.jpg",
        alt: "Diagrama de pagamentos dos usuários, pelo app e pela empresa, até o payout dos parceiros.",
        width: 1024,
        height: 576,
        caption: "Como o dinheiro se move entre usuários, empresa e parceiros.",
      },
    ],
    idea: "A liquidação não cabe num request. O dinheiro entre parceiros, clientes e empresas associadas tem que se mover num caminho assíncrono que ainda fecha o mês.",
    body: [
      {
        heading: "A situação",
        paragraphs: [
          "A Keiken é um marketplace de benefícios. O backend já existia. Aprendi Java e Spring Boot no trabalho para estender a API sem quebrar a liquidação entre as partes.",
        ],
      },
      {
        heading: "Como funciona",
        paragraphs: [
          "O evento do parceiro entra, um worker liquida o lote, e o livro é lido com filtros que doeriam como SQL ad hoc. O mês gira cerca de R$ 120 mil. Se esse caminho é síncrono, um parceiro lento segura todo mundo.",
          "A ideia era tratar a movimentação como mensagem mais um fechamento agendado, e colocar JUnit no caminho para uma mudança no QueryDSL não pular uma parte em silêncio.",
        ],
      },
      {
        heading: "O que saiu",
        paragraphs: [
          "Fluxos assíncronos com Spring Messaging, cron jobs para o lote, QueryDSL para as leituras complexas e testes de regressão no caminho da liquidação.",
        ],
      },
    ],
    linkLabel: "Ler o caso",
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
    kind: "full-time",
    period: "jan 2024 — dez 2024",
    startedAt: "2024-01",
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
    images: [
      {
        src: "/projects/refmed/colleagues.jpg",
        alt: "Console web da Refmed listando colegas do consultório por especialidade, com ação Referenciar e contexto em Salvador.",
        width: 1024,
        height: 898,
        caption: "Console do operador: colegas da rede do consultório, por especialidade.",
      },
    ],
    idea: "Ainda não existia nada. O produto tinha que ser o próprio fluxo de encaminhamento: duas superfícies, uma API, pagamentos e um chat que não divergisse entre os clientes.",
    body: [
      {
        heading: "A situação",
        paragraphs: [
          "A Refmed precisava de um produto de encaminhamento em saúde a partir do zero. Mobile para quem está no fluxo, console web para quem opera, API e banco. Pagamento, mensagem, upload e chat não eram extra — eram como o encaminhamento de fato andava.",
        ],
      },
      {
        heading: "Como funciona",
        paragraphs: [
          "Construir as três superfícies contra um contrato. React Native para o encaminhamento em campo, Next.js para quem opera a fila, tRPC e Prisma para o modelo. O chat precisava ficar sincronizado, então o Firebase ficou ao lado do SQL em vez de fingir que SQL é tempo real.",
          "PIX, e-mail, WhatsApp, uploads e analytics entram nesse mesmo caminho para o encaminhamento não sair do produto para terminar.",
        ],
      },
      {
        heading: "O que saiu",
        paragraphs: [
          "A stack saiu como um produto em 2024, usada por dois clientes, com modelo SQL e um canal em tempo real que não brigam entre si.",
        ],
      },
    ],
    linkLabel: "Ler o caso",
  },
  {
    slug: "caixa-flow",
    ref: "SYS.REF: 05 // PETTY CASH",
    kicker: "Caixa Flow",
    title: "Controle de fundo fixo para equipes de campo",
    description:
      "SaaS B2B só por convite que troca planilha e WhatsApp no fundo fixo: gastar, anexar comprovante, revisar, reembolsar.",
    challenge:
      "Uma construtora de médio porte rodava fundos fixos no Excel e em dumps de foto no WhatsApp. Encarregados gastavam do float; o financeiro remontava o mês a partir de prints; o reembolso atrasava porque ninguém sabia quais comprovantes já tinham sido pagos.",
    outcome:
      "Entreguei uma camada operacional fechada e multi-tenant — acesso só por convite, comprovante guardado com a despesa e o loop gastar → revisar → pagar, com guards de papel, RLS no Postgres e exportações em Excel/ZIP.",
    stack: ["Next.js", "Supabase", "TypeScript", "Vercel"],
    featured: true,
    kind: "personal",
    period: "2026 — atual",
    startedAt: "2026-01",
    visual: "ledger",
    visualTitle: "fundo_fixo.loop",
    visualStatus: "SÓ POR CONVITE",
    steps: [
      { title: "Abrir um fundo contra o float", detail: "valor_base" },
      { title: "Lançar gasto com comprovante", detail: "foto ou PDF" },
      { title: "Pedir fechamento; financeiro revisa", detail: "aprovar / recusar" },
      { title: "Registrar pagamento; arquivar o fundo", detail: "Excel + ZIP" },
    ],
    stats: [
      { label: "Acesso", value: "Convite" },
      { label: "Papéis", value: "4" },
      { label: "Tenancy", value: "Isolado" },
    ],
    images: [
      {
        src: "/projects/caixa-flow/mobile.jpg",
        alt: "Tela mobile do Caixa Flow com um fundo fixo ativo, dois lançamentos, um pendente e um conferido.",
        width: 904,
        height: 1024,
        caption: "App de campo: fundo aberto, comprovante na despesa, pendente vs conferido.",
      },
      {
        src: "/projects/caixa-flow/dashboard.jpg",
        alt: "Dashboard financeiro do Caixa Flow com um fundo fixo fechado, tabela de lançamentos e exportação para Excel.",
        width: 1024,
        height: 736,
        caption: "Console financeiro: revisão do fundo, totais e exportação para Excel.",
      },
    ],
    idea: "Fundo fixo quebra quando o comprovante mora no WhatsApp e o float mora no Excel. A ideia é um loop fechado: um fundo ativo, o comprovante colado na despesa, depois revisão e pagamento — só por convite, uma empresa de cada vez.",
    body: [
      {
        heading: "A situação",
        paragraphs: [
          "Uma construtora de médio porte rodava fundos fixos para equipes em vários canteiros. Encarregados gastavam do float. Fotos de nota se acumulavam em grupos de WhatsApp. O financeiro remontava o mês a partir de prints. O reembolso atrasava porque ninguém sabia quais comprovantes já tinham sido pagos.",
          "Precisavam de um sistema fechado: só gente convidada, comprovante guardado com a despesa, e um loop que se pudesse seguir do gasto até o pagamento.",
        ],
      },
      {
        heading: "Como funciona",
        paragraphs: [
          "Caixa Flow é a camada operacional desse loop. O funcionário tem um float (valor_base) e um fundo fixo ativo por vez. Fotografa a nota, preenche tipo, número, fornecedor, categoria e obra opcional, e lança. No fim do período pede fechamento. O financeiro aprova ou recusa cada linha, confirma o total, registra o pagamento. O fundo arquiva; outro pode abrir.",
          "Sócios convidam admins. Admins convidam funcionários. Um super admin coloca empresas. O resto fica de fora. Os dados são isolados por empresa. Não há cadastro público.",
        ],
      },
      {
        heading: "O que cobre",
        paragraphs: [
          "Quatro papéis: admin da plataforma, sócio, admin da empresa, funcionário. Cadastro de obras com restrição opcional por pessoa. Histórico de pagamento. Exportação em Excel e ZIP para o contador. Notificação no app e e-mail no fechamento, na confirmação e no pagamento. Comprovantes num bucket privado, apagados depois da janela de retenção. Login, aceite de convite, reset de senha.",
          "A segurança é em camadas: proxy de rota por papel, guards de layout e RLS no Postgres. Escritas sensíveis passam por RPCs SECURITY DEFINER.",
        ],
      },
      {
        heading: "O que não é",
        paragraphs: [
          "O MVP não é cadastro público nem billing, não é integração bancária ou PIX, não é categoria custom por empresa e não é app nativo. É web responsiva com a câmera no browser.",
        ],
      },
    ],
    linkLabel: "Ler o caso",
  },
  {
    slug: "staff-flow",
    ref: "SYS.REF: 06 // TIMESHEETS",
    kicker: "Staff Flow",
    title: "Folha de ponto e fechamento mensal para equipes de campo",
    description:
      "App web para empresas que espalham gente em obras: horas no canteiro, conferência do engenheiro e fechamento do mês com hora extra e adicional noturno.",
    challenge:
      "Uma construtora em vários estados guardava horas em fotos no WhatsApp e no Excel. As regras de sábado e feriado mudavam por cidade, o noturno era esquecido, e o fim do mês era três pessoas reconciliando a mesma grade.",
    outcome:
      "Entreguei o loop obra → ponto → conferência → fechamento: adm de obra lança o dia, engenheiro confirma as horas, o RH fecha a folha com regras municipais brasileiras, e os sócios veem custo por obra — não um dump de células.",
    stack: ["Next.js", "Cloudflare", "Drizzle", "TypeScript"],
    featured: true,
    kind: "personal",
    period: "2026 — atual",
    startedAt: "2026-02",
    visual: "pipeline",
    visualTitle: "folha_ponto.loop",
    visualStatus: "FECHAMENTO MENSAL",
    steps: [
      { title: "Lançar horas na obra", detail: "entrada / saída" },
      { title: "Engenheiro confirma a folha", detail: "revisão" },
      { title: "Regras aplicam extra e noturno", detail: "feriados IBGE" },
      { title: "O escritório fecha o mês", detail: "trilha da folha" },
    ],
    stats: [
      { label: "Papéis", value: "7" },
      { label: "Regras", value: "Locais" },
      { label: "Fechamento", value: "Mensal" },
    ],
    images: [
      {
        src: "/projects/staff-flow/dashboard.jpg",
        alt: "Painel da empresa no Staff Flow com custo de hora extra por obra, volume de HE e evolução mensal da folha.",
        width: 1024,
        height: 738,
        caption: "Painel da empresa: custo e horas extras por obra, depois o fechamento do mês.",
      },
    ],
    idea: "Hora é regra local, não uma tabela da empresa. Lança o dia na obra, confirma, aplica extra e noturno daquele município, e fecha o mês com um número que dá para defender.",
    body: [
      {
        heading: "A situação",
        paragraphs: [
          "Construtoras e empresas de campo espalham gente em obras. As horas viviam em foto no WhatsApp e no Excel. Sábado e feriado mudavam por cidade. O adicional noturno era esquecido. O fim do mês era três pessoas reconciliando a mesma grade.",
          "Precisavam de um lugar em que quem está no canteiro registra o dia, o engenheiro confirma as horas e o escritório fecha a folha com regra brasileira — feriado municipal, percentual estadual, 50/60/70/100/110, noturno — enquanto os sócios veem custo por obra, não um dump de células.",
        ],
      },
      {
        heading: "Como funciona",
        paragraphs: [
          "Staff Flow é esse loop: obra → ponto → conferência → fechamento. As obras amarram num município (IBGE), então feriado e extra seguem o lugar do trabalho. Super admin gerencia empresas; cada uma tem gente, obras e regras próprias. O acesso é por papel: super admin, sócio, RH, supervisor, adm de obra, engenheiro, funcionário.",
          "O lançamento diário cobre entrada/saída, falta, atestado, tipos de extra, horas noturnas, alocação em obra e histórico de edição. O engenheiro revisa a folha. O supervisor confere antes do fechamento. O mês abre e fecha com breakdown da folha, ajuste de extra por obra e memorial do adicional. Pagamento fica pendente ou pago no período.",
        ],
      },
      {
        heading: "O que cobre",
        paragraphs: [
          "Pessoas com cargo, salário, CPF, cidade/estado, forma de pagamento, ativo ou inativo. Convite por e-mail. Dashboards. Exportação em Excel. E-mail de digest quando a folha ainda está pendente. Motor de regras para extra em dia útil / sábado / domingo-feriado, terceiro sábado opcional, e feriados nacionais, estaduais e municipais.",
        ],
      },
      {
        heading: "O que não é",
        paragraphs: [
          "Não é folha eSocial/CLT completa — sem INSS, IRRF, benefícios, férias ou 13º. É a camada operacional de horas e adicional (hora extra + noturno), e depois o fechamento do mês.",
        ],
      },
    ],
    linkLabel: "Ler o caso",
  },
];
