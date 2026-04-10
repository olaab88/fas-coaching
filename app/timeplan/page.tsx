import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Video, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeplan & Booking — FAS Coaching",
  description:
    "Book din coaching-time hos FAS Coaching. Tilbyr både fysiske møter i Lørenskog og digitale samtaler. Start med en gratis 20-minutters intro.",
};

const packages = [
  {
    name: "Intro-samtale",
    duration: "20 min",
    price: "Gratis",
    desc: "Et uforpliktende møte der vi bli kjent og ser om coaching er riktig for deg.",
    highlight: false,
  },
  {
    name: "Enkelttime",
    duration: "60 min",
    price: "900 kr",
    desc: "Én coaching-økt med fokus på det du trenger akkurat nå — mål, utfordringer eller refleksjon.",
    highlight: false,
  },
  {
    name: "Pakke — 5 timer",
    duration: "5 x 60 min",
    price: "3 900 kr",
    desc: "Vår mest populære pakke. Gir rom for dypere prosess og varig endring over tid.",
    highlight: true,
  },
  {
    name: "Pakke — 10 timer",
    duration: "10 x 60 min",
    price: "7 200 kr",
    desc: "For deg som ønsker et grundig og langsiktig forløp med full personlig oppfølging.",
    highlight: false,
  },
];

const formats = [
  {
    icon: MapPin,
    title: "Fysisk møte",
    desc: "Skårerveien 12, Lørenskog. Rolige og private omgivelser.",
  },
  {
    icon: Video,
    title: "Digitalt / video",
    desc: "Teams eller Zoom. Akkurat like effektivt som fysisk møte.",
  },
  {
    icon: Phone,
    title: "Telefoncoaching",
    desc: "For deg som foretrekker en samtale uten skjerm.",
  },
];

export default function TimeplanPage() {
  return (
    <div className="bg-[#FAFAF9]">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-20 px-6 bg-[#F5F0EB]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="font-[family-name:var(--font-quicksand)] text-[#CA8A04] text-sm font-medium tracking-widest uppercase">
              Timeplan
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-7xl font-light text-[#1C1917] leading-tight mt-3">
              Start din<br />
              <em className="italic">coaching-reise</em>
            </h1>
            <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-base leading-relaxed mt-5 max-w-lg">
              Velg pakken som passer deg, eller start med en gratis intro-samtale. Alle formater er tilgjengelige — fysisk eller digitalt.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORMATS ──────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-[#FAFAF9] rounded-2xl border border-[#E8DDD0]">
                <div className="p-3 bg-[#CA8A04]/10 rounded-xl shrink-0">
                  <f.icon size={20} className="text-[#CA8A04]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-quicksand)] font-semibold text-[#1C1917] text-sm">
                    {f.title}
                  </h3>
                  <p className="font-[family-name:var(--font-quicksand)] text-[#78716C] text-xs mt-1 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ─────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="font-[family-name:var(--font-quicksand)] text-[#CA8A04] text-sm font-medium tracking-widest uppercase">
              Priser
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#1C1917] leading-tight mt-2">
              Velg pakke
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((p, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border transition-all duration-300 ${
                  p.highlight
                    ? "bg-[#1C1917] border-[#1C1917]"
                    : "bg-[#FAFAF9] border-[#E8DDD0] hover:border-[#CA8A04]"
                }`}
              >
                {p.highlight && (
                  <span className="inline-block font-[family-name:var(--font-quicksand)] text-xs font-semibold text-[#1C1917] bg-[#CA8A04] px-3 py-1 rounded-full mb-4">
                    Mest populær
                  </span>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className={`font-[family-name:var(--font-cormorant)] text-2xl font-semibold ${
                        p.highlight ? "text-[#FAFAF9]" : "text-[#1C1917]"
                      }`}
                    >
                      {p.name}
                    </h3>
                    <div className={`flex items-center gap-1.5 mt-1 ${p.highlight ? "text-[#A8A29E]" : "text-[#78716C]"}`}>
                      <Clock size={12} />
                      <span className="font-[family-name:var(--font-quicksand)] text-xs">{p.duration}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-[family-name:var(--font-cormorant)] text-3xl font-semibold ${
                        p.highlight ? "text-[#CA8A04]" : "text-[#CA8A04]"
                      }`}
                    >
                      {p.price}
                    </p>
                  </div>
                </div>
                <p
                  className={`font-[family-name:var(--font-quicksand)] text-sm leading-relaxed mb-6 ${
                    p.highlight ? "text-[#A8A29E]" : "text-[#44403C]"
                  }`}
                >
                  {p.desc}
                </p>
                <Link
                  href="/kontakt"
                  className={`inline-flex items-center gap-2 font-[family-name:var(--font-quicksand)] font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-300 cursor-pointer ${
                    p.highlight
                      ? "bg-[#CA8A04] text-[#FAFAF9] hover:bg-[#D97706]"
                      : "bg-[#1C1917] text-[#FAFAF9] hover:bg-[#CA8A04]"
                  }`}
                >
                  Book nå
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE + INFO ─────────────────────────── */}
      <section className="py-20 px-6 bg-[#F5F0EB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden">
              <Image src="/images/img6.jpg" alt="Coaching omgivelser" fill className="object-cover" />
            </div>
            <div className="space-y-5">
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#1C1917] leading-tight">
                Usikker på om coaching er noe for deg?
              </h2>
              <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-sm leading-relaxed">
                Start med en gratis 20-minutters intro-samtale. Ingen forpliktelser, ingen forventninger — bare en åpen prat om hva du ønsker å jobbe med.
              </p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-sm leading-relaxed">
                Etter samtalen avgjør du selv om du ønsker å gå videre. Jeg vil alltid være ærlig om coaching passer for deg og din situasjon.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-[#1C1917] text-[#FAFAF9] font-[family-name:var(--font-quicksand)] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#CA8A04] transition-colors duration-300 cursor-pointer"
              >
                Ta kontakt
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
