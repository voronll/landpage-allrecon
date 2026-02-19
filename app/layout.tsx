import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const site = {
  name: "AllRecon",
  description:
    "A AllRecon está construindo uma solução para reduzir fricção, tempo e risco em processos críticos — do começo ao fim.",
  url: "https://www.allrecon.com.br",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s • ${site.name}` },
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name} preview` }],
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-6 pt-20">{children}</main>
      </body>
    </html>
  );
}
