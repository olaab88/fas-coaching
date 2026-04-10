import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
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
    description: "Coaching som gir deg retning.",
    url: "https://www.fas-coaching.no",
    siteName: "FAS Coaching",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F8F7F4]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
