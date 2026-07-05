export interface BenchmarkCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface BenchmarkResult {
  model: string;
  creator: string;
  score: number;
  maxScore: number;
  percentaje: number;
  trend: "up" | "down" | "stable";
  change?: string;
}

export interface Benchmark {
  id: string;
  name: string;
  description: string;
  category: string;
  lastUpdated: string;
  source: string;
  results: BenchmarkResult[];
}

export const benchmarkCategories: BenchmarkCategory[] = [
  {
    id: "reasoning",
    name: "Razonamiento",
    description: "Capacidad de razonamiento lógico y resolución de problemas complejos",
    icon: "brain",
  },
  {
    id: "coding",
    name: "Coding",
    description: "Generación, comprensión y depuración de código en múltiples lenguajes",
    icon: "code",
  },
  {
    id: "math",
    name: "Matemáticas",
    description: "Resolución de problemas matemáticos y razonamiento cuantitativo",
    icon: "calculator",
  },
  {
    id: "multimodal",
    name: "Multimodal",
    description: "Comprensión y generación de contenido en texto, imagen y audio",
    icon: "image",
  },
  {
    id: "agents",
    name: "Agentic",
    description: "Capacidad de ejecutar tareas multi-paso con herramientas externas",
    icon: "bot",
  },
  {
    id: "efficiency",
    name: "Eficiencia",
    description: "Relación entre rendimiento, latencia y coste por token",
    icon: "gauge",
  },
];

export const benchmarks: Benchmark[] = [
  {
    id: "swe-bench",
    name: "SWE-bench Verified",
    description:
      "Resolución autónoma de issues reales de GitHub. Mide capacidad de comprensión de código, razonamiento y ejecución.",
    category: "coding",
    lastUpdated: "2026-07-01",
    source: "swebench.com",
    results: [
      { model: "Claude Sonnet 4.6", creator: "Anthropic", score: 72, maxScore: 100, percentaje: 72, trend: "up", change: "+23%" },
      { model: "GPT-4o", creator: "OpenAI", score: 55, maxScore: 100, percentaje: 55, trend: "stable" },
      { model: "Gemini 2.5 Pro", creator: "Google", score: 49, maxScore: 100, percentaje: 49, trend: "up", change: "+8%" },
      { model: "Llama 4 Maverick", creator: "Meta", score: 68, maxScore: 100, percentaje: 68, trend: "up", change: "+15%" },
      { model: "Mistral Large 2", creator: "Mistral AI", score: 42, maxScore: 100, percentaje: 42, trend: "stable" },
      { model: "DeepSeek-V3", creator: "DeepSeek", score: 58, maxScore: 100, percentaje: 58, trend: "up", change: "+12%" },
    ],
  },
  {
    id: "human-eval",
    name: "HumanEval+",
    description:
      "Generación de funciones Python correctas a partir de docstrings. Benchmark estándar para capacidad de código.",
    category: "coding",
    lastUpdated: "2026-06-28",
    source: "evalplus.github.io",
    results: [
      { model: "Claude Sonnet 4.6", creator: "Anthropic", score: 95, maxScore: 100, percentaje: 95, trend: "up", change: "+5%" },
      { model: "GPT-4o", creator: "OpenAI", score: 90, maxScore: 100, percentaje: 90, trend: "stable" },
      { model: "Gemini 2.5 Pro", creator: "Google", score: 87, maxScore: 100, percentaje: 87, trend: "up", change: "+3%" },
      { model: "Llama 4 Maverick", creator: "Meta", score: 93, maxScore: 100, percentaje: 93, trend: "up", change: "+7%" },
      { model: "Mistral Large 2", creator: "Mistral AI", score: 82, maxScore: 100, percentaje: 82, trend: "stable" },
      { model: "DeepSeek-V3", creator: "DeepSeek", score: 88, maxScore: 100, percentaje: 88, trend: "up", change: "+4%" },
    ],
  },
  {
    id: "math-gsm8k",
    name: "MATH (GSM8K)",
    description:
      "Resolución de problemas matemáticos de nivel universitario. Razonamiento multi-paso y precisión.",
    category: "math",
    lastUpdated: "2026-07-02",
    source: "openai.com",
    results: [
      { model: "Claude Sonnet 4.6", creator: "Anthropic", score: 89, maxScore: 100, percentaje: 89, trend: "up", change: "+6%" },
      { model: "GPT-4o", creator: "OpenAI", score: 87, maxScore: 100, percentaje: 87, trend: "stable" },
      { model: "Gemini 2.5 Pro", creator: "Google", score: 91, maxScore: 100, percentaje: 91, trend: "up", change: "+4%" },
      { model: "Llama 4 Maverick", creator: "Meta", score: 92, maxScore: 100, percentaje: 92, trend: "up", change: "+8%" },
      { model: "Mistral Large 2", creator: "Mistral AI", score: 78, maxScore: 100, percentaje: 78, trend: "stable" },
      { model: "DeepSeek-V3", creator: "DeepSeek", score: 94, maxScore: 100, percentaje: 94, trend: "up", change: "+10%" },
    ],
  },
  {
    id: "mmmu",
    name: "MMMU (Multimodal)",
    description:
      "Evaluación multimodal: comprensión de imágenes, gráficos, diagramas y contenido visual complejo.",
    category: "multimodal",
    lastUpdated: "2026-06-25",
    source: "mmmu-benchmark.github.io",
    results: [
      { model: "Claude Sonnet 4.6", creator: "Anthropic", score: 71, maxScore: 100, percentaje: 71, trend: "up", change: "+9%" },
      { model: "GPT-4o", creator: "OpenAI", score: 78, maxScore: 100, percentaje: 78, trend: "stable" },
      { model: "Gemini 2.5 Pro", creator: "Google", score: 82, maxScore: 100, percentaje: 82, trend: "up", change: "+5%" },
      { model: "Llama 4 Maverick", creator: "Meta", score: 65, maxScore: 100, percentaje: 65, trend: "stable" },
      { model: "Mistral Large 2", creator: "Mistral AI", score: 58, maxScore: 100, percentaje: 58, trend: "stable" },
      { model: "DeepSeek-V3", creator: "DeepSeek", score: 62, maxScore: 100, percentaje: 62, trend: "up", change: "+3%" },
    ],
  },
  {
    id: "tau-bench",
    name: "TAU-bench (Agentic)",
    description:
      "Evaluación de agentes en tareas realistas: navegación web, uso de herramientas y ejecución multi-paso.",
    category: "agents",
    lastUpdated: "2026-06-30",
    source: "tau-bench.com",
    results: [
      { model: "Claude Sonnet 4.6", creator: "Anthropic", score: 68, maxScore: 100, percentaje: 68, trend: "up", change: "+12%" },
      { model: "GPT-4o", creator: "OpenAI", score: 52, maxScore: 100, percentaje: 52, trend: "stable" },
      { model: "Gemini 2.5 Pro", creator: "Google", score: 48, maxScore: 100, percentaje: 48, trend: "up", change: "+6%" },
      { model: "Llama 4 Maverick", creator: "Meta", score: 45, maxScore: 100, percentaje: 45, trend: "stable" },
      { model: "Mistral Large 2", creator: "Mistral AI", score: 38, maxScore: 100, percentaje: 38, trend: "stable" },
      { model: "DeepSeek-V3", creator: "DeepSeek", score: 41, maxScore: 100, percentaje: 41, trend: "up", change: "+5%" },
    ],
  },
  {
    id: "gpqa",
    name: "GPQA Diamond (Razonamiento)",
    description:
      "Preguntas de posgrado en ciencia, ingeniería y medicina. Razonamiento profundo y conocimiento especializado.",
    category: "reasoning",
    lastUpdated: "2026-07-03",
    source: "github.com/idavidrein/gpqa",
    results: [
      { model: "Claude Sonnet 4.6", creator: "Anthropic", score: 65, maxScore: 100, percentaje: 65, trend: "up", change: "+11%" },
      { model: "GPT-4o", creator: "OpenAI", score: 53, maxScore: 100, percentaje: 53, trend: "stable" },
      { model: "Gemini 2.5 Pro", creator: "Google", score: 56, maxScore: 100, percentaje: 56, trend: "up", change: "+7%" },
      { model: "Llama 4 Maverick", creator: "Meta", score: 48, maxScore: 100, percentaje: 48, trend: "stable" },
      { model: "Mistral Large 2", creator: "Mistral AI", score: 41, maxScore: 100, percentaje: 41, trend: "stable" },
      { model: "DeepSeek-V3", creator: "DeepSeek", score: 50, maxScore: 100, percentaje: 50, trend: "up", change: "+4%" },
    ],
  },
  {
    id: "cost-efficiency",
    name: "Coste Eficiencia",
    description:
      "Ratio de rendimiento vs coste por millón de tokens. Indicador clave para adopción empresarial.",
    category: "efficiency",
    lastUpdated: "2026-07-04",
    source: "Análisis interno",
    results: [
      { model: "Claude Sonnet 4.6", creator: "Anthropic", score: 82, maxScore: 100, percentaje: 82, trend: "up", change: "+5%" },
      { model: "GPT-4o", creator: "OpenAI", score: 68, maxScore: 100, percentaje: 68, trend: "stable" },
      { model: "Gemini 2.5 Pro", creator: "Google", score: 85, maxScore: 100, percentaje: 85, trend: "up", change: "+8%" },
      { model: "Llama 4 Maverick", creator: "Meta", score: 75, maxScore: 100, percentaje: 75, trend: "stable" },
      { model: "Mistral Large 2", creator: "Mistral AI", score: 78, maxScore: 100, percentaje: 78, trend: "up", change: "+3%" },
      { model: "DeepSeek-V3", creator: "DeepSeek", score: 95, maxScore: 100, percentaje: 95, trend: "up", change: "+12%" },
    ],
  },
];

export const modelColors: Record<string, string> = {
  "Claude Sonnet 4.6": "#818cf8",
  "GPT-4o": "#34d399",
  "Gemini 2.5 Pro": "#22d3ee",
  "Llama 4 Maverick": "#fbbf24",
  "Mistral Large 2": "#f472b6",
  "DeepSeek-V3": "#a78bfa",
};
