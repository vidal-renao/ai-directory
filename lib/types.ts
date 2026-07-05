export interface Metric {
  label: string;
  value: string;
}

export interface DirectoryItem {
  name: string;
  creator: string;
  license: "Open Source" | "Propietario" | "Freemium";
  description: string;
  metrics: Metric[];
  useCase: string;
  adoptionStatus: string;
  url?: string;
}
