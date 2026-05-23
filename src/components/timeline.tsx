"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePortfolioLanguage } from "@/components/language-provider";
import { ExperienceEntry } from "@/data/site-content";

interface TimelineProps {
  items: ExperienceEntry[];
}

export function Timeline({ items }: TimelineProps) {
  const { language } = usePortfolioLanguage();

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <Card
          key={`${item.company}-${item.period.en}`}
          className="border-border/70 bg-card/60 backdrop-blur"
        >
          <CardHeader>
            <CardTitle className="text-xl font-black">
              {item.title[language]} · {item.company}
            </CardTitle>
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              {item.period[language]}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{item.description[language]}</p>
            <div className="flex flex-wrap gap-2">
              {item.techs.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
