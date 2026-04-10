import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Video, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeplan & Booking — FAS Coaching",
  description:
    "Book din coaching-time hos FAS Coaching. Tilbyr fysiske møter i Lørenskog og digitale samtaler. Start med en gratis intro-samtale.",
};

const sessionTypes = [
  {
    title: "Intro-samtale",
    duration: "20 min",
    desc: "Et uforpliktende møte der vi blir kjent og ser om coaching er riktig for deg. Gratis og uten forpliktelser.",
    tag: "Gratis",
    color: "bg-[#7A8E3E]",
    textColor: "text-[#FAF8F2]",
  },
  {
    title: "Individuell coaching",
    duration: "60 min",
    desc: "En-til-en økt med fokus på det du trenger — mål, utfordringer, refleksjon og konkrete verktøy.",
    tag: "Voksne",
    color: "bg-[#F0EBE0]",
    textColor: "text-[#1A1A12]",
  },
  {
    title: "Coaching barn & unge",
    duration: "45–60 min",
    desc: "Tilpassede samtaler for barn og tenåringer i trygge omgivelser. Foresatte involveres ved behov.",
    tag: "6–18 år",
    color: "bg-[#C8963A]",
    textColor: "text-[#FAF8F2]",
  },
  {
    title: "Gruppecoaching",
    duration: "90 min",
    desc: "Coaching i fellesskap. Møt andre på lignende reiser og veks sammen i et trygt og støttende miljø.",
    tag: "Gruppe",
    color: "bg-[#1A1A12]",
    textColor: "text-[#FAF8F2]",
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
    desc: "Teams eller Zoom — like effektivt som fysisk møte.",
  },
  {
    icon: Phone,
    title: "Telefoncoaching",
    desc: "For deg som foretrekker en samtale uten skjerm.",
  },
];

export default function TimeplanPage() {
  return (
    <div className="bg-[#FAF8F2]">

      {/* HERO */}
      <section className="pt-36 pb-20 px-6 bg-[#F0EBE0]">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-quicksand)] text-[#7A8E3E] text-sm font-bold tracking-widest uppercase mb-4">
            Timeplan
          </p>
          <h1 className="font-[family-name:var(--font-caveat)] text-[clamp(3rem,7vw,6rem)] font-bold text-[#1A1A12] leading-[0.95] max-w-xl">
            Start din<br />
            <span className="text-[#C8963A]">coaching-reise</span>
          </h1>
          <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-base leading-relaxed mt-5 max-w-lg">
            Velg den typen samtale som passer deg — eller start med en gratis intro der vi finner ut om coaching er riktig for deg.
          </p>
        </div>
      </section>

      {/* FORMAT PILLS */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {formats.map((f, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-[#F0EBE0] rounded-2xl">
                <div className="p-3 bg-[#9EAB5C]/20 rounded-xl shrink-0">
                  <f.icon size={20} className="text-[#7A8E3E]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-quicksand)] font-bold text-[#1A1A12] text-sm">{f.title}</h3>
                  <p className="font-[family-name:var(--font-quicksand)] text-[#6B6852] text-xs mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SESSION TYPES */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-[family-name:var(--font-quicksand)] text-[#7A8E3E] text-sm font-bold tracking-widest uppercase mb-2">
              Typer samtaler
            </p>
            <h2 className="font-[family-name:var(--font-caveat)] text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#1A1A12]">
              Hva tilbyr jeg?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sessionTypes.map((s, i) => (
              <div
                key={i}
                className={`${s.color} rounded-[1.75rem] p-8 flex flex-col gap-4`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-[family-name:var(--font-quicksand)] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${
                    s.color === "bg-[#F0EBE0]" ? "bg-[#DDD5C0] text-[#1A1A12]" : "bg-black/15 text-white"
                  }`}>
                    {s.tag}
                  </span>
                  <span className={`font-[family-name:var(--font-quicksand)] text-xs opacity-70 ${s.textColor}`}>
                    {s.duration}
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

          <div className="mt-8 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#7A8E3E] text-[#FAF8F2] font-[family-name:var(--font-quicksand)] font-bold px-8 py-4 rounded-2xl hover:bg-[#C8963A] transition-colors duration-300 cursor-pointer"
            >
              Ta kontakt for å booke
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* IMAGE + INFO */}
      <section className="py-20 px-6 bg-[#F0EBE0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-72 lg:h-80 rounded-[2rem] overflow-hidden relative">
            <Image src="/images/img6.jpg" alt="Coaching omgivelser" fill className="object-cover" quality={85} />
          </div>
          <div className="space-y-5">
            <h2 className="font-[family-name:var(--font-caveat)] text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#1A1A12] leading-tight">
              Usikker på om coaching er noe for deg?
            </h2>
            <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-sm leading-relaxed">
              Start med en gratis intro-samtale. Ingen forpliktelser, ingen forventninger — bare en åpen prat om hva du ønsker å jobbe med.
            </p>
            <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-sm leading-relaxed">
              Etter samtalen avgjør du selv om du ønsker å gå videre. Jeg vil alltid være ærlig om coaching passer for din situasjon.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#1A1A12] text-[#FAF8F2] font-[family-name:var(--font-quicksand)] font-bold px-7 py-3.5 rounded-2xl hover:bg-[#7A8E3E] transition-colors duration-300 cursor-pointer"
            >
              Ta kontakt <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
