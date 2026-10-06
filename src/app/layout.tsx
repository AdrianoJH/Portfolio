import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "@/context/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adriano-portfolio.vercel.app"),
  title: {
    default: "Adriano Souza — Desenvolvedor Full Stack",
    template: "%s | Adriano Souza",
  },
  description:
    "Desenvolvedor Full Stack com mais de 3 anos de experiência em web, mobile e serviços na nuvem — React, Next.js, Node.js, TypeScript, Flutter e AWS.",
  keywords: [
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Flutter",
    "AWS",
    "Adriano Souza",
  ],
  authors: [{ name: "Adriano Rodrigues de Souza" }],
  openGraph: {
    title: "Adriano Souza — Desenvolvedor Full Stack",
    description:
      "Portfólio de Adriano Souza — web, mobile e nuvem com React, Next.js, Node.js, Flutter e AWS.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adriano Souza — Desenvolvedor Full Stack",
    description: "Web, mobile e nuvem com React, Next.js, Node.js, Flutter e AWS.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
