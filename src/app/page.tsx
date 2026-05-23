"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { usePortfolioLanguage } from "@/components/language-provider";
import {
  heroContent,
  heroMetrics,
  homepageSections,
} from "@/data/site-content";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const { language } = usePortfolioLanguage();

  const featuredProjects = projects.filter((project) => project.featured);
  const inProgressProjects = projects.filter(
      (project) => project.stage === "in_progress"
  );

  return (
      <main className="min-h-screen">
        <section className="relative overflow-hidden px-6 py-20 lg:py-28">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-7xl flex-col gap-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
              <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65 }}
                  className="space-y-8"
              >
                <Badge className="rounded-full px-4 py-2 text-sm font-medium">
                  {heroContent.availability[language]}
                </Badge>

                <div className="space-y-6">
                  <p className="font-mono text-sm uppercase tracking-[0.28em] text-primary">
                    {heroContent.eyebrow[language]}
                  </p>

                  <h1 className="max-w-4xl text-5xl font-black tracking-tighter sm:text-6xl lg:text-7xl">
                    {heroContent.title[language]}
                  </h1>

                  <p className="max-w-3xl text-2xl font-semibold tracking-tight text-foreground/90 sm:text-[1.65rem]">
                    {heroContent.subtitle[language]}
                  </p>

                  <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                    {heroContent.description[language]}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                      size="lg"
                      className="rounded-full px-8 text-base font-medium"
                      asChild
                  >
                    <Link href="/projetos">
                      {heroContent.primaryCta[language]}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8 text-base font-medium"
                      asChild
                  >
                    <Link href="/contato">
                      {heroContent.secondaryCta[language]}
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="rounded-[2rem] border border-border/70 bg-card/75 p-8 shadow-2xl backdrop-blur"
              >
                <div className="flex items-start gap-5">
                  <Avatar className="h-28 w-28 border border-primary/40">
                    <AvatarImage
                        src="/images/douglas-queiroz.jpg"
                        alt="Douglas Queiroz - Backend Engineer"
                        className="object-cover"
                    />
                    <AvatarFallback>DQ</AvatarFallback>
                  </Avatar>

                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                      Douglas Queiroz
                    </p>
                    <h2 className="text-3xl font-black">Backend Engineer</h2>
                    <p className="text-muted-foreground leading-tight">
                      Node.js • NestJS • Next.js • Analytics • AI Workflows
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {heroMetrics.map((metric) => (
                      <div
                          key={metric.value + metric.label.en}
                          className="rounded-3xl border border-border/70 bg-background/60 p-4"
                      >
                        <p className="text-3xl font-black text-primary">
                          {metric.value}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {metric.label[language]}
                        </p>
                      </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <section className="grid gap-6 rounded-[2rem] border border-border/70 bg-card/50 p-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary">
                  {homepageSections.proofTitle[language]}
                </p>
              </div>
              <div className="lg:col-span-2 grid gap-4 lg:grid-cols-2">
                {homepageSections.proofItems[language].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-3 rounded-3xl bg-background/60 p-5"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="space-y-3">
              <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary">
                {homepageSections.featuredTitle[language]}
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Projetos em Destaque
              </h2>
              <p className="max-w-3xl text-lg text-muted-foreground">
                {homepageSections.featuredDescription[language]}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="space-y-3">
              <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary">
                {homepageSections.buildingTitle[language]}
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Projetos em Andamento
              </h2>
              <p className="max-w-3xl text-lg text-muted-foreground">
                {homepageSections.buildingDescription[language]}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {inProgressProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}