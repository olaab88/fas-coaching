import type { Metadata } from "next";
import { Cormorant_Garamond, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
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
  keywords: [
    "livsstilscoaching",
    "coaching",
    "personlig utvikling",
    "Lørenskog",
    "Oslo",
    "FAS Coaching",
  ],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${cormorant.variable} ${quicksand.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
