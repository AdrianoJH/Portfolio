import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "@/context/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, personJsonLd, websiteJsonLd } from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Adriano Souza",
  },
  description: SITE_DESCRIPTION,
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
  authors: [{ name: "Adriano Rodrigues de Souza", url: SITE_URL }],
  creator: "Adriano Rodrigues de Souza",
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_NAME,
    description:
      "Portfólio de Adriano Souza — web, mobile e nuvem com React, Next.js, Node.js, Flutter e AWS.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Web, mobile e nuvem com React, Next.js, Node.js, Flutter e AWS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
        <JsonLd data={[personJsonLd(), websiteJsonLd()]} />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
