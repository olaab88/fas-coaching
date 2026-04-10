import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Star, Phone, Mail, MapPin } from "lucide-react";

const areas = [
  { label: "Livsstilscoaching",   tag: "Livsstil",  img: "/images/img1.jpg", desc: "Finn balansen mellom hvem du er og hvordan du lever hverdagen." },
  { label: "Karrierecoaching",    tag: "Karriere",  img: "/images/img2.jpg", desc: "Retning, mål og mot til å ta det neste steget i karrieren." },
  { label: "Relasjonsveiledning", tag: "Relasjoner",img: "/images/img3.jpg", desc: "Bedre kommunikasjon og dypere, mer ærlige forbindelser." },
  { label: "Sorgveiledning",      tag: "Sorg",      img: "/images/img4.jpg", desc: "Et trygt rom for å bearbeide tap og vanskelige tider." },
  { label: "Idrettscoaching",     tag: "Idrett",    img: "/images/img5.jpg", desc: "Mental styrke og fokus for å prestere på ditt beste." },
  { label: "Ledelsescoaching",    tag: "Ledelse",   img: "/images/img6.jpg", desc: "Bli lederen som inspirerer, engasjerer og leverer resultater." },
];

const testimonials = [
  { quote: "FAS Coaching forandret måten jeg ser på meg selv. Etter noen samtaler hadde jeg verktøy jeg ikke visste jeg trengte.", name: "Maria H.", role: "Pedagog, Oslo" },
  { quote: "Ingen press, ingen fasitsvar — bare ekte lytting og de rette spørsmålene. Utrolig varmt og profesjonelt.", name: "Thomas A.", role: "Bedriftsleder, Lørenskog" },
  { quote: "Datteren min blomstret etter coaching her. Anbefales på det varmeste.", name: "Kari M.", role: "Mor til 14-åring" },
];

const stats = [
  { value: "100+", label: "Klienter" },
  { value: "5 år", label: "Erfaring" },
  { value: "98%", label: "Anbefaler" },
  { value: "6", label: "Fagområder" },
];

export default function HomePage() {
  return (
    <div className="bg-[#F8F7F4]">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="min-h-screen pt-16 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#F5E4C3] text-[#8B5E1A] rounded-full px-4 py-1.5 text-xs font-[family-name:var(--font-dm)] font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8963A]" />
              Coaching · Lørenskog & digitalt
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,6vw,5.5rem)] text-[#111110] leading-[1.05] font-bold">
              Coaching som<br />
              gir deg<br />
              <em className="not-italic text-[#C8963A]">retning.</em>
            </h1>

            <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-lg leading-relaxed max-w-md">
              Profesjonell coaching for deg som ønsker å vokse i liv, karriere og relasjoner — i trygge, konfidensielle omgivelser.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-7 py-3.5 rounded-full hover:bg-[#C8963A] transition-colors duration-200 cursor-pointer text-sm"
              >
                Book gratis intro <ArrowRight size={14} />
              </Link>
              <Link
                href="/om"
                className="inline-flex items-center gap-2 text-[#111110] border border-[#E2DDD7] font-[family-name:var(--font-dm)] font-medium px-6 py-3.5 rounded-full hover:border-[#111110] transition-colors duration-200 cursor-pointer text-sm"
              >
                Les mer
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-[#E2DDD7]">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111110]">{value}</p>
                  <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/images/hero_hires.jpg"
                alt="FAS Coaching"
                fill
                priority
                sizes="(max-width:1024px)100vw,50vw"
                className="object-cover object-center"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/30 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-6 py-4 shadow-xl border border-[#E2DDD7]">
              <div className="flex gap-1 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#C8963A] text-[#C8963A]" />
                ))}
              </div>
              <p className="font-[family-name:var(--font-dm)] font-semibold text-[#111110] text-sm">98% anbefaler</p>
              <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-xs mt-0.5">100+ klienter</p>
            </div>

            {/* Top badge */}
            <div className="absolute -top-3 -right-3 bg-[#C8963A] text-white rounded-2xl px-4 py-3 shadow-lg">
              <p className="font-[family-name:var(--font-playfair)] font-bold text-2xl leading-none">5+</p>
              <p className="font-[family-name:var(--font-dm)] text-white/80 text-[10px] mt-0.5">år erfaring</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="font-[family-name:var(--font-dm)] text-[#C8963A] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Hva jeg tilbyr
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#111110] leading-tight">
                Seks veier til<br />
                <em>bedre livskvalitet</em>
              </h2>
            </div>
            <Link
              href="/timeplan"
              className="inline-flex items-center gap-2 text-[#111110] border border-[#E2DDD7] font-[family-name:var(--font-dm)] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#111110] hover:text-white hover:border-[#111110] transition-all duration-200 cursor-pointer self-start"
            >
              Se timeplan <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((area, i) => (
              <div key={i} className="group bg-[#F8F7F4] rounded-2xl overflow-hidden border border-[#E2DDD7] hover:border-[#C8963A] hover:shadow-lg transition-all duration-300 cursor-default">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={area.img}
                    alt={area.label}
                    fill
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={70}
                  />
                </div>
                <div className="p-5">
                  <span className="font-[family-name:var(--font-dm)] text-[10px] font-bold tracking-widest uppercase text-[#C8963A]">
                    {area.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#111110] mt-1 mb-2">
                    {area.label}
                  </h3>
                  <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/timeplan"
              className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-8 py-3.5 rounded-full hover:bg-[#C8963A] transition-colors duration-200 cursor-pointer text-sm"
            >
              Book en samtale <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] relative">
              <Image
                src="/images/img2.jpg"
                alt="FAS Coaching"
                fill
                sizes="(max-width:1024px)100vw,50vw"
                className="object-cover object-top"
                quality={85}
              />
            </div>
            <div className="absolute -bottom-5 -right-4 bg-[#141210] text-white rounded-2xl px-6 py-5 shadow-xl">
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#C8963A]">5+</p>
              <p className="font-[family-name:var(--font-dm)] text-white/60 text-xs mt-0.5">år som coach</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="font-[family-name:var(--font-dm)] text-[#C8963A] text-xs font-semibold tracking-[0.2em] uppercase">
              Om meg
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#111110] leading-tight">
              Et møte som<br />
              <em>forandrer noe</em>
            </h2>
            <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-base leading-[1.8]">
              FAS Coaching jobber innen mange områder. Jeg veileder unge og voksne i å få et nytt perspektiv på livsstil, karriere, relasjoner, sorg, idrett og ledelse.
            </p>
            <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-base leading-[1.8]">
              Jeg er basert i Lørenskog og tilbyr samtaler både fysisk og digitalt — og vi starter alltid med en gratis intro-samtale.
            </p>

            <blockquote className="border-l-2 border-[#C8963A] pl-5 py-1">
              <p className="font-[family-name:var(--font-playfair)] text-xl italic text-[#111110] leading-snug">
                &ldquo;Coaching handler ikke om å gi svar — det handler om å hjelpe deg finne dine egne.&rdquo;
              </p>
            </blockquote>

            <Link
              href="/om"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-dm)] text-sm font-medium text-[#111110] hover:text-[#C8963A] transition-colors cursor-pointer group"
            >
              Les mer om meg <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#141210]">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="font-[family-name:var(--font-dm)] text-[#C8963A] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Referanser
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-tight">
                Hva sier<br />
                <em className="text-[#C8963A]">klientene?</em>
              </h2>
            </div>
            <Link
              href="/referanser"
              className="font-[family-name:var(--font-dm)] text-sm text-white/50 hover:text-white transition-colors cursor-pointer self-start"
            >
              Se alle referanser →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/8 rounded-2xl p-7 flex flex-col gap-5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-[#C8963A] text-[#C8963A]" />
                  ))}
                </div>
                <p className="font-[family-name:var(--font-playfair)] text-base italic font-light text-white/80 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-[family-name:var(--font-dm)] font-semibold text-white text-sm">{t.name}</p>
                  <p className="font-[family-name:var(--font-dm)] text-white/40 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-7">
            <p className="font-[family-name:var(--font-dm)] text-[#C8963A] text-xs font-semibold tracking-[0.2em] uppercase">
              Kom i gang
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#111110] leading-tight">
              Klar for å starte<br />
              <em>din reise?</em>
            </h2>
            <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-base leading-[1.8]">
              Start med en gratis 20-minutters intro-samtale. Ingen forpliktelser — bare en åpen prat om hva du ønsker å jobbe med.
            </p>

            <div className="space-y-3">
              {[
                { icon: Phone, label: "+47 41 12 21 29", href: "tel:+4741122129" },
                { icon: Mail, label: "post@fas-coaching.no", href: "mailto:post@fas-coaching.no" },
                { icon: MapPin, label: "Skårerveien 12, Lørenskog", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F7F4] border border-[#E2DDD7] flex items-center justify-center shrink-0 group-hover:bg-[#111110] group-hover:border-[#111110] transition-all duration-200">
                    <Icon size={14} className="text-[#6B6860] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="font-[family-name:var(--font-dm)] text-[#6B6860] text-sm group-hover:text-[#111110] transition-colors duration-200">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-7 py-3.5 rounded-full hover:bg-[#C8963A] transition-colors duration-200 cursor-pointer text-sm"
              >
                Book gratis intro <ArrowRight size={14} />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-[#111110] border border-[#E2DDD7] font-[family-name:var(--font-dm)] font-medium px-6 py-3.5 rounded-full hover:border-[#111110] transition-colors duration-200 cursor-pointer text-sm"
              >
                Send melding
              </Link>
            </div>
          </div>

          {/* Image with overlay card */}
          <div className="relative h-[460px] rounded-3xl overflow-hidden">
            <Image src="/images/img5.jpg" alt="Kontakt FAS Coaching" fill className="object-cover" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 rounded-xl px-5 py-4 shadow-xl">
                <p className="font-[family-name:var(--font-playfair)] font-bold text-[#111110] text-base">Gratis intro-samtale</p>
                <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-xs mt-0.5">20 minutter · Ingen forpliktelse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
