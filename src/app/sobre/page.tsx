"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/timeline";
import {
  aboutContent,
  experiences,
  skills,
} from "@/data/site-content";
import { usePortfolioLanguage } from "@/components/language-provider";

export default function Sobre() {
  const { language } = usePortfolioLanguage();

  return (
      <div className="min-h-screen px-4 py-24 md:px-8">
        <div className="mx-auto max-w-6xl space-y-20">
          <motion.section
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-10 rounded-[2rem] border border-border/70 bg-card/60 p-8 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="space-y-6">
              <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary">
                {aboutContent.title[language]}
              </p>
              <h1 className="text-5xl font-black tracking-tight md:text-7xl">
                {aboutContent.title[language]}
              </h1>
              <p className="text-xl leading-8 text-foreground/90">
                {aboutContent.intro[language]}
              </p>
            </div>
            <div className="flex items-end">
              <p className="text-lg leading-8 text-muted-foreground">
                {aboutContent.body[language]}
              </p>
            </div>
          </motion.section>

          <section className="space-y-8">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              {aboutContent.skillsTitle[language]}
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                  <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-full px-5 py-2.5 text-sm font-medium border border-border/70 bg-card hover:bg-card/80 transition-colors"
                  >
                    {skill}
                  </Badge>
              ))}
            </div>
          </section>

          <section className="space-y-8 pb-16">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              {aboutContent.experienceTitle[language]}
            </h2>
            <Timeline items={experiences} />
          </section>
        </div>
      </div>
  );
}
