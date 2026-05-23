"use client";

import { Project } from "@/types/projects";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePortfolioLanguage } from "@/components/language-provider";
import { projectLabels, stageLabels } from "@/data/site-content";
import { ArrowUpRight, LockKeyhole, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language } = usePortfolioLanguage();
  const content = project.content;
  const isInProgress = project.stage === "in_progress";

  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden border-border/70 bg-card/65 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
        isInProgress && "border-dashed bg-card/40",
      )}
    >
      {project.images?.[0] ? (
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.images[0]}
            alt={content.title[language]}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      ) : (
        <div className="relative h-52 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(12,166,120,0.28),_transparent_40%),linear-gradient(135deg,_rgba(12,18,27,0.92),_rgba(29,78,216,0.22))]">
          <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              {content.domain[language]}
            </p>
            <p className="mt-2 text-2xl font-black text-white">
              {content.title[language]}
            </p>
          </div>
        </div>
      )}

      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="rounded-full px-3 py-1">
            {stageLabels[language][project.stage]}
          </Badge>
          {project.repoAccess !== "public" && (
            <Badge variant="outline" className="rounded-full px-3 py-1">
              <LockKeyhole className="mr-1 h-3.5 w-3.5" />
              {projectLabels.privateCodebase[language]}
            </Badge>
          )}
        </div>
        <div className="space-y-2">
          <CardTitle className="text-2xl font-black tracking-tight">
            {content.title[language]}
          </CardTitle>
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            {project.period[language]}
          </p>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-5">
        <p className="text-base text-muted-foreground">
          {content.summary[language]}
        </p>

        <div className="rounded-3xl border border-border/60 bg-background/60 p-4">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {projectLabels.domain[language]}
          </p>
          <p className="mt-2 font-semibold">{content.domain[language]}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="rounded-3xl border border-border/60 bg-primary/6 p-4 text-sm text-muted-foreground">
          <div className="mb-2 flex items-center gap-2 font-semibold text-foreground">
            <Sparkles className="h-4 w-4" />
            {projectLabels.outcomes[language]}
          </div>
          <p>{content.impact[language]}</p>
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-3">
        {project.links.demo && (
          <Button variant="outline" className="rounded-full" asChild>
            <Link href={project.links.demo} target="_blank">
              {projectLabels.demo[language]}
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
        <Button className="rounded-full" asChild>
          <Link href={`/projetos/${project.slug}`}>
            {projectLabels.caseStudiesTitle[language]}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
