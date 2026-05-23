export type Language = "pt" | "en";

export type LocalizedText = Record<Language, string>;

export type ProjectStage = "featured" | "production" | "in_progress";

export type RepoAccess = "public" | "private" | "mixed";

export interface ProjectLinks {
  demo?: string;
  caseStudy?: string;
  repoPublic?: string;
}

export interface ProjectContent {
  title: LocalizedText;
  summary: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  impact: LocalizedText;
  status: LocalizedText;
  domain: LocalizedText;
  role: LocalizedText;
  architecture: Record<Language, string[]>;
  highlights: Record<Language, string[]>;
  outcomes: Record<Language, string[]>;
  privateNote?: LocalizedText;
}

export interface Project {
  slug: string;
  stage: ProjectStage;
  repoAccess: RepoAccess;
  featured: boolean;
  period: LocalizedText;
  techs: string[];
  images?: string[];
  links: ProjectLinks;
  content: ProjectContent;
}
