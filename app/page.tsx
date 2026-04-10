import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Star, Phone, Mail, MapPin } from "lucide-react";
import RotatingWord from "@/components/RotatingWord";

const areas = [
  {
    label: "Livsstilscoaching",
    tag: "Livsstil",
    img: "/images/site_img_n.jpg",
    desc: "Få mest mulig ut av livet! Det er viktig å ta de riktige og gode valgene for å kunne ha en langsiktig og god fremtid. Vi hjelper deg ut av sirkelen.",
  },
  {
    label: "Prestasjonscoaching",
    tag: "Prestasjon",
    img: "/images/site_img_m.jpg",
    desc: "For å prestere sitt ytterste i sport eller innenfor bil- og MC-kjøring er det viktig med fokus. Jeg har utviklet verktøy for å prestere under høyt press.",
  },
  {
    label: "Relasjonscoaching",
    tag: "Relasjoner",
    img: "/images/site_img_j.jpg",
    desc: "Vi har ikke kontroll over hva andre gjør, men vi kan ta kontroll over vår egen respons. Lær å håndtere mellommenneskelige forhold bedre.",
  },
  {
    label: "Sorgbearbeiding",
    tag: "Sorg",
    img: "/images/site_img_i.png",
    desc: "Det å miste noen er vondt. Jeg jobber både med barn og voksne, og har god erfaring med sorgbearbeiding etter tap, skilsmisse og livskriser.",
  },
  {
    label: "Karrierecoaching",
    tag: "Karriere",
    img: "/images/site_img_g.jpg",
    desc: "Sitter du fast i tankerekker på jobb? Ta kontakt så kan vi se potensialet i å oppnå flere av dine personlige og profesjonelle mål.",
  },
  {
    label: "Ledelsescoaching",
    tag: "Ledelse",
    img: "/images/site_img_h.jpg",
    desc: "Ønsker du som leder å få til et bedre samarbeid med ansatte? Jeg har mange verktøy og teknikker som kan hjelpe deg med å lede mer effektivt.",
  },
];

const testimonials = [
  {
    quote: "Finn Arne er en mann som virkelig får deg til å finne ut av hvem som er viktigst i livet og hva som er viktigst ved å lytte hjerte og følelser. Jeg hadde ikke kommet dit jeg er i dag på 4 mnd uten hans hjelp.",
    name: "Jon Henning",
    role: "42 år",
  },
  {
    quote: "Når jeg kom til deg hadde jeg få eller ingen positive tanker. Du fikk meg til å gå i meg selv og vi fant raskt noen av årsakene til mine problemer. Nå smiler livet igjen.",
    name: "Tore",
    role: "38 år",
  },
  {
    quote: "Han er ikke belærende, ikke instruerende, men er meget god til å stille spørsmål. Gjennom gode samtaler leder han meg gjennom nye måter å se ting på.",
    name: "Per",
    role: "40 år",
  },
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
      <section className="min-h-screen pt-16 bg-[#F8F7F4] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 w-full min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row">

          {/* Left: Text */}
          <div className="flex flex-col justify-center py-20 lg:py-24 lg:w-[52%] lg:pr-16 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 bg-[#E8F7F7] text-[#00617A] rounded-full px-4 py-1.5 text-xs font-[family-name:var(--font-dm)] font-semibold tracking-wide w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#64C8C8]" />
              Coaching · Lørenskog og digitalt
            </div>

            <div>
              <p className="font-[family-name:var(--font-dm)] text-[#111110] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                FAS Coaching
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,6vw,5.5rem)] text-[#111110] leading-[1.0] font-bold">
                Coaching som<br />
                gir deg<br />
                <RotatingWord />
              </h1>
            </div>

            <p className="font-[family-name:var(--font-dm)] text-[#111110] text-lg leading-relaxed max-w-md">
              Jeg er Finn Arne Sivertsen — profesjonell business- og livsstilscoach som hjelper både voksne og barn til å forme et eget perspektiv på livet.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-7 py-3.5 rounded-full hover:bg-[#002850] transition-colors duration-200 cursor-pointer text-sm"
              >
                Book gratis intro <ArrowRight size={14} />
              </Link>
              <Link
                href="/om"
                className="inline-flex items-center gap-2 text-[#111110] border border-[#E2DDD7] font-[family-name:var(--font-dm)] font-medium px-6 py-3.5 rounded-full hover:border-[#111110] transition-colors duration-200 cursor-pointer text-sm"
              >
                Les mer om meg
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-[#E2DDD7]">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111110]">{value}</p>
                  <p className="font-[family-name:var(--font-dm)] text-[#111110] text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Full-height photo */}
          <div className="relative lg:w-[48%] h-72 lg:h-auto">
            {/* On mobile: normal flow with aspect ratio; on lg: absolute fill right side */}
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:left-0 rounded-3xl lg:rounded-none lg:rounded-l-3xl overflow-hidden h-full min-h-72">
              <Image
                src="/images/finn_arne_outdoor.png"
                alt="Finn Arne Sivertsen — FAS Coaching"
                fill
                priority
                sizes="(max-width:1024px)100vw,48vw"
                className="object-cover object-top"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F4]/20 to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/20 to-transparent" />
            </div>

            {/* Floating rating card */}
            <div className="absolute bottom-6 left-4 lg:-left-6 bg-white rounded-2xl px-5 py-4 shadow-xl border border-[#E2DDD7] z-10">
              <div className="flex gap-1 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#64C8C8] text-[#64C8C8]" />
                ))}
              </div>
              <p className="font-[family-name:var(--font-dm)] font-semibold text-[#111110] text-sm">Finn Arne Sivertsen</p>
              <p className="font-[family-name:var(--font-dm)] text-[#111110] text-xs mt-0.5">FAS Coaching · Lørenskog</p>
            </div>

            {/* Top badge */}
            <div className="absolute top-6 right-4 lg:-right-3 bg-[#002850] text-white rounded-2xl px-4 py-3 shadow-lg z-10">
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
              <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Hva jeg tilbyr
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#111110] leading-tight">
                Seks veier til<br />
                <span className="text-[#002850]">bedre livskvalitet</span>
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
              <div key={i} className="group bg-[#F8F7F4] rounded-2xl overflow-hidden border border-[#E2DDD7] hover:border-[#64C8C8] hover:shadow-lg transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={area.img}
                    alt={area.label}
                    fill
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={75}
                  />
                </div>
                <div className="p-5">
                  <span className="font-[family-name:var(--font-dm)] text-[10px] font-bold tracking-widest uppercase text-[#64C8C8]">
                    {area.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#111110] mt-1 mb-2">
                    {area.label}
                  </h3>
                  <p className="font-[family-name:var(--font-dm)] text-[#111110] text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-8 py-3.5 rounded-full hover:bg-[#002850] transition-colors duration-200 cursor-pointer text-sm"
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
                src="/images/finn_arne.png"
                alt="Finn Arne Sivertsen — FAS Coaching"
                fill
                sizes="(max-width:1024px)100vw,50vw"
                className="object-cover object-top"
                quality={90}
              />
            </div>
            <div className="absolute -bottom-5 -right-4 bg-[#141210] text-white rounded-2xl px-6 py-5 shadow-xl">
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#64C8C8]">5+</p>
              <p className="font-[family-name:var(--font-dm)] text-white text-xs mt-0.5">år som coach</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase">
              Om Finn Arne
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#111110] leading-tight">
              Profesjonell coach<br />
              <span className="text-[#002850]">for hele livet</span>
            </h2>
            <p className="font-[family-name:var(--font-dm)] text-[#111110] text-[1rem] leading-[1.8]">
              Jeg er en profesjonell business- og livsstilscoach som hjelper både voksne og barn til å forme et eget perspektiv på livet. Ditt liv kan bli mye bedre med positiv tenking, livsglede, bedre helse og en mer effektiv og morsommere hverdag.
            </p>
            <p className="font-[family-name:var(--font-dm)] text-[#111110] text-[1rem] leading-[1.8]">
              Jeg kan hjelpe deg med verktøy og teknikker, og utvikle vaner og ferdigheter som gjør at du effektivt, og med et helt nytt perspektiv, kan håndtere de utfordringene du møter i livet. Samtaler kan gjøres via telefon, video eller personlig møte.
            </p>

            <blockquote className="border-l-2 border-[#002850] pl-5 py-1">
              <p className="font-[family-name:var(--font-dm)] text-[1rem] text-[#111110] leading-snug font-medium">
                &ldquo;Hvis du gjør det du alltid har gjort, får du det du alltid har fått.&rdquo;
              </p>
            </blockquote>

            <Link
              href="/om"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-dm)] text-sm font-medium text-[#111110] hover:text-[#002850] transition-colors cursor-pointer group"
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
              <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Referanser
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-tight">
                Hva sier<br />
                <span className="text-[#64C8C8]">klientene?</span>
              </h2>
            </div>
            <Link
              href="/referanser"
              className="font-[family-name:var(--font-dm)] text-sm text-white/85 hover:text-white transition-colors cursor-pointer self-start"
            >
              Se alle referanser →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/30 rounded-2xl p-7 flex flex-col gap-5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-[#64C8C8] text-[#64C8C8]" />
                  ))}
                </div>
                <p className="font-[family-name:var(--font-dm)] text-sm text-white leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/30">
                  <p className="font-[family-name:var(--font-dm)] font-semibold text-white text-sm">{t.name}</p>
                  <p className="font-[family-name:var(--font-dm)] text-white/85 text-xs mt-0.5">{t.role}</p>
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
            <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase">
              Kom i gang
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#111110] leading-tight">
              Klar for å starte<br />
              <span className="text-[#002850]">din reise?</span>
            </h2>
            <p className="font-[family-name:var(--font-dm)] text-[#111110] text-[1rem] leading-[1.8]">
              Start med en gratis 20-minutters intro-samtale. Ingen forpliktelser — bare en åpen prat om hva du ønsker å jobbe med.
            </p>

            <div className="space-y-3">
              {[
                { icon: Phone, label: "+47 906 90 635", href: "tel:+4790690635" },
                { icon: Mail, label: "finnarnes@yahoo.no", href: "mailto:finnarnes@yahoo.no" },
                { icon: MapPin, label: "Skårerveien 12, 1470 Lørenskog", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F7F4] border border-[#E2DDD7] flex items-center justify-center shrink-0 group-hover:bg-[#111110] group-hover:border-[#111110] transition-all duration-200">
                    <Icon size={14} className="text-[#111110] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="font-[family-name:var(--font-dm)] text-[#111110] text-sm group-hover:text-[#111110] transition-colors duration-200">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-7 py-3.5 rounded-full hover:bg-[#002850] transition-colors duration-200 cursor-pointer text-sm"
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

          {/* Image */}
          <div className="relative h-[460px] rounded-3xl overflow-hidden">
            <Image src="/images/site_img_l.jpg" alt="Kontakt FAS Coaching" fill className="object-cover" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 rounded-xl px-5 py-4 shadow-xl">
                <p className="font-[family-name:var(--font-playfair)] font-bold text-[#111110] text-base">Gratis intro-samtale</p>
                <p className="font-[family-name:var(--font-dm)] text-[#111110] text-xs mt-0.5">20 minutter · Ingen forpliktelse · Ring +47 906 90 635</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
