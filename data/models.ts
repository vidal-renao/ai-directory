import type { DirectoryItem } from "@/lib/types";

export const modelsData: DirectoryItem[] = [
  {
    slug: "claude-fable-5",
    name: "Claude Fable 5",
    creator: "Anthropic",
    license: "Propietario",
    description:
      "Modelo más capaz de Anthropic. 1M tokens contexto, 128K output, safety classifiers para cybersecurity. Primer modelo Mythos-class público.",
    metrics: [
      { label: "Contexto", value: "1M" },
      { label: "Coste", value: "$10/1M input" },
      { label: "Output", value: "128K" },
    ],
    useCase:
      "Razonamiento complejo, trabajo agentic de largo plazo, análisis de código a escala enterprise.",
    adoptionStatus:
      "GA desde 9 junio 2026. Disponible en Claude API, AWS, Google Cloud, Microsoft Foundry.",
    url: "https://anthropic.com",
  },
  {
    slug: "claude-sonnet-5",
    name: "Claude Sonnet 5",
    creator: "Anthropic",
    license: "Propietario",
    description:
      "Modelo de razonamiento avanzado con capacidades mejoradas de código y análisis.",
    metrics: [
      { label: "Contexto", value: "200K" },
      { label: "Coste", value: "$3/1M input" },
      { label: "Latencia", value: "~350ms" },
    ],
    useCase:
      "Code review, análisis de compliance, agentes autónomos de alto nivel.",
    adoptionStatus:
      "GA desde 30 junio 2026. Preferido por equipos de ingeniería.",
    url: "https://anthropic.com",
  },
  {
    slug: "gpt-5",
    name: "GPT-5",
    creator: "OpenAI",
    license: "Propietario",
    description:
      "Modelo con razonamiento chain-of-thought nativo y multimodal. Visión en tiempo real y ejecución de código.",
    metrics: [
      { label: "Contexto", value: "256K" },
      { label: "Coste", value: "$15/1M input" },
      { label: "Latencia", value: "~250ms" },
    ],
    useCase:
      "Automatización compleja, agentes autónomos, análisis multimodal en tiempo real.",
    adoptionStatus:
      "Beta desde julio 2026. Próximamente GA.",
    url: "https://openai.com",
  },
  {
    slug: "gpt-4o",
    name: "GPT-4o",
    creator: "OpenAI",
    license: "Propietario",
    description:
      "Modelo multimodal de última generación. Procesa texto, imágenes y audio con latencia reducida.",
    metrics: [
      { label: "Contexto", value: "128K" },
      { label: "Coste", value: "$2.50/1M input" },
      { label: "Latencia", value: "~300ms" },
    ],
    useCase:
      "Automatización de documentos, análisis visual, chatbots empresariales con contexto largo.",
    adoptionStatus:
      "Producción masiva. Estándar de facto para empresas Fortune 500. Estabilidad probada.",
    url: "https://openai.com",
  },
  {
    slug: "claude-sonnet-4",
    name: "Claude Sonnet 4.6",
    creator: "Anthropic",
    license: "Propietario",
    description:
      "Modelo de razonamiento avanzado con foco en seguridad. Excelente para código y análisis complejo.",
    metrics: [
      { label: "Contexto", value: "200K" },
      { label: "Coste", value: "$3/1M input" },
      { label: "Latencia", value: "~400ms" },
    ],
    useCase:
      "Code review, análisis de compliance, agentes autónomos de alto nivel.",
    adoptionStatus: "Crecimiento rápido. Preferido por equipos de ingeniería. En production creciente.",
    url: "https://anthropic.com",
  },
  {
    slug: "gemini-2-5-pro",
    name: "Gemini 2.5 Pro",
    creator: "Google DeepMind",
    license: "Propietario",
    description: "Modelo multimodal con integración nativa en ecosistema Google. Procesa video, audio y texto.",
    metrics: [
      { label: "Contexto", value: "1M" },
      { label: "Coste", value: "$1.25/1M input" },
      { label: "Latencia", value: "~350ms" },
    ],
    useCase: "Procesamiento de video, análisis de documentos masivos, integración con Google Workspace.",
    adoptionStatus: "Adopción enterprise vía Google Cloud. Competitivo en precio pero menos flexible que alternativas.",
    url: "https://deepmind.google",
  },
  {
    slug: "llama-4-maverick",
    name: "Llama 4 Maverick",
    creator: "Meta",
    license: "Open Source",
    description: "Modelo open source de última generación. Parámetro 400B con fine-tuning para código y razonamiento.",
    metrics: [
      { label: "Contexto", value: "1M" },
      { label: "Coste", value: "Self-hosted" },
      { label: "Parámetros", value: "400B" },
    ],
    useCase: "Despliegue on-premise, fine-tuning empresarial, cumplimiento DSG/nDSG sin dependencia externa.",
    adoptionStatus: "Líder open source. Requiere infraestructura significativa. Comunidad activa y estable.",
    url: "https://llama.meta.com",
  },
  {
    slug: "mistral-large-2",
    name: "Mistral Large 2",
    creator: "Mistral AI",
    license: "Open Source",
    description: "Modelo europeo de alto rendimiento. Enfoque en eficiencia y compliance GDPR/DSG.",
    metrics: [
      { label: "Contexto", value: "128K" },
      { label: "Coste", value: "Self-hosted" },
      { label: "Parámetros", value: "123B" },
    ],
    useCase: "Empresas europeas con requisitos de soberanía de datos. Fine-tuning dominio-específico.",
    adoptionStatus: "Fuerte en Europa. Alternativa a modelos US para compliance. En crecimiento estable.",
    url: "https://mistral.ai",
  },
  {
    slug: "deepseek-v3",
    name: "DeepSeek-V3",
    creator: "DeepSeek",
    license: "Open Source",
    description: "Modelo de razonamiento matemático y de código con arquitectura MoE. Excelente rendimiento/costo.",
    metrics: [
      { label: "Contexto", value: "128K" },
      { label: "Coste", value: "$0.27/1M input" },
      { label: "Latencia", value: "~250ms" },
    ],
    useCase: "Análisis financiero, generación de código, tareas de razonamiento lógico intensivo.",
    adoptionStatus: "Hype alto por precio. Calidad inconsistente en producción. Mejora continua rápida.",
    url: "https://deepseek.com",
  },
];
