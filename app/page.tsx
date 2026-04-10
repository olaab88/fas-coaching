import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Star, Check } from "lucide-react";

const services = [
  {
    title: "Individuell coaching",
    desc: "En-til-en samtaler tilpasset deg. Vi kartlegger, reflekterer og lager en plan som faktisk passer livet ditt.",
    tag: "Voksne",
    color: "bg-[#7A8E3E]",
    textColor: "text-[#FAF8F2]",
  },
  {
    title: "Barn & unge",
    desc: "Trygge, lekne rammer der barn og tenåringer kan snakke fritt og bygge indre styrke.",
    tag: "6–18 år",
    color: "bg-[#F0EBE0]",
    textColor: "text-[#1A1A12]",
  },
  {
    title: "Livsstilveiledning",
    desc: "Helhetlig blikk på hverdagen — vaner, relasjoner, identitet. Finn din unike balanse.",
    tag: "Livsstil",
    color: "bg-[#C8963A]",
    textColor: "text-[#FAF8F2]",
  },
  {
    title: "Gruppecoaching",
    desc: "Vekst i fellesskap. Møt andre som er på lignende reiser og lær av hverandre.",
    tag: "Gruppe",
    color: "bg-[#1A1A12]",
    textColor: "text-[#FAF8F2]",
  },
];

const testimonials = [
  {
    quote: "FAS Coaching forandret måten jeg ser på meg selv og livet mitt. Etter noen samtaler hadde jeg verktøy jeg ikke visste jeg trengte.",
    name: "Maria H.",
    role: "Pedagog, Oslo",
  },
  {
    quote: "Utrolig varmt og profesjonelt. Coachen møtte meg akkurat der jeg var — ingen press, ingen fasitsvar.",
    name: "Thomas A.",
    role: "Bedriftsleder, Lørenskog",
  },
  {
    quote: "Datteren min blomstret opp etter coaching her. Anbefales til alle foreldre som vil hjelpe barnet sitt.",
    name: "Kari M.",
    role: "Mor til 14-åring",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#FAF8F2]">

      {/* ─────────────────────────────────────────────
          HERO  — full screen, high-res image, organic
      ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero_hires.jpg"
            alt="FAS Coaching"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
          {/* Gradient: transparent top → dark bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A12]/90 via-[#1A1A12]/30 to-transparent" />
        </div>

        {/* Floating badge — top right */}
        <div className="absolute top-28 right-6 md:right-12 z-10 bg-[#9EAB5C]/90 backdrop-blur-sm rounded-2xl px-5 py-4 border border-[#9EAB5C]">
          <p className="font-[family-name:var(--font-caveat)] text-[#FAF8F2] text-lg font-semibold leading-tight">
            5+ år<br />med coaching
          </p>
        </div>

        {/* Hero text */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-20">
          <p className="font-[family-name:var(--font-quicksand)] text-[#9EAB5C] text-sm font-semibold tracking-widest uppercase mb-5">
            Livsstilscoaching — Lørenskog
          </p>
          <h1 className="font-[family-name:var(--font-caveat)] text-[clamp(3.5rem,9vw,8rem)] font-bold text-[#FAF8F2] leading-[0.9] mb-7 max-w-4xl">
            Form ditt eget<br />
            <span className="text-[#E8B96A]">perspektiv</span><br />
            på livet
          </h1>
          <p className="font-[family-name:var(--font-quicksand)] text-[#D6D3C8] text-lg leading-relaxed max-w-lg mb-10">
            Profesjonell coaching for voksne og barn — med varme, nærvær og verktøy som virker i hverdagen.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/timeplan"
              className="inline-flex items-center gap-2 bg-[#9EAB5C] text-[#FAF8F2] font-[family-name:var(--font-quicksand)] font-bold px-8 py-4 rounded-2xl hover:bg-[#7A8E3E] transition-colors duration-300 cursor-pointer text-base"
            >
              Book en samtale
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/om"
              className="inline-flex items-center gap-2 text-[#FAF8F2] font-[family-name:var(--font-quicksand)] font-medium px-6 py-4 rounded-2xl border border-[#FAF8F2]/25 hover:border-[#FAF8F2]/50 hover:bg-white/5 transition-all duration-300 cursor-pointer text-base"
            >
              Les om meg
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-[#FAF8F2]/30 animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          MARQUEE STRIP
      ───────────────────────────────────────────── */}
      <section className="bg-[#7A8E3E] py-4 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[...Array(3)].map((_, i) =>
            ["Livsstilscoaching", "Coaching for barn", "Gruppecoaching", "Lørenskog", "Digitalt tilgjengelig", "Individuell tilpasning"].map((item) => (
              <span key={`${i}-${item}`} className="font-[family-name:var(--font-quicksand)] text-[#FAF8F2]/80 text-sm font-medium tracking-widest uppercase">
                {item} <span className="text-[#E8B96A] mx-2">✦</span>
              </span>
            ))
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          ABOUT — asymmetric split, organic feel
      ───────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT — stacked images */}
          <div className="lg:col-span-5 relative">
            {/* Main image */}
            <div className="rounded-[2rem] overflow-hidden aspect-[4/5] relative">
              <Image src="/images/img2.jpg" alt="Coaching session" fill sizes="(max-width:768px)100vw,42vw" className="object-cover object-top" />
            </div>
            {/* Floating second image */}
            <div className="absolute -bottom-8 -right-4 w-[55%] rounded-[1.5rem] overflow-hidden aspect-square border-4 border-[#FAF8F2] shadow-xl">
              <Image src="/images/img1.jpg" alt="FAS Coaching" fill sizes="25vw" className="object-cover" />
            </div>
            {/* Logo badge */}
            <div className="absolute top-6 -left-4 bg-[#FAF8F2] rounded-2xl p-3 shadow-lg border border-[#DDD5C0]">
              <Image src="/images/logo6.png" alt="FAS Coaching" width={56} height={56} className="object-contain" />
            </div>
          </div>

          {/* RIGHT — text */}
          <div className="lg:col-span-7 lg:pt-16 space-y-6">
            <p className="font-[family-name:var(--font-quicksand)] text-[#7A8E3E] text-sm font-bold tracking-widest uppercase">
              Hvem er jeg
            </p>
            <h2 className="font-[family-name:var(--font-caveat)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[#1A1A12] leading-tight">
              Et møte som{" "}
              <span className="text-[#C8963A]">forandrer</span>{" "}
              noe
            </h2>
            <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-base leading-[1.75]">
              Hos FAS Coaching møter du en coach som lytter uten å dømme, stiller de rette spørsmålene og hjelper deg å se egne ressurser. Jeg jobber med voksne som ønsker mer retning — og med barn og unge som trenger et trygt rom.
            </p>
            <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-base leading-[1.75]">
              Coachingen er alltid tilpasset deg. Ingen fasit. Bare de riktige verktøyene — i ditt tempo.
            </p>

            {/* Mini stat row */}
            <div className="grid grid-cols-3 gap-4 pt-3">
              {[["100+", "Klienter"], ["5+", "År erfaring"], ["98%", "Anbefaler"]].map(([val, lbl]) => (
                <div key={lbl} className="bg-[#F0EBE0] rounded-2xl px-4 py-4 text-center">
                  <p className="font-[family-name:var(--font-caveat)] text-3xl font-bold text-[#7A8E3E]">{val}</p>
                  <p className="font-[family-name:var(--font-quicksand)] text-[#6B6852] text-xs mt-0.5">{lbl}</p>
                </div>
              ))}
            </div>

            <Link
              href="/om"
              className="inline-flex items-center gap-1.5 text-[#1A1A12] font-[family-name:var(--font-quicksand)] font-semibold text-sm hover:text-[#7A8E3E] transition-colors duration-200 cursor-pointer group mt-2"
            >
              Les mer om meg
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          PULL QUOTE — full width
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-0">
        <div className="relative h-[380px]">
          <Image src="/images/img3.jpg" alt="Natur" fill className="object-cover object-center" quality={85} />
          <div className="absolute inset-0 bg-[#1A1A12]/65" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <blockquote className="text-center max-w-2xl">
              <p className="font-[family-name:var(--font-caveat)] text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-[#FAF8F2] leading-tight">
                &ldquo;Du har allerede det du trenger —<br />
                <span className="text-[#E8B96A]">la oss finne det sammen.</span>&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SERVICES — bento-style, alternating colors
      ───────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-[family-name:var(--font-quicksand)] text-[#7A8E3E] text-sm font-bold tracking-widest uppercase mb-2">
                Tjenester
              </p>
              <h2 className="font-[family-name:var(--font-caveat)] text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#1A1A12]">
                Hva jeg kan hjelpe med
              </h2>
            </div>
            <Link
              href="/timeplan"
              className="inline-flex items-center gap-2 border-2 border-[#1A1A12] text-[#1A1A12] font-[family-name:var(--font-quicksand)] font-bold text-sm px-6 py-3 rounded-2xl hover:bg-[#1A1A12] hover:text-[#FAF8F2] transition-all duration-300 cursor-pointer self-start"
            >
              Se priser & tider
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className={`${s.color} rounded-[1.75rem] p-8 flex flex-col gap-4 group hover:scale-[1.01] transition-transform duration-300 cursor-default`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-[family-name:var(--font-quicksand)] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${
                    s.color === "bg-[#F0EBE0]"
                      ? "bg-[#DDD5C0] text-[#1A1A12]"
                      : "bg-black/15 text-white"
                  }`}>
                    {s.tag}
                  </span>
                  <span className={`font-[family-name:var(--font-caveat)] text-5xl font-bold opacity-20 ${s.textColor}`}>
                    0{i + 1}
                  </span>
                </div>
                <h3 className={`font-[family-name:var(--font-caveat)] text-2xl font-bold ${s.textColor}`}>
                  {s.title}
                </h3>
                <p className={`font-[family-name:var(--font-quicksand)] text-sm leading-relaxed ${
                  s.textColor === "text-[#FAF8F2]" ? "text-white/75" : "text-[#4A4837]"
                }`}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          IMAGE TRIO — organic grid
      ───────────────────────────────────────────── */}
      <section className="px-6 pb-6">
        <div className="max-w-6xl mx-auto grid grid-cols-12 grid-rows-2 gap-4 h-[380px]">
          <div className="col-span-7 row-span-2 rounded-[1.75rem] overflow-hidden relative">
            <Image src="/images/img4.jpg" alt="" fill className="object-cover" quality={80} />
          </div>
          <div className="col-span-5 row-span-1 rounded-[1.75rem] overflow-hidden relative">
            <Image src="/images/img5.jpg" alt="" fill className="object-cover object-center" quality={80} />
          </div>
          <div className="col-span-5 row-span-1 rounded-[1.75rem] overflow-hidden relative">
            <Image src="/images/img6.jpg" alt="" fill className="object-cover" quality={80} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          TESTIMONIALS — card style
      ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1A1A12]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-[family-name:var(--font-quicksand)] text-[#9EAB5C] text-sm font-bold tracking-widest uppercase mb-2">
              Referanser
            </p>
            <h2 className="font-[family-name:var(--font-caveat)] text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#FAF8F2]">
              Hva folk sier
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#2D2C1F] rounded-[1.5rem] p-7 border border-[#3D3C2C] flex flex-col gap-5"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-[#C8963A] text-[#C8963A]" />
                  ))}
                </div>
                <p className="font-[family-name:var(--font-caveat)] text-xl font-semibold text-[#DDD5C0] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-[#3D3C2C] pt-4">
                  <p className="font-[family-name:var(--font-quicksand)] font-bold text-[#FAF8F2] text-sm">{t.name}</p>
                  <p className="font-[family-name:var(--font-quicksand)] text-[#6B6852] text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/referanser"
              className="inline-flex items-center gap-2 text-[#9EAB5C] font-[family-name:var(--font-quicksand)] font-semibold text-sm hover:text-[#E8B96A] transition-colors duration-200 cursor-pointer"
            >
              Se alle referanser <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          WHY COACHING — checklist
      ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F0EBE0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <p className="font-[family-name:var(--font-quicksand)] text-[#7A8E3E] text-sm font-bold tracking-widest uppercase">
              Hvorfor coaching?
            </p>
            <h2 className="font-[family-name:var(--font-caveat)] text-[clamp(2.5rem,4.5vw,3.8rem)] font-bold text-[#1A1A12] leading-tight">
              Kanskje du kjenner<br />deg igjen?
            </h2>
            <ul className="space-y-3">
              {[
                "Du vet ikke helt hva du vil med livet",
                "Du føler deg fast i gamle mønstre",
                "Du vil hjelpe barnet ditt på en bedre måte",
                "Du trenger noen som lytter uten å dømme",
                "Du ønsker mer balanse og ro i hverdagen",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#9EAB5C] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="font-[family-name:var(--font-quicksand)] text-[#2D2C1F] text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 lg:h-[460px]">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
              <Image src="/images/img1.jpg" alt="Refleksjon" fill className="object-cover" quality={85} />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-[#FAF8F2] rounded-2xl p-5 shadow-xl border border-[#DDD5C0] max-w-[220px]">
              <p className="font-[family-name:var(--font-caveat)] text-[#C8963A] text-4xl font-bold">Gratis</p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-xs mt-1 leading-snug">
                Start med en gratis intro-samtale. Ingen forpliktelse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          BOTTOM CTA
      ───────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#7A8E3E] rounded-[2rem] overflow-hidden px-8 py-16 text-center">
            {/* Decorative blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#9EAB5C]/50 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#C8963A]/30 blur-3xl" />

            <div className="relative z-10">
              <p className="font-[family-name:var(--font-quicksand)] text-[#E8F0D0] text-sm font-bold tracking-widest uppercase mb-3">
                Ta det første steget
              </p>
              <h2 className="font-[family-name:var(--font-caveat)] text-[clamp(2.8rem,6vw,5.5rem)] font-bold text-[#FAF8F2] leading-tight mb-5">
                Klar for å starte<br />reisen?
              </h2>
              <p className="font-[family-name:var(--font-quicksand)] text-[#E8F0D0] text-base max-w-sm mx-auto mb-8 leading-relaxed">
                Book en gratis 20-minutters intro og finn ut om coaching er noe for deg.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/timeplan"
                  className="inline-flex items-center gap-2 bg-[#FAF8F2] text-[#1A1A12] font-[family-name:var(--font-quicksand)] font-bold px-8 py-4 rounded-2xl hover:bg-[#C8963A] hover:text-[#FAF8F2] transition-colors duration-300 cursor-pointer"
                >
                  Book gratis intro
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-[#FAF8F2] border-2 border-[#FAF8F2]/40 font-[family-name:var(--font-quicksand)] font-bold px-8 py-4 rounded-2xl hover:border-[#FAF8F2] transition-colors duration-300 cursor-pointer"
                >
                  Send melding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
