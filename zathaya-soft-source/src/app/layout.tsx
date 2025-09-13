import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zathaya Soft - Jasa Pembuatan Website Profesional",
  description: "Layanan pembuatan website profesional untuk bisnis Anda. Solusi web development, e-commerce, dan aplikasi mobile dengan teknologi terkini.",
  keywords: "jasa website, web development, pembuatan website, e-commerce, landing page, aplikasi web",
  authors: [{ name: "Zathaya Soft" }],
  creator: "Zathaya Soft",
  publisher: "Zathaya Soft",
  robots: "index, follow",
  openGraph: {
    title: "Zathaya Soft - Jasa Pembuatan Website Profesional",
    description: "Layanan pembuatan website profesional untuk bisnis Anda",
    type: "website",
    locale: "id_ID",
    siteName: "Zathaya Soft",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zathaya Soft - Jasa Pembuatan Website Profesional",
    description: "Layanan pembuatan website profesional untuk bisnis Anda",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}