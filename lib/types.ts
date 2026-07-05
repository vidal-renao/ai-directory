export interface Metric {
  label: string;
  value: string;
}

export type CategorySlug = "models" | "agents" | "mcp" | "skills";

export interface DirectoryItem {
  slug: string;
  name: string;
  creator: string;
  license: "Open Source" | "Propietario" | "Freemium";
  description: string;
  metrics: Metric[];
  useCase: string;
  adoptionStatus: string;
  url?: string;
}
