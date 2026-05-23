"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { usePortfolioLanguage } from "@/components/language-provider";
import { projectLabels, homepageSections } from "@/data/site-content";

export default function ProjetosPage() {
  const { language } = usePortfolioLanguage();

  const featuredProjects = projects.filter((project) => project.featured);
  const productionProjects = projects.filter(
      (project) => project.stage === "production"
  );
  const inProgressProjects = projects.filter(
      (project) => project.stage === "in_progress"
  );

  return (
      <div className="min-h-screen px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          <section className="space-y-4 rounded-[2rem] border border-border/70 bg-card/55 p-8">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary">
              {projectLabels.caseStudiesTitle[language]}
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {projectLabels.caseStudiesTitle[language]}
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              {projectLabels.caseStudiesDescription[language]}
            </p>
          </section>

          <section className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                {homepageSections.featuredTitle[language]}
              </h2>
              <p className="text-muted-foreground">
                {homepageSections.featuredDescription[language]}
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>

          {productionProjects.length > 0 && (
              <section className="space-y-8">
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  Em Produção
                </h2>
                <div className="grid gap-8 lg:grid-cols-2">
                  {productionProjects.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </section>
          )}

          <section className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                {homepageSections.buildingTitle[language]}
              </h2>
              <p className="text-muted-foreground">
                {homepageSections.buildingDescription[language]}
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {inProgressProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </div>
      </div>
  );
}