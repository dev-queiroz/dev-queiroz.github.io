import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Douglas Queiroz | Backend and Full-Stack Engineer",
  description:
    "Bilingual portfolio focused on backend engineering, product platforms, analytics APIs, and AI-enabled workflows.",
  keywords: [
    "Douglas Queiroz",
    "backend engineer",
    "NestJS",
    "Next.js",
    "Node.js",
    "portfolio",
  ],
  openGraph: {
    title: "Douglas Queiroz | Backend and Full-Stack Engineer",
    description:
      "Case-study portfolio for backend systems, analytics products, and full-stack execution.",
    images: "/images/douglas-queiroz.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${plexMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
