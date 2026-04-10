import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanser — FAS Coaching",
  description:
    "Les hva klienter sier om coaching med FAS Coaching. Ekte erfaringer fra voksne og familier i Lørenskog og omegn.",
};

const testimonials = [
  {
    quote:
      "FAS Coaching forandret måten jeg ser på meg selv og livet mitt. Etter bare noen få samtaler hadde jeg verktøy jeg ikke visste jeg trengte. Coachen lyttet virkelig — uten å dømme.",
    name: "Maria H.",
    role: "Pedagog, Oslo",
    sessions: "6 samtaler",
  },
  {
    quote:
      "Utrolig varmt og profesjonelt miljø. Coachen møtte meg akkurat der jeg var, uten press eller forhåndsbestemte svar. Jeg følte meg sett og hørt på en måte jeg ikke hadde opplevd før.",
    name: "Thomas A.",
    role: "Bedriftsleder, Lørenskog",
    sessions: "Pakke på 10 timer",
  },
  {
    quote:
      "Datteren min blomstret opp etter å ha gått i coaching her. Hun ble mer trygg på seg selv, fikk bedre venner og trives mye bedre på skolen. Anbefales på det varmeste til alle foreldre.",
    name: "Kari M.",
    role: "Mor til 14-åring",
    sessions: "5 samtaler",
  },
  {
    quote:
      "Jeg var skeptisk i starten, men allerede etter første time visste jeg at dette var noe for meg. Coachen hjelper deg å tenke klarere og se løsninger der du tidligere bare så problemer.",
    name: "Jonas B.",
    role: "IT-konsulent, Lørenskog",
    sessions: "8 samtaler",
  },
  {
    quote:
      "Som alenemor med en krevende jobb trengte jeg hjelp til å finne balansen. FAS Coaching ga meg en trygg plass til å tenke høyt og finne veien fremover. Jeg er evig takknemlig.",
    name: "Lene S.",
    role: "Sykepleier, Skedsmo",
    sessions: "Pakke på 5 timer",
  },
  {
    quote:
      "Sønnen min (12 år) hadde det vanskelig sosialt. Etter noen måneder med coaching har han åpnet seg mer, og vi ser en stor positiv forandring hjemme og på skolen.",
    name: "Erik og Tone V.",
    role: "Foreldre",
    sessions: "4 samtaler",
  },
];

export default function ReferanserPage() {
  return (
    <div className="bg-[#FAFAF9]">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-20 px-6 bg-[#1C1917]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="font-[family-name:var(--font-quicksand)] text-[#CA8A04] text-sm font-medium tracking-widest uppercase">
              Referanser
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-7xl font-light text-[#FAFAF9] leading-tight mt-3">
              Ekte historier,<br />
              <em className="italic text-[#CA8A04]">ekte endring</em>
            </h1>
            <p className="font-[family-name:var(--font-quicksand)] text-[#A8A29E] text-base leading-relaxed mt-5 max-w-md">
              Her er noen av historiene fra klienter som har vært gjennom coaching-prosessen hos FAS Coaching.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────── */}
      <section className="bg-[#F5F0EB] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "Fornøyde klienter" },
              { value: "5 år", label: "Med coaching" },
              { value: "98%", label: "Anbefaler videre" },
              { value: "5 ★", label: "Gjennomsnittlig rating" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#CA8A04]">
                  {s.value}
                </p>
                <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-sm mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS GRID ─────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border border-[#E8DDD0] ${
                  i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <Quote size={24} className="text-[#CA8A04] mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="fill-[#CA8A04] text-[#CA8A04]" />
                  ))}
                </div>
                <p className="font-[family-name:var(--font-cormorant)] text-xl font-light italic text-[#1C1917] leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-quicksand)] font-semibold text-[#1C1917] text-sm">
                      {t.name}
                    </p>
                    <p className="font-[family-name:var(--font-quicksand)] text-[#78716C] text-xs mt-0.5">
                      {t.role}
                    </p>
                  </div>
                  <span className="font-[family-name:var(--font-quicksand)] text-xs text-[#CA8A04] bg-[#CA8A04]/10 px-3 py-1 rounded-full">
                    {t.sessions}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE BREAK ──────────────────────────── */}
      <section className="relative h-72 overflow-hidden">
        <Image src="/images/img4.jpg" alt="Coaching omgivelser" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1C1917]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light italic text-[#FAFAF9] max-w-xl">
              &ldquo;Den beste investeringen du kan gjøre, er i deg selv.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F5F0EB]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#1C1917] leading-tight">
            Skriv din egen<br />
            <em className="italic">historie</em>
          </h2>
          <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-sm leading-relaxed mt-5 mb-8 max-w-sm mx-auto">
            Start med en gratis intro-samtale og se hva coaching kan gjøre for deg.
          </p>
          <Link
            href="/timeplan"
            className="inline-flex items-center gap-2 bg-[#1C1917] text-[#FAFAF9] font-[family-name:var(--font-quicksand)] font-semibold px-8 py-4 rounded-xl hover:bg-[#CA8A04] transition-colors duration-300 cursor-pointer"
          >
            Book gratis intro
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
