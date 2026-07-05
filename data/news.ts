export type NewsTag =
  | "Modelos"
  | "Agentes"
  | "MCP"
  | "Industria"
  | "Open Source"
  | "Enterprise";

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: NewsTag[];
  featured?: boolean;
}

export const newsData: NewsArticle[] = [
  {
    slug: "gpt-5-launch",
    title: "OpenAI lanza GPT-5: Razonamiento multimodal nativo",
    excerpt:
      "El nuevo modelo integra razonamiento chain-of-thought, visión en tiempo real y ejecución de código en un solo pipeline. Latencia reducida un 40% respecto a GPT-4o.",
    content: `OpenAI ha anunciado hoy el lanzamiento de GPT-5, su modelo fundacional más avanzado hasta la fecha. La principal novedad es la integración nativa de razonamiento chain-of-thought con capacidades multimodales, eliminando la necesidad de pipelines separados para diferentes modalidades.

## Principales mejoras

- **Razonamiento nativo**: Cadena de pensamiento integrada en el modelo, sin prompts engineering extenso
- **Visión en tiempo real**: Procesamiento de video y transmisión de cámara en vivo
- **Ejecución de código**: Sandbox integrado para Python y JavaScript
- **Latencia**: Reducción del 40% en tiempo de respuesta respecto a GPT-4o

## Impacto en Enterprise

Para las empresas, GPT-5 simplifica significativamente la arquitectura de agentes. Un solo modelo puede ahora manejar análisis de documentos, generación de código, procesamiento visual y razonamiento complejo sin cambiar de modelo.

El coste por token se mantiene competitivo: $3/1M input, $15/1M output, con descuentos significativos para volumen enterprise.`,
    date: "2026-07-03",
    readTime: "4 min",
    tags: ["Modelos", "Industria"],
    featured: true,
  },
  {
    slug: "claude-4-6-reasoning",
    title: "Anthropic actualiza Claude a Sonnet 4.6 con razonamiento profundo",
    excerpt:
      "La nueva versión duplica el rendimiento en tareas de código y añade modo de razonamiento extenso con presupuesto de tokens configurable.",
    content: `Anthropic ha liberado Claude Sonnet 4.6, una actualización sustancial que consolida su posición como el modelo preferido por equipos de ingeniería.

## Novedades clave

- **Razonamiento profundo**: Modo "extended thinking" con presupuesto de tokens configurable por el usuario
- **Doble de rendimiento en código**: Benchmark SWE-bench mejorado del 49% al 72%
- **Seguridad mejorada**: Reducción del 60% en comportamientos no deseados respecto a Sonnet 4
- **Contexto de 200K tokens**: Mantiene el contexto largo con mejor comprensión

## Para empresas

Claude Sonnet 4.6 es ideal para code review automatizado, análisis de compliance y agentes autónomos que requieren razonamiento multi-paso. El modo de razonamiento profundo permite tareas que antes requerían intervención humana.`,
    date: "2026-06-28",
    readTime: "3 min",
    tags: ["Modelos", "Agentes"],
    featured: true,
  },
  {
    slug: "mcp-adoption-2026",
    title: "Model Context Protocol alcanza 10,000 servidores en producción",
    excerpt:
      "El estándar de Anthropic para conectar agentes con herramientas crece exponencialmente. Empresas como Stripe, Notion y Figma ya ofrecen servidores MCP oficiales.",
    content: `El Model Context Protocol (MCP) ha alcanzado un hito significativo: más de 10,000 servidores MCP desplegados en producción a nivel mundial.

## Crecimiento exponencial

- **Enero 2026**: 1,200 servidores registrados
- **Abril 2026**: 5,500 servidores
- **Julio 2026**: 10,000+ servidores

## Empresas adoptando MCP oficialmente

- **Stripe**: Servidor MCP para procesamiento de pagos
- **Notion**: Integración de agentes con bases de conocimiento
- **Figma**: Acceso directo a archivos de diseño
- **Linear**: Gestión de issues y proyectos
- **Vercel**: Deployments y monitoreo de aplicaciones

## Impacto

MCP está convirtiéndose en el USB de los agentes IA: un estándar universal para conectar cualquier agente con cualquier herramienta. Esto reduce drásticamente el tiempo de integración de agentes en flujos de trabajo empresariales.`,
    date: "2026-07-01",
    readTime: "5 min",
    tags: ["MCP", "Industria"],
  },
  {
    slug: "langgraph-enterprise",
    title: "LangGraph lanza plataforma Enterprise con persistencia distribuida",
    excerpt:
      "LangChain libera LangGraph Enterprise con soporte para grafos de estado distribuidos, checkpoints en Redis y monitoreo de workflows en tiempo real.",
    content: `LangChain ha anunciado LangGraph Enterprise, la versión production-ready de su framework de agentes con grafos de estado.

## Nuevas capacidades Enterprise

- **Persistencia distribuida**: Checkpoints en Redis/PostgreSQL para recuperación de estado
- **Monitoreo en tiempo real**: Dashboard de workflows con métricas de latencia y coste
- **Multi-tenant**: Aislamiento de grafos por usuario o equipo
- **SLA garantizado**: 99.9% de uptime con soporte prioritario

## Comparativa con alternativas

LangGraph Enterprise se posiciona como la opción madura para empresas que necesitan agentes complejos con lógica condicional, ciclos y persistencia de estado. CrewAI y AutoGen siguen siendo alternativas viables para casos más simples.`,
    date: "2026-06-25",
    readTime: "4 min",
    tags: ["Agentes", "Enterprise"],
  },
  {
    slug: "llama-4-benchmark",
    title: "Meta publica benchmarks de Llama 4 Maverick: rivaliza con modelos propietarios",
    excerpt:
      "El modelo open source de 400B parámetros supera a GPT-4o en coding y razonamiento matemático, con coste de hosting significativamente menor.",
    content: `Meta ha publicado los benchmarks completos de Llama 4 Maverick, su modelo open source de última generación con 400B parámetros.

## Rendimiento

- **SWE-bench**: 68% (vs 55% de GPT-4o)
- **MATH**: 92% (vs 87% de GPT-4o)
- **HumanEval**: 95% (vs 90% de GPT-4o)
- **Contexto**: 1M tokens (vs 128K de GPT-4o)

## Coste

El coste de hosting self-hosted es aproximadamente $0.50/hora en GPU H100, lo que lo hace competitivo con modelos propietarios para uso intensivo.

## Consideraciones enterprise

Aunque el rendimiento es impresionante, las empresas deben considerar:
- Coste de infraestructura GPU
- Equipo de MLOps para mantenimiento
- Compliance y soberanía de datos

Para empresas europeas con requisitos DSG/nDSG, Llama 4 es una opción atractiva por su naturaleza open source y la posibilidad de despliegue on-premise.`,
    date: "2026-06-20",
    readTime: "5 min",
    tags: ["Modelos", "Open Source"],
  },
  {
    slug: "composio-250-integrations",
    title: "Composio alcanza 250+ integraciones MCP nativas",
    excerpt:
      "La plataforma de herramientas para agentes añade soporte para Salesforce, HubSpot y SAP. Autenticación OAuth gestionada automáticamente.",
    content: `Composio ha anunciado la disponibilidad de más de 250 integraciones MCP nativas, consolidándose como la mayor biblioteca de herramientas para agentes IA.

## Integraciones destacadas

- **CRM**: Salesforce, HubSpot, Pipedrive
- **ERP**: SAP, Oracle NetSuite
- **Productividad**: Google Workspace, Microsoft 365, Notion
- **Desarrollo**: GitHub, GitLab, Jira, Linear
- **Comunicación**: Slack, Discord, Teams

## Autenticación simplificada

Composio gestiona automáticamente la autenticación OAuth para cada integración, eliminando la necesidad de que los desarrolladores implementen flujos de auth personalizados.`,
    date: "2026-06-15",
    readTime: "3 min",
    tags: ["MCP", "Agentes"],
  },
  {
    slug: "deepseek-v3-price-war",
    title: "DeepSeek-V3 desata una guerra de precios en la IA",
    excerpt:
      "Con $0.27/1M tokens de entrada, DeepSeek-V3 es 10x más barato que GPT-4o. La comunidad reporta resultados mixtos en producción.",
    content: `DeepSeek ha lanzado DeepSeek-V3 con un precio agresivo de $0.27/1M tokens de entrada, desatando un debate en la industria sobre la relación calidad-precio en modelos IA.

## Precio vs rendimiento

- **Precio**: $0.27/1M input (vs $2.50 de GPT-4o)
- **Rendimiento**: Variable según tarea
- **Latencia**: ~250ms (competitivo)

## Experiencia en producción

Los reportes de empresas que han probado DeepSeek-V3 en producción son mixtos:

**Positivo**:
- Excelente para tareas matemáticas y de código
- Precio imbatible para volúmenes altos
- Latencia competitiva

**Negativo**:
- Calidad inconsistente en tareas de lenguaje natural
- Menos estable que GPT-4o o Claude para producción crítica
- Soporte limitado comparado con proveedores establecidos

## Recomendación

DeepSeek-V3 es ideal como modelo secundario para tareas específicas (código, matemáticas), pero no se recomienda como modelo único para producción empresarial crítica.`,
    date: "2026-06-10",
    readTime: "4 min",
    tags: ["Modelos", "Industria"],
  },
  {
    slug: "vercel-mcp-server",
    title: "Vercel lanza su servidor MCP oficial para agentes de DevOps",
    excerpt:
      "Gestión de deployments, logs, analytics y dominios directamente desde agentes. Integración nativa con Next.js y Turborepo.",
    content: `Vercel ha lanzado oficialmente su servidor MCP, permitiendo a los agentes IA gestionar directamente los despliegues, monitorear logs y configurar proyectos.

## Herramientas disponibles

- **Deployments**: Listar, crear, promocionar y revertir despliegues
- **Logs**: Acceso a logs en tiempo real y logs históricos
- **Analytics**: Métricas de rendimiento, Core Web Vitals
- **Dominios**: Configurar y gestionar dominios personalizados
- **Environment Variables**: Gestionar variables de entorno de forma segura

## Caso de uso típico

Un agente puede ahora:
1. Detectar un error en producción via monitoreo
2. Analizar los logs para identificar la causa raíz
3. Crear un fix automático
4. Desplegar el cambio a producción
5. Verificar que el error se resolvió

Todo sin intervención humana, usando el servidor MCP de Vercel.`,
    date: "2026-06-05",
    readTime: "3 min",
    tags: ["MCP", "Open Source"],
  },
];
