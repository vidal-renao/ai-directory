export interface CompanyInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
  founded: string;
  headquarters: string;
  ceo: string;
  valuation?: string;
  employees?: string;
  website: string;
  tags: string[];
  recentNews: CompanyNews[];
  upcomingEvents: CompanyEvent[];
  products: CompanyProduct[];
  nextSteps: string[];
}

export interface CompanyNews {
  title: string;
  date: string;
  summary: string;
  source: string;
  url?: string;
}

export interface CompanyEvent {
  name: string;
  date: string;
  endDate?: string;
  description: string;
  type: "release" | "deadline" | "conference" | "update";
}

export interface CompanyProduct {
  name: string;
  description: string;
  status: "available" | "beta" | "coming_soon" | "deprecated";
  launchDate?: string;
}

export const companiesData: CompanyInfo[] = [
  {
    id: "anthropic",
    name: "Anthropic",
    slug: "anthropic",
    description:
      "Anthropic es una empresa de seguridad AI fundada por ex-OpenAI. Creadora de Claude, el asistente AI enfocado en seguridad y alineación.",
    founded: "2021",
    headquarters: "San Francisco, CA",
    ceo: "Dario Amodei",
    valuation: "$60B+",
    employees: "~1,500",
    website: "https://anthropic.com",
    tags: [
      "seguridad",
      "claude",
      "fable",
      "mythos",
      "modelos",
      "enterprise",
      "mcp",
      "ponsible ai",
      "ia",
      "artificial",
      "intelligence",
    ],
    recentNews: [
      {
        title: "Claude Fable 5: modelo más capaz de Anthropic",
        date: "2026-06-09",
        summary:
          "Primer modelo Mythos-class disponible al público. Contexto de 1M tokens, 128K output, $10/1M input. Incluye safety classifiers para cybersecurity.",
        source: "Anthropic",
      },
      {
        title: "Claude Sonnet 5 lanzado",
        date: "2026-06-30",
        summary:
          "Nueva versión de Sonnet con capacidades mejoradas de razonamiento y código.",
        source: "Anthropic",
      },
      {
        title: "Claude Fable 5 re-desplegado globalmente",
        date: "2026-07-01",
        summary:
          "Acceso global restaurado con framework de jailbreak severity propuesto junto a Amazon, Microsoft y Google.",
        source: "Anthropic",
      },
      {
        title: "MCP alcanza 10,000 servidores en producción",
        date: "2026-07-01",
        summary:
          "El Model Context Protocol crece exponencialmente con empresas como Stripe, Notion y Figma adoptándolo.",
        source: "Industria",
      },
    ],
    upcomingEvents: [
      {
        name: "Claude Fable 5 Beta Access",
        date: "2026-07-05",
        endDate: "2026-07-07",
        description:
          "Acceso beta a Claude Fable 5, el modelo más capaz de Anthropic para razonamiento complejo y trabajo agentic de largo plazo.",
        type: "release",
      },
      {
        name: "Anthropic Enterprise Summit",
        date: "2026-08-15",
        description:
          "Evento anual para partners enterprise con presentación de nuevas capacidades de Claude para empresas.",
        type: "conference",
      },
    ],
    products: [
      {
        name: "Claude Fable 5",
        description:
          "Modelo más capaz de Anthropic. 1M tokens contexto, 128K output, safety classifiers para cybersecurity.",
        status: "available",
        launchDate: "2026-06-09",
      },
      {
        name: "Claude Mythos 5",
        description:
          "Misma capacidad que Fable 5 sin safety classifiers. Disponible solo vía Project Glasswing.",
        status: "beta",
      },
      {
        name: "Claude Sonnet 5",
        description:
          "Modelo de razonamiento avanzado con capacidades mejoradas de código.",
        status: "available",
        launchDate: "2026-06-30",
      },
      {
        name: "Claude Sonnet 4.6",
        description:
          "Modelo de razonamiento avanzado con 200K tokens de contexto.",
        status: "available",
      },
      {
        name: "MCP (Model Context Protocol)",
        description:
          "Estándar abierto para conectar agentes IA con herramientas externas.",
        status: "available",
      },
    ],
    nextSteps: [
      "Claude Fable 5: acceso global restaurado con framework de seguridad",
      "Claude Sonnet 5 en producción estable",
      "Expansión de MCP con 100+ integraciones nuevas",
      "Enterprise tier con SLA 99.99%",
      "Agentes autónomos multi-paso con task budgets",
    ],
  },
  {
    id: "openai",
    name: "OpenAI",
    slug: "openai",
    description:
      "OpenAI es la empresa detrás de GPT, DALL-E y ChatGPT. Líder en modelos fundacionales multimodales.",
    founded: "2015",
    headquarters: "San Francisco, CA",
    ceo: "Sam Altman",
    valuation: "$300B+",
    employees: "~3,500",
    website: "https://openai.com",
    tags: [
      "gpt",
      "chatgpt",
      "dall-e",
      "modelos",
      "multimodal",
      "enterprise",
      "ia",
      "artificial",
      "intelligence",
    ],
    recentNews: [
      {
        title: "GPT-5: Razonamiento multimodal nativo",
        date: "2026-07-03",
        summary:
          "Integra razonamiento chain-of-thought, visión en tiempo real y ejecución de código. Latencia reducida 40%.",
        source: "OpenAI",
      },
      {
        title: "OpenAI alcanza $10B ARR",
        date: "2026-06-20",
        summary:
          "Ingresos anuales recurrentes superan los $10B, liderados por ChatGPT Enterprise.",
        source: "Bloomberg",
      },
    ],
    upcomingEvents: [
      {
        name: "GPT-5 GA Release",
        date: "2026-07-10",
        description:
          "Disponibilidad general de GPT-5 para todos los usuarios y APIs.",
        type: "release",
      },
      {
        name: "OpenAI DevDay",
        date: "2026-09-20",
        description:
          "Conferencia anual de desarrolladores con nuevas APIs y herramientas.",
        type: "conference",
      },
    ],
    products: [
      {
        name: "GPT-4o",
        description: "Modelo multimodal de última generación.",
        status: "available",
      },
      {
        name: "GPT-5",
        description:
          "Modelo con razonamiento chain-of-thought nativo y multimodal.",
        status: "beta",
        launchDate: "2026-07-10",
      },
      {
        name: "DALL-E 4",
        description: "Generación de imágenes de alta fidelidad.",
        status: "available",
      },
      {
        name: "ChatGPT Enterprise",
        description: "Versión enterprise con compliance y seguridad avanzada.",
        status: "available",
      },
    ],
    nextSteps: [
      "Lanzamiento general de GPT-5 en julio 2026",
      "Nueva API para agentes autónomos",
      "Expansión de ChatGPT Enterprise a Europa y Asia",
      "Integración con herramientas de productividad de Microsoft",
      "Modelos más pequeños y eficientes para edge computing",
    ],
  },
  {
    id: "google-deepmind",
    name: "Google DeepMind",
    slug: "google-deepmind",
    description:
      "Google DeepMind combina Google AI y DeepMind para crear modelos multimodales avanzados como Gemini.",
    founded: "2023 (fusión)",
    headquarters: "Londres, UK",
    ceo: "Demis Hassabis",
    valuation: "Parte de Alphabet ($2T+)",
    employees: "~3,000",
    website: "https://deepmind.google",
    tags: [
      "gemini",
      "modelos",
      "multimodal",
      "google",
      "deepmind",
      "ia",
      "artificial",
      "intelligence",
    ],
    recentNews: [
      {
        title: "Gemini 2.5 Pro: 1M tokens de contexto",
        date: "2026-06-15",
        summary:
          "Modelo multimodal con integración nativa en ecosistema Google y contexto de 1 millón de tokens.",
        source: "Google",
      },
    ],
    upcomingEvents: [
      {
        name: "Google Cloud Next",
        date: "2026-09-10",
        description:
          "Evento anual de Google Cloud con novedades en IA para empresas.",
        type: "conference",
      },
    ],
    products: [
      {
        name: "Gemini 2.5 Pro",
        description:
          "Modelo multimodal con 1M tokens de contexto y video nativo.",
        status: "available",
      },
      {
        name: "Gemini Nano",
        description: "Modelo optimizado para dispositivos móviles y edge.",
        status: "available",
      },
    ],
    nextSteps: [
      "Gemini 3.0 con capacidades de razonamiento avanzado",
      "Expansión de Gemini Nano a más dispositivos",
      "Nuevas APIs para video y audio en tiempo real",
      "Integración profunda con Google Workspace",
    ],
  },
  {
    id: "meta-ai",
    name: "Meta AI",
    slug: "meta-ai",
    description:
      "Meta AI desarrolla modelos open source como Llama para democratizar la inteligencia artificial.",
    founded: "2013 (FAIR)",
    headquarters: "Menlo Park, CA",
    ceo: "Mark Zuckerberg",
    valuation: "Parte de Meta ($1.5T+)",
    employees: "~2,000 (AI)",
    website: "https://ai.meta.com",
    tags: [
      "llama",
      "open source",
      "modelos",
      "meta",
      "ia",
      "artificial",
      "intelligence",
    ],
    recentNews: [
      {
        title: "Llama 4 Maverick: rivaliza con modelos propietarios",
        date: "2026-06-20",
        summary:
          "Modelo open source de 400B parámetros supera a GPT-4o en coding y razonamiento matemático.",
        source: "Meta",
      },
    ],
    upcomingEvents: [
      {
        name: "LlamaCon 2026",
        date: "2026-09-25",
        description:
          "Conferencia dedicada al ecosistema Llama con workshops y lanzamientos.",
        type: "conference",
      },
    ],
    products: [
      {
        name: "Llama 4 Maverick",
        description:
          "Modelo open source de 400B con contexto de 1M tokens.",
        status: "available",
      },
      {
        name: "Llama 4 Scout",
        description: "Modelo más pequeño optimizado para producción.",
        status: "available",
      },
    ],
    nextSteps: [
      "Llama 5 con arquitectura MoE mejorada",
      "Expansión del ecosistema de fine-tuning",
      "Nuevos modelos multimodales open source",
      "Partnerships con empresas para despliegue on-premise",
    ],
  },
  {
    id: "mistral-ai",
    name: "Mistral AI",
    slug: "mistral-ai",
    description:
      "Mistral AI es una empresa europea de modelos open source con foco en eficiencia y compliance GDPR.",
    founded: "2023",
    headquarters: "Paris, France",
    ceo: "Arthur Mensch",
    valuation: "$7B+",
    employees: "~500",
    website: "https://mistral.ai",
    tags: [
      "mistral",
      "open source",
      "modelos",
      "europa",
      "gdpr",
      "ia",
      "artificial",
      "intelligence",
    ],
    recentNews: [
      {
        title: "Mistral Large 2: modelo europeo de alto rendimiento",
        date: "2026-05-10",
        summary:
          "Modelo de 123B parámetros con enfoque en eficiencia y compliance europeo.",
        source: "Mistral AI",
      },
    ],
    upcomingEvents: [
      {
        name: "Mistral AI Summit",
        date: "2026-10-05",
        description:
          "Evento anual con partners europeos y novedades en modelos.",
        type: "conference",
      },
    ],
    products: [
      {
        name: "Mistral Large 2",
        description:
          "Modelo open source de 123B para empresas europeas.",
        status: "available",
      },
      {
        name: "Mistral Small",
        description: "Modelo eficiente para producción de alto volumen.",
        status: "available",
      },
    ],
    nextSteps: [
      "Modelos más pequeños y eficientes",
      "Expansión en Europa con partners enterprise",
      "Nuevas APIs con soporte para agentes",
      "Fine-tuning enterprise con Soberanía de datos",
    ],
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    slug: "deepseek",
    description:
      "DeepSeek es una empresa china de modelos de razonamiento matemático y de código con arquitectura MoE.",
    founded: "2023",
    headquarters: "Hangzhou, China",
    ceo: "Liang Wenfeng",
    valuation: "$2B+",
    employees: "~300",
    website: "https://deepseek.com",
    tags: [
      "deepseek",
      "open source",
      "modelos",
      "razonamiento",
      "codigo",
      "ia",
      "artificial",
      "intelligence",
    ],
    recentNews: [
      {
        title: "DeepSeek-V3: guerra de precios en IA",
        date: "2026-06-10",
        summary:
          "Con $0.27/1M tokens de entrada, es 10x más barato que GPT-4o. Resultados mixtos en producción.",
        source: "DeepSeek",
      },
    ],
    upcomingEvents: [
      {
        name: "DeepSeek Developer Day",
        date: "2026-08-20",
        description:
          "Evento para desarrolladores con workshops y novedades técnicas.",
        type: "conference",
      },
    ],
    products: [
      {
        name: "DeepSeek-V3",
        description:
          "Modelo de razonamiento MoE con precio agresivo.",
        status: "available",
      },
    ],
    nextSteps: [
      "DeepSeek-V4 con mejoras en calidad",
      "Expansión internacional",
      "Nuevos modelos para casos de uso específicos",
      "Mejora en estabilidad para producción",
    ],
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    slug: "nvidia",
    description:
      "NVIDIA es líder en hardware GPU para IA. Sus modelos Nemotron y frameworks como NeMo son estándar en la industria.",
    founded: "1993",
    headquarters: "Santa Clara, CA",
    ceo: "Jensen Huang",
    valuation: "$3T+",
    employees: "~30,000",
    website: "https://nvidia.com",
    tags: [
      "gpu",
      "hardware",
      "nemotron",
      "nemo",
      "acceleradores",
      "ia",
      "artificial",
      "intelligence",
    ],
    recentNews: [
      {
        title: "NVIDIA lanza Nemotron-Labs-TwoTower",
        date: "2026-07-01",
        summary:
          "Modelo open-weight de difusión con 2.42x throughput vs AR. Retiene 98.7% de calidad AR.",
        source: "NVIDIA",
      },
    ],
    upcomingEvents: [
      {
        name: "GTC 2026",
        date: "2026-09-15",
        description:
          "GPU Technology Conference con novedades en hardware y software para IA.",
        type: "conference",
      },
    ],
    products: [
      {
        name: "Nemotron-Labs-TwoTower",
        description:
          "Modelo de difusión open-weight con 2.42x throughput.",
        status: "available",
      },
      {
        name: "NeMo Framework",
        description:
          "Framework para entrenar y desplegar modelos de IA personalizados.",
        status: "available",
      },
      {
        name: "H100 GPU",
        description:
          "GPU flagship para entrenamiento de modelos de IA a escala.",
        status: "available",
      },
    ],
    nextSteps: [
      "Blackwell Ultra GPU para entrenamiento next-gen",
      "Expansión de modelos Nemotron open-weight",
      "Nuevos frameworks para agentes IA",
      "Partnerships con hyperscalers",
    ],
  },
];
