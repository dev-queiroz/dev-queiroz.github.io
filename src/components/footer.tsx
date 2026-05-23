"use client";

import { usePortfolioLanguage } from "@/components/language-provider";
import { footerContent } from "@/data/site-content";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const { language } = usePortfolioLanguage();

  return (
    <footer className="border-t border-border/60 bg-background/80 py-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4">
        <div className="flex items-center justify-center gap-8">
          <a
            href="https://github.com/dev-queiroz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/douglas-queiroz-saas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:queirozdouglas466@gmail.com"
            className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://wa.me/558896293741"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
          >
            <Phone size={28} />
          </a>
        </div>

        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {footerContent.note[language]}
          </p>
          <p className="text-xs text-muted-foreground/80">
            Douglas Queiroz © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
