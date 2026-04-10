import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Star } from "lucide-react";

const services = [
  {
    title: "Individuell coaching",
    desc: "En-til-en samtaler der vi utforsker dine mål, utfordringer og ressurser. Vi skaper en plan som er tilpasset deg og din hverdag.",
    tag: "Voksne",
  },
  {
    title: "Coaching for barn og unge",
    desc: "Trygge rammer der barn og unge kan snakke fritt, bygge selvtillit og lære verktøy for å håndtere hverdagen.",
    tag: "Barn & unge",
  },
  {
    title: "Livsstilveiledning",
    desc: "Helhetlig tilnærming til hverdagen — fra rutiner og vaner til relasjoner og identitet. Finn din balanse.",
    tag: "Livsstil",
  },
  {
    title: "Gruppecoaching",
    desc: "Felleskap og vekst i trygge omgivelser. Del erfaringer, lær av andre og styrk din personlige utvikling.",
    tag: "Gruppe",
  },
];

const testimonials = [
  {
    quote:
      "FAS Coaching forandret måten jeg ser på meg selv og livet mitt. Etter bare noen få samtaler hadde jeg verktøy jeg ikke visste jeg trengte.",
    name: "Maria H.",
    role: "Pedagog, Oslo",
  },
  {
    quote:
      "Utrolig varmt og profesjonelt miljø. Coachen møtte meg akkurat der jeg var, uten press eller forhåndsbestemte svar.",
    name: "Thomas A.",
    role: "Bedriftsleder, Lørenskog",
  },
  {
    quote:
      "Datteren min blomstret opp etter å ha gått i coaching her. Anbefales på det varmeste til alle foreldre.",
    name: "Kari M.",
    role: "Mor til 14-åring",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#FAFAF9]">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="FAS Coaching bakgrunn"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-block font-[family-name:var(--font-quicksand)] text-[#CA8A04] text-sm font-medium tracking-widest uppercase mb-6">
              Livsstil & Personlig Utvikling
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light text-[#FAFAF9] leading-[0.95] mb-8">
              Form ditt eget<br />
              <em className="italic text-[#CA8A04]">perspektiv</em><br />
              på livet
            </h1>
            <p className="font-[family-name:var(--font-quicksand)] text-[#D6D3D1] text-lg leading-relaxed max-w-xl mb-10">
              Jeg er en profesjonell livsstilscoach som hjelper både voksne og barn
              til å finne sin vei — med klarhet, ro og retning.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/timeplan"
                className="inline-flex items-center gap-2 bg-[#CA8A04] text-[#FAFAF9] font-[family-name:var(--font-quicksand)] font-semibold px-8 py-4 rounded-xl hover:bg-[#D97706] transition-colors duration-300 cursor-pointer"
              >
                Book en samtale
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/om"
                className="inline-flex items-center gap-2 text-[#FAFAF9] font-[family-name:var(--font-quicksand)] font-medium px-6 py-4 rounded-xl border border-[#FAFAF9]/30 hover:border-[#FAFAF9]/70 transition-colors duration-300 cursor-pointer"
              >
                Les mer om meg
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={24} className="text-[#FAFAF9]/60" />
        </div>
      </section>

      {/* ── INTRO STRIP ──────────────────────────── */}
      <section className="bg-[#1C1917] py-5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {["Livsstilscoaching", "Coaching for barn & unge", "Gruppecoaching", "Lørenskog & digitalt"].map((item) => (
              <span key={item} className="font-[family-name:var(--font-quicksand)] text-[#78716C] text-sm tracking-wide">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images collage */}
            <div className="relative h-[520px]">
              <div className="absolute top-0 left-0 w-[65%] h-[72%] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/img2.jpg" alt="Coaching session" fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-[52%] h-[52%] rounded-2xl overflow-hidden shadow-xl border-4 border-[#FAFAF9]">
                <Image src="/images/img1.jpg" alt="FAS Coaching miljø" fill className="object-cover" />
              </div>
              <div className="absolute bottom-16 left-6 bg-[#FAFAF9] rounded-xl shadow-lg px-5 py-4 border border-[#E8DDD0]">
                <p className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#CA8A04]">5+</p>
                <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-xs mt-0.5">års erfaring</p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <span className="font-[family-name:var(--font-quicksand)] text-[#CA8A04] text-sm font-medium tracking-widest uppercase">
                Om meg
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1C1917] leading-tight">
                Et møte som<br />
                <em className="italic">forandrer noe</em>
              </h2>
              <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-base leading-relaxed">
                Hos FAS Coaching møter du en coach som lytter, stiller de rette spørsmålene og hjelper deg å se dine egne ressurser. Jeg jobber med voksne som ønsker mer retning i livet, og med barn og unge som trenger et trygt rom å vokse i.
              </p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-base leading-relaxed">
                Coachingen tar utgangspunkt i din hverdag, dine mål og dine utfordringer. Ingen fasitsvar — bare de rette verktøyene for akkurat deg.
              </p>
              <Link
                href="/om"
                className="inline-flex items-center gap-2 text-[#1C1917] font-[family-name:var(--font-quicksand)] font-semibold text-sm hover:text-[#CA8A04] transition-colors duration-300 cursor-pointer group"
              >
                Les mer om meg
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE BREAK ────────────────── */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/images/img3.jpg" alt="Natur og ro" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-[#1C1917]/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="text-center px-6">
            <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light italic text-[#FAFAF9] max-w-2xl leading-snug">
              &ldquo;Du har allerede det du trenger — la oss finne det sammen.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────── */}
      <section className="py-28 px-6 bg-[#F5F0EB]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="font-[family-name:var(--font-quicksand)] text-[#CA8A04] text-sm font-medium tracking-widest uppercase">
                Tjenester
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1C1917] leading-tight mt-2">
                Hva jeg tilbyr
              </h2>
            </div>
            <Link
              href="/timeplan"
              className="inline-flex items-center gap-2 bg-[#1C1917] text-[#FAFAF9] font-[family-name:var(--font-quicksand)] font-medium px-6 py-3 rounded-xl hover:bg-[#CA8A04] transition-colors duration-300 cursor-pointer self-start md:self-auto"
            >
              Se alle tider
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-[#FAFAF9] rounded-2xl p-8 border border-[#E8DDD0] hover:border-[#CA8A04] hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block font-[family-name:var(--font-quicksand)] text-xs font-medium text-[#CA8A04] bg-[#CA8A04]/10 px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                  <span className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-[#E8DDD0] group-hover:text-[#CA8A04]/20 transition-colors duration-300">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#1C1917] mb-3">
                  {s.title}
                </h3>
                <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE ROW ────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4 h-64 md:h-80">
            <div className="col-span-1 rounded-2xl overflow-hidden relative">
              <Image src="/images/img4.jpg" alt="Coaching miljø" fill className="object-cover" />
            </div>
            <div className="col-span-1 rounded-2xl overflow-hidden relative">
              <Image src="/images/img5.jpg" alt="Samtale" fill className="object-cover object-center" />
            </div>
            <div className="col-span-1 rounded-2xl overflow-hidden relative">
              <Image src="/images/img6.jpg" alt="Naturen" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────── */}
      <section className="py-28 px-6 bg-[#1C1917]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-[family-name:var(--font-quicksand)] text-[#CA8A04] text-sm font-medium tracking-widest uppercase">
              Referanser
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#FAFAF9] leading-tight mt-2">
              Hva de sier
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#292524] rounded-2xl p-8 border border-[#44403C]">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-[#CA8A04] text-[#CA8A04]" />
                  ))}
                </div>
                <p className="font-[family-name:var(--font-cormorant)] text-xl font-light italic text-[#D6D3D1] leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-[family-name:var(--font-quicksand)] font-semibold text-[#FAFAF9] text-sm">
                    {t.name}
                  </p>
                  <p className="font-[family-name:var(--font-quicksand)] text-[#A8A29E] text-xs mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/referanser"
              className="inline-flex items-center gap-2 text-[#A8A29E] hover:text-[#CA8A04] font-[family-name:var(--font-quicksand)] text-sm transition-colors duration-300 cursor-pointer"
            >
              Se alle referanser
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BLOCK ────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#1C1917]">
            <div className="absolute inset-0 opacity-20">
              <Image src="/images/img1.jpg" alt="" fill className="object-cover" aria-hidden />
            </div>
            <div className="relative z-10 text-center py-20 px-6">
              <span className="font-[family-name:var(--font-quicksand)] text-[#CA8A04] text-sm font-medium tracking-widest uppercase">
                Ta det første steget
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-[#FAFAF9] leading-tight mt-3 mb-6">
                Klar for å starte<br />
                <em className="italic text-[#CA8A04]">reisen?</em>
              </h2>
              <p className="font-[family-name:var(--font-quicksand)] text-[#A8A29E] text-base max-w-md mx-auto mb-10">
                Book en gratis 20-minutters introduksjonssamtale og finn ut om coaching er noe for deg.
              </p>
              <Link
                href="/timeplan"
                className="inline-flex items-center gap-2 bg-[#CA8A04] text-[#FAFAF9] font-[family-name:var(--font-quicksand)] font-semibold px-10 py-4 rounded-xl hover:bg-[#D97706] transition-colors duration-300 cursor-pointer"
              >
                Book gratis intro
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
