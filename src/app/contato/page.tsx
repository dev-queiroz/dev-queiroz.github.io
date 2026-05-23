"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { contactContent } from "@/data/site-content";
import { usePortfolioLanguage } from "@/components/language-provider";

export default function Contato() {
  const { language } = usePortfolioLanguage();

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-16 md:px-8">
      <div className="w-full max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 rounded-[2rem] border border-border/70 bg-card/65 p-10 shadow-2xl"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {contactContent.title[language]}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              {contactContent.description[language]}
            </p>
          </div>

          <Button
            size="lg"
            className="rounded-full bg-[#25D366] px-8 py-8 text-lg font-black text-white shadow-[0_18px_40px_rgba(37,211,102,0.3)] transition-all hover:scale-105 hover:bg-[#128C7E]"
            asChild
          >
            <a
              href="https://wa.me/558896293741?text=Olá, Douglas! Vi seu portfólio e gostaria de conversar sobre o desenvolvimento de um produto."
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactContent.button[language]}
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
