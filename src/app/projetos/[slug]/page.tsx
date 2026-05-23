"use client";

import { projects } from "@/data/projects";
import { usePortfolioLanguage } from "@/components/language-provider";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ExternalLink,
  LockKeyhole,
} from "lucide-react";
import { projectLabels, stageLabels } from "@/data/site-content";

export default function ProjetoDetalhes() {
  const { language } = usePortfolioLanguage();
  const params = useParams<{ slug: string }>();
  const project = projects.find((entry) => entry.slug === params.slug);

  if (!project) {
    notFound();
  }

  const content = project.content;

  return (
    <div className="min-h-screen px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <Button variant="ghost" asChild className="rounded-full">
          <Link href="/projetos">
            <ChevronLeft className="mr-2 h-4 w-4" />
            {projectLabels.backToProjects[language]}
          </Link>
        </Button>

        <section className="grid gap-10 rounded-[2rem] border border-border/70 bg-card/60 p-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge className="rounded-full px-3 py-1">
                {stageLabels[language][project.stage]}
              </Badge>
              <Badge variant="outline" className="rounded-full px-3 py-1">
                {project.period[language]}
              </Badge>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary">
                {content.domain[language]}
              </p>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                {content.title[language]}
              </h1>
              <p className="text-xl leading-8 text-muted-foreground">
                {content.summary[language]}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-border/60 bg-background/60 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {projectLabels.role[language]}
                </p>
                <p className="mt-3 font-semibold">{content.role[language]}</p>
              </div>
              <div className="rounded-3xl border border-border/60 bg-background/60 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {projectLabels.stage[language]}
                </p>
                <p className="mt-3 font-semibold">{content.status[language]}</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {project.images?.[0] ? (
              <div className="overflow-hidden rounded-[1.75rem] border border-border/70 shadow-xl">
                <Image
                  src={project.images[0]}
                  alt={content.title[language]}
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="flex min-h-72 items-end rounded-[1.75rem] border border-border/70 bg-[radial-gradient(circle_at_top_left,_rgba(12,166,120,0.28),_transparent_40%),linear-gradient(135deg,_rgba(12,18,27,0.92),_rgba(245,158,11,0.14))] p-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/70">
                    {content.domain[language]}
                  </p>
                  <p className="mt-3 text-3xl font-black text-white">
                    {content.title[language]}
                  </p>
                </div>
              </div>
            )}

            <div className="rounded-[1.75rem] border border-border/70 bg-background/55 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {language === "pt" ? "Stack principal" : "Primary stack"}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-border/70 bg-card/50 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {language === "pt" ? "Problema" : "Problem"}
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              {content.problem[language]}
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-border/70 bg-card/50 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {language === "pt" ? "Solucao" : "Solution"}
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              {content.solution[language]}
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-border/70 bg-card/50 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {language === "pt" ? "Impacto" : "Impact"}
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              {content.impact[language]}
            </p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 rounded-[1.75rem] border border-border/70 bg-card/55 p-8">
            <div>
              <h2 className="text-2xl font-black tracking-tight">
                {projectLabels.architecture[language]}
              </h2>
              <div className="mt-5 space-y-3">
                {content.architecture[language].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-border/60 bg-background/60 p-4 text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black tracking-tight">
                {projectLabels.highlights[language]}
              </h2>
              <div className="mt-5 space-y-3">
                {content.highlights[language].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-border/60 bg-primary/6 p-4 text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 rounded-[1.75rem] border border-border/70 bg-card/55 p-8">
            <div>
              <h2 className="text-2xl font-black tracking-tight">
                {projectLabels.outcomes[language]}
              </h2>
              <div className="mt-5 space-y-3">
                {content.outcomes[language].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-border/60 bg-background/60 p-4 text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black tracking-tight">
                {projectLabels.links[language]}
              </h2>

              {project.links.demo && (
                <Button className="w-full rounded-full" asChild>
                  <Link href={project.links.demo} target="_blank">
                    {projectLabels.demo[language]}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}

              {project.links.repoPublic ? (
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <Link href={project.links.repoPublic} target="_blank">
                    {projectLabels.publicRepo[language]}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-border/70 bg-background/60 p-5">
                  <div className="flex items-center gap-2 font-semibold">
                    <LockKeyhole className="h-4 w-4" />
                    {projectLabels.privateCodebase[language]}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {content.privateNote?.[language] ??
                      projectLabels.privateDescription[language]}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {project.images && project.images.length > 1 && (
          <section className="grid gap-6 md:grid-cols-2">
            {project.images.slice(1).map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-[1.75rem] border border-border/70"
              >
                <Image
                  src={image}
                  alt={`${content.title[language]} screenshot`}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
