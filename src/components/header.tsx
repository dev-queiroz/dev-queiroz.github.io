"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LanguageToggle } from "@/components/language-toggle";
import { usePortfolioLanguage } from "@/components/language-provider";
import { navigationLabels } from "@/data/site-content";

export function Header() {
  const { language } = usePortfolioLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl">
      <div className="container mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-85"
          >
            <Avatar className="h-11 w-11 border border-primary/40">
              <AvatarImage
                src="/images/douglas-queiroz.jpg"
                alt="Douglas Queiroz"
              />
              <AvatarFallback className="font-bold">DQ</AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {navigationLabels.brand}
              </p>
              <p className="text-lg font-black tracking-tight">
                Node.js, NestJS, Next.js
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:flex">
            <Link className="transition-colors hover:text-foreground" href="/projetos">
              {navigationLabels.projects[language]}
            </Link>
            <Link className="transition-colors hover:text-foreground" href="/sobre">
              {navigationLabels.about[language]}
            </Link>
            <Link className="transition-colors hover:text-foreground" href="/contato">
              {navigationLabels.contact[language]}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ModeToggle />
          <Button className="hidden rounded-full px-5 font-bold md:inline-flex" asChild>
            <Link href="/contato">{navigationLabels.cta[language]}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
