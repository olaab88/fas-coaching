import type { Metadata } from "next";
import { Bebas_Neue, Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FAS Coaching — Livsstil, Karriere & Personlig Utvikling",
  description:
    "Profesjonell coaching i livsstil, karriere, relasjoner, sorg, idrett og ledelse. For voksne og barn i Lørenskog og digitalt.",
  keywords: ["coaching", "livsstilscoaching", "karrierecoaching", "Lørenskog", "personlig utvikling"],
  openGraph: {
    title: "FAS Coaching",
    description: "Jeg veileder deg til et nytt perspektiv på livet.",
    url: "https://www.fas-coaching.no",
    siteName: "FAS Coaching",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={`${bebas.variable} ${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F4F9FA]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
