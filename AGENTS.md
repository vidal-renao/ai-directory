# AI Directory — Centro de Comando del Ecosistema IA

## Visión
Plataforma web SaaS que funciona como Directorio Avanzado y Centro de Comando del ecosistema de Inteligencia Artificial actual. Diseño premium oscuro, ejecutivo, de alta fidelidad.

## Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, RSC) |
| Language | TypeScript strict mode |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Deployment | Vercel |
| Database | Supabase (PostgreSQL + RLS) |
| AI | Claude Sonnet 4.6 (para consultas) |

## Comandos
| Comando | Acción |
|---|---|
| `/uda` | Análisis raíz + arquitectura |
| `/ooda` | Guía técnica paso a paso |
| `L99` | Modo experto senior |
| `/godmode` | Profundidad máxima |

## Estructura de Directorios
```
ai-directory/
├── app/
│   ├── layout.tsx          ← Root layout + metadata + JSON-LD
│   ├── page.tsx            ← Landing page principal
│   ├── globals.css         ← Estilos globales Tailwind
│   └── api/                ← API routes
├── components/
│   ├── ui/                 ← Primitivos (Button, Card, Badge, Input)
│   ├── sections/           ← Secciones de página (Hero, Categories)
│   └── features/           ← Componentes de dominio (ModelCard, AgentCard, MCPCard, SkillCard)
├── lib/
│   └── utils.ts            ← cn() helper, utilidades
├── data/
│   ├── models.ts           ← Datos de Modelos Fundacionales
│   ├── agents.ts           ← Datos de Frameworks de Agentes
│   ├── mcp.ts              ← Datos de Servidores MCP
│   └── skills.ts           ← Datos de Skills/Funciones
├── public/                 ← Assets estáticos
├── styles/                 ← Estilos adicionales
├── .mcp.json               ← Configuración MCP (Composio, Vercel, GitHub, Supabase)
├── vercel.json             ← Configuración de despliegue Vercel
└── package.json
```

## Categorías y Paleta de Colores
| Categoría | Color Acento | Uso |
|---|---|---|
| Modelos Fundacionales | `indigo` | LLMs, Multimodales, VLM |
| Frameworks de Agentes | `emerald` | LangGraph, AutoGen, CrewAI |
| Servidores MCP | `cyan` | Model Context Protocol |
| Skills / Funciones | `amber` | Herramientas ejecutables |

## Datos por Elemento
Cada elemento del directorio debe incluir:
1. **Ficha Técnica**: Nombre, creador, licencia (OSS/Propietario), métricas (latencia, coste/token, contexto máximo)
2. **Casos de Uso Empresariales**: Valor en infraestructura empresarial
3. **Estado de Adopción Real**: Hype vs utilidad práctica en producción

## Requisitos de Diseño
- **Dark mode nativo**: background `#060606`, glassmorphism `rgba(255,255,255,0.04)`
- **Grid**: max-w-6xl, px-6, gap-5/gap-6
- **Sombras multi-capa**: `shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]`
- **Tipografía**: Geist Sans, `tracking-tight` headings, `line-height: 1.7` body
- **Hover states**: todos los elementos interactivos con hover limpio
- **Focus-visible**: `focus-visible:ring-2 focus-visible:ring-indigo-500`
- **Responsive**: `grid-cols-1 lg:grid-cols-N`

## SEO
- Metadatos dinámicos con `generateMetadata()`
- JSON-LD Schema.org (TechArticle, SoftwareApplication, Organization)
- Open Graph images dinámicas

## Reglas de Ejecución
1. Sin relleno — directo a la solución
2. Clean Architecture — separación de capas
3. Tipado estricto — sin `any`
4. Modular — cada categoría en su propio archivo de datos
5. Lighthouse 90+ en todas las métricas
