"use client";

import { Button } from "@/components/ui/button";
import { usePortfolioLanguage } from "@/components/language-provider";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = usePortfolioLanguage();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/80 p-1 backdrop-blur">
      <span className="sr-only">Language toggle</span>
      <Languages className="ml-2 h-4 w-4 text-muted-foreground" />
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        className="rounded-full px-3"
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant={language === "pt" ? "default" : "ghost"}
        size="sm"
        className="rounded-full px-3"
        onClick={() => setLanguage("pt")}
      >
        PT
      </Button>
    </div>
  );
}
