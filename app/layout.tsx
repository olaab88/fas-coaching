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
  metadataBase: new URL("https://www.fas-coaching.no"),
  title: "FAS Coaching — Livsstilscoach i Lørenskog",
  description:
    "Profesjonell coaching i livsstil, karriere, relasjoner, sorg, idrett og ledelse. For voksne og barn i Lørenskog og digitalt. Book gratis intro-samtale.",
  keywords: ["coaching", "livsstilscoach", "livsstilscoaching", "karrierecoaching", "Lørenskog", "Akershus", "personlig utvikling", "coach Norge"],
  alternates: {
    canonical: "https://www.fas-coaching.no",
  },
  openGraph: {
    title: "FAS Coaching — Livsstilscoach i Lørenskog",
    description: "Profesjonell coaching i livsstil, karriere, relasjoner, sorg, idrett og ledelse. For voksne og barn i Lørenskog og digitalt.",
    url: "https://www.fas-coaching.no",
    siteName: "FAS Coaching",
    locale: "nb_NO",
    type: "website",
    images: [{ url: "/images/finn_arne_outdoor.png", width: 1200, height: 630, alt: "Finn Arne Sivertsen — FAS Coaching" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAS Coaching — Livsstilscoach i Lørenskog",
    description: "Profesjonell coaching i livsstil, karriere og personlig utvikling. Book gratis intro-samtale.",
    images: ["/images/finn_arne_outdoor.png"],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://www.fas-coaching.no/#business",
      "name": "FAS Coaching",
      "description": "Profesjonell coaching i livsstil, karriere, relasjoner, sorg, idrett og ledelse. For voksne og barn i Lørenskog og digitalt.",
      "url": "https://www.fas-coaching.no",
      "telephone": "+4790690635",
      "email": "finnarnes@yahoo.no",
      "image": "https://www.fas-coaching.no/images/finn_arne_outdoor.png",
      "priceRange": "kr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Skårerveien 12",
        "addressLocality": "Lørenskog",
        "postalCode": "1470",
        "addressCountry": "NO"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 59.9230, "longitude": 10.9450 },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }],
      "founder": { "@id": "https://www.fas-coaching.no/#person" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "4",
        "reviewCount": "4"
      },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Jon Henning" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Jeg hadde ikke kommet dit jeg er i dag uten Finn Arnes hjelp på 4 måneder, og opplever nå min beste tid i livet i en alder av 42 år." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Per" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Gjennom gode samtaler og dialog leder han meg gjennom nye måter å se ting på. Du har min beste anbefaling." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Tore" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Nå smiler livet igjen. Jeg er sosial, positiv og har fått meg kjæreste. Dette kan varmt anbefales." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Frode" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Takk for det jeg klart ser som avgjørende bidrag for meg i noen uker preget av rådløshet og handlekraft." }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.fas-coaching.no/#person",
      "name": "Finn Arne Sivertsen",
      "jobTitle": "Sertifisert livsstils- og businesscoach",
      "image": "https://www.fas-coaching.no/images/finn_arne.png",
      "url": "https://www.fas-coaching.no/om",
      "telephone": "+4790690635",
      "worksFor": { "@id": "https://www.fas-coaching.no/#business" }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.fas-coaching.no/#website",
      "url": "https://www.fas-coaching.no",
      "name": "FAS Coaching",
      "inLanguage": "nb-NO",
      "publisher": { "@id": "https://www.fas-coaching.no/#business" }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8F7F4]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
