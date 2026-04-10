import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Star, Quote, Phone, Mail, MapPin } from "lucide-react";

/* ── Data ────────────────────────────────────────── */

const areas = [
  { slug: "livsstil",  label: "Livsstils-\ncoaching",  img: "/images/img1.jpg",  desc: "Finn balansen mellom hvem du er og hvordan du lever." },
  { slug: "karriere",  label: "Karriere-\ncoaching",   img: "/images/img2.jpg",  desc: "Retning, mål og mot til å ta det neste steget." },
  { slug: "relasjoner",label: "Relasjons-\ncoaching",  img: "/images/img3.jpg",  desc: "Bedre kommunikasjon og dypere forbindelser." },
  { slug: "sorg",      label: "Sorg-\nveiledning",     img: "/images/img4.jpg",  desc: "Et trygt rom for å bearbeide tap og tunge tider." },
  { slug: "idrett",    label: "Idrettslig\ncoaching",  img: "/images/img5.jpg",  desc: "Mental styrke og fokus for å prestere på topp." },
  { slug: "ledelse",   label: "Ledelses-\ncoaching",   img: "/images/img6.jpg",  desc: "Bli en leder som inspirerer og skaper resultater." },
];

const testimonials = [
  { quote: "FAS Coaching ga meg verktøy jeg ikke visste jeg trengte. Etter noen samtaler så jeg livet på en helt ny måte.", name: "Maria H.", role: "Pedagog, Oslo" },
  { quote: "Utrolig varmt og profesjonelt. Ingen press, ingen fasitsvar — bare ekte lytting og de rette spørsmålene.", name: "Thomas A.", role: "Bedriftsleder, Lørenskog" },
  { quote: "Datteren min blomstret etter coaching her. Anbefales på det varmeste til alle foreldre.", name: "Kari M.", role: "Mor til 14-åring" },
  { quote: "Etter å ha stått fast i karrieren i årevis, hjalp FAS Coaching meg å se mulighetene som alltid hadde vært der.", name: "Jonas B.", role: "IT-konsulent" },
];

/* ── Page ───────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="bg-[#F4F9FA]">

      {/* ════════════════════════════════════════════
          1. HERO — dark teal, massive PERSPEKTIV
      ════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-[#0B3D4A] flex flex-col justify-center overflow-hidden pt-16">

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }}
        />

        {/* Background image — right side, faded */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
          <Image src="/images/hero_hires.jpg" alt="" fill className="object-cover object-left" priority quality={80} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D4A] via-[#0B3D4A]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[#C8963A]" />
              <span className="font-[family-name:var(--font-dm)] text-[#3AA0B2] text-xs font-semibold tracking-[0.2em] uppercase">
                Livsstilscoaching · Lørenskog
              </span>
            </div>

            {/* PERSPEKTIV — the money shot */}
            <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(5rem,18vw,16rem)] leading-[0.85] text-white tracking-wide mb-8">
              PER
              <span className="text-[#C8963A]">SPEK</span>
              TIV
            </h1>

            {/* Tagline */}
            <p className="font-[family-name:var(--font-dm)] text-white/60 text-lg leading-relaxed max-w-lg mb-10">
              Jeg veileder unge og voksne i å få et nytt perspektiv på livsstil, karriere, relasjoner, sorg, idrett og ledelse — for en bedre livskvalitet.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/timeplan"
                className="inline-flex items-center gap-2 bg-[#C8963A] text-white font-[family-name:var(--font-dm)] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#E8B96A] transition-colors duration-200 cursor-pointer text-sm"
              >
                Book en samtale
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/om"
                className="inline-flex items-center gap-2 text-white/70 border border-white/20 font-[family-name:var(--font-dm)] font-medium px-6 py-3.5 rounded-xl hover:text-white hover:border-white/40 transition-all duration-200 cursor-pointer text-sm"
              >
                Les om meg
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
              {[["100+", "Klienter"], ["5+", "År erfaring"], ["6", "Coachingområder"], ["98%", "Anbefaler"]].map(([v, l]) => (
                <div key={l}>
                  <p className="font-[family-name:var(--font-bebas)] text-3xl text-[#C8963A] tracking-wide">{v}</p>
                  <p className="font-[family-name:var(--font-dm)] text-white/40 text-xs mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F4F9FA] to-transparent" />
      </section>

      {/* ════════════════════════════════════════════
          2. COACHING AREAS — image cards grid
      ════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-[#C8963A]" />
                <span className="font-[family-name:var(--font-dm)] text-[#1B6B7A] text-xs font-semibold tracking-[0.15em] uppercase">Hva jeg jobber med</span>
              </div>
              <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold text-[#0A1F27] leading-tight">
                Seks områder.<br />
                <span className="text-[#1B6B7A]">Én tilnærming.</span>
              </h2>
            </div>
            <Link
              href="/timeplan"
              className="inline-flex items-center gap-2 text-[#1B6B7A] border border-[#1B6B7A] font-[family-name:var(--font-dm)] font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#1B6B7A] hover:text-white transition-all duration-200 cursor-pointer self-start"
            >
              Se timeplan <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* 6-card grid — 3 cols desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map((area) => (
              <div
                key={area.slug}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-default"
              >
                {/* Background image */}
                <Image
                  src={area.img}
                  alt={area.label.replace("\n", " ")}
                  fill
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={75}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07303C]/90 via-[#07303C]/40 to-transparent" />
                <div className="absolute inset-0 bg-[#1B6B7A]/0 group-hover:bg-[#1B6B7A]/20 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-white leading-tight tracking-wide mb-2">
                    {area.label.split("\n").map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                  </h3>
                  <p className="font-[family-name:var(--font-dm)] text-white/70 text-sm leading-relaxed translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {area.desc}
                  </p>
                </div>

                {/* Top badge */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#C8963A]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. ABOUT — OM MEG
      ════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/img2.jpg"
                alt="FAS Coaching — om meg"
                fill
                sizes="(max-width:1024px)100vw,50vw"
                className="object-cover object-top"
                quality={85}
              />
            </div>
            {/* Floating teal accent card */}
            <div className="absolute -bottom-6 -right-4 bg-[#0B3D4A] text-white rounded-2xl px-6 py-5 shadow-xl">
              <p className="font-[family-name:var(--font-bebas)] text-4xl text-[#C8963A] tracking-wide">5+</p>
              <p className="font-[family-name:var(--font-dm)] text-white/60 text-xs mt-0.5">år som coach</p>
            </div>
            {/* Logo bubble */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-lg border border-[#D0E5EA]">
              <Image src="/images/logo6.png" alt="FAS Coaching" width={52} height={52} className="object-contain" />
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C8963A]" />
              <span className="font-[family-name:var(--font-dm)] text-[#1B6B7A] text-xs font-semibold tracking-[0.15em] uppercase">Om meg</span>
            </div>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold text-[#0A1F27] leading-tight">
              Et møte som<br />
              <span className="text-[#1B6B7A]">forandrer noe</span>
            </h2>
            <p className="font-[family-name:var(--font-dm)] text-[#2C4A55] text-base leading-[1.8]">
              FAS Coaching jobber innen mange områder. Jeg veileder unge og voksne i å få et nytt perspektiv på livsstil, karriere, relasjoner, sorg, idrett og ledelse — der man støter på problemer. Hensikten er å oppnå en bedre livskvalitet.
            </p>
            <p className="font-[family-name:var(--font-dm)] text-[#2C4A55] text-base leading-[1.8]">
              Jeg er basert i Lørenskog og tilbyr samtaler både fysisk og digitalt. Alle samtaler holdes i konfidensielle omgivelser med full respekt for din prosess.
            </p>

            {/* 3-stat row */}
            <div className="grid grid-cols-3 gap-4 py-2">
              {[["Livsstil","Karriere","Relasjoner"],["Sorg","Idrett","Ledelse"]].flat().slice(0,3).map((item) => (
                <div key={item} className="bg-[#EDF7FA] rounded-xl px-4 py-3 text-center">
                  <p className="font-[family-name:var(--font-dm)] text-[#1B6B7A] text-xs font-semibold">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/om"
              className="inline-flex items-center gap-2 text-[#0A1F27] font-[family-name:var(--font-dm)] font-semibold text-sm hover:text-[#1B6B7A] transition-colors cursor-pointer group"
            >
              Les mer om meg
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. TESTIMONIALS — "HVA SIER DE JEG HAR HJULPET?"
      ════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0B3D4A]">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-[#C8963A]" />
                <span className="font-[family-name:var(--font-dm)] text-[#3AA0B2] text-xs font-semibold tracking-[0.15em] uppercase">Referanser</span>
              </div>
              <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold text-white leading-tight">
                Hva sier de jeg<br />
                <span className="text-[#C8963A]">har hjulpet?</span>
              </h2>
            </div>
            <Link href="/referanser" className="text-[#3AA0B2] hover:text-white font-[family-name:var(--font-dm)] text-sm font-semibold transition-colors cursor-pointer self-start">
              Se alle →
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border border-white/8 ${
                  i === 0 ? "bg-white/8" : "bg-white/4"
                }`}
              >
                <Quote size={20} className="text-[#C8963A] mb-5" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-[#C8963A] text-[#C8963A]" />
                  ))}
                </div>
                <p className="font-[family-name:var(--font-outfit)] text-lg font-light text-white/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[#1B6B7A] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-outfit)] text-white text-xs font-bold">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-dm)] text-white font-semibold text-sm">{t.name}</p>
                    <p className="font-[family-name:var(--font-dm)] text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. FULL-WIDTH IMAGE BREAK
      ════════════════════════════════════════════ */}
      <section className="relative h-[340px] overflow-hidden">
        <Image src="/images/img3.jpg" alt="" fill className="object-cover object-center" quality={80} />
        <div className="absolute inset-0 bg-[#0B3D4A]/70" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <blockquote className="text-center max-w-3xl">
            <p className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,6vw,5rem)] text-white tracking-wide leading-tight">
              Du har allerede det du trenger —<br />
              <span className="text-[#C8963A]">la oss finne det sammen</span>
            </p>
          </blockquote>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. CONTACT TEASER — KONTAKT MEG
      ════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C8963A]" />
              <span className="font-[family-name:var(--font-dm)] text-[#1B6B7A] text-xs font-semibold tracking-[0.15em] uppercase">Ta kontakt</span>
            </div>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold text-[#0A1F27] leading-tight">
              Klar for å starte<br />
              <span className="text-[#1B6B7A]">din reise?</span>
            </h2>
            <p className="font-[family-name:var(--font-dm)] text-[#2C4A55] text-base leading-[1.8]">
              Start med en gratis 20-minutters intro-samtale. Ingen forpliktelser — bare en åpen prat om hva du ønsker å jobbe med.
            </p>

            <div className="space-y-3">
              {[
                { icon: Phone, label: "+47 41 12 21 29", href: "tel:+4741122129" },
                { icon: Mail, label: "post@fas-coaching.no", href: "mailto:post@fas-coaching.no" },
                { icon: MapPin, label: "Skårerveien 12, Lørenskog", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#EDF7FA] flex items-center justify-center shrink-0 group-hover:bg-[#1B6B7A] transition-colors duration-200">
                    <Icon size={15} className="text-[#1B6B7A] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="font-[family-name:var(--font-dm)] text-[#2C4A55] text-sm group-hover:text-[#1B6B7A] transition-colors duration-200">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/timeplan"
                className="inline-flex items-center gap-2 bg-[#0B3D4A] text-white font-[family-name:var(--font-dm)] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#1B6B7A] transition-colors duration-200 cursor-pointer text-sm"
              >
                Book gratis intro <ArrowRight size={14} />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-[#0A1F27] border border-[#D0E5EA] font-[family-name:var(--font-dm)] font-medium px-6 py-3.5 rounded-xl hover:border-[#1B6B7A] hover:text-[#1B6B7A] transition-all duration-200 cursor-pointer text-sm"
              >
                Send melding
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <Image src="/images/img6.jpg" alt="Kontakt FAS Coaching" fill className="object-cover" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D4A]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/80 shadow-xl">
                <p className="font-[family-name:var(--font-outfit)] font-semibold text-[#0A1F27] text-sm">Gratis intro-samtale</p>
                <p className="font-[family-name:var(--font-dm)] text-[#5C7A84] text-xs mt-0.5">20 minutter · Ingen forpliktelse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
