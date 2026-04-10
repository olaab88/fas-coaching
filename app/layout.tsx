import type { Metadata } from "next";
import { Caveat, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FAS Coaching — Livsstil & Personlig Utvikling",
  description:
    "Profesjonell livsstilscoaching for voksne og barn. Hjelper deg til å forme et eget perspektiv på livet. Basert i Lørenskog.",
  keywords: ["livsstilscoaching", "coaching", "personlig utvikling", "Lørenskog", "Oslo"],
  openGraph: {
    title: "FAS Coaching",
    description: "Profesjonell livsstilscoaching for voksne og barn.",
    url: "https://www.fas-coaching.no",
    siteName: "FAS Coaching",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb" className={`${caveat.variable} ${quicksand.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
