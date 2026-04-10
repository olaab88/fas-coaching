import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Video, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeplan — FAS Coaching",
  description: "Book din coaching-time hos FAS Coaching. Fysisk i Lørenskog eller digitalt.",
};

const sessions = [
  { title: "Livsstilscoaching", tag: "Livsstil", img: "/images/img1.jpg", desc: "Finn balansen mellom hvem du er og hvordan du lever hverdagen." },
  { title: "Karrierecoaching", tag: "Karriere", img: "/images/img2.jpg", desc: "Retning, mål og mot til å ta det neste steget i karrieren." },
  { title: "Relasjonsveiledning", tag: "Relasjoner", img: "/images/img3.jpg", desc: "Bedre kommunikasjon og dypere, mer ærlige forbindelser." },
  { title: "Sorgveiledning", tag: "Sorg", img: "/images/img4.jpg", desc: "Et trygt rom for å bearbeide tap og vanskelige tider." },
  { title: "Idrettscoaching", tag: "Idrett", img: "/images/img5.jpg", desc: "Mental styrke, fokus og ro for å prestere på ditt beste." },
  { title: "Ledelsescoaching", tag: "Ledelse", img: "/images/img6.jpg", desc: "Bli lederen som inspirerer, engasjerer og leverer resultater." },
];

const formats = [
  { icon: MapPin, title: "Fysisk møte", desc: "Skårerveien 12, Lørenskog. Rolige, private omgivelser." },
  { icon: Video, title: "Digitalt / video", desc: "Via Teams eller Zoom — like effektivt som fysisk." },
  { icon: Phone, title: "Telefoncoaching", desc: "For deg som foretrekker samtale uten skjerm." },
];

export default function TimeplanPage() {
  return (
    <div className="bg-[#F4F9FA] pt-16">

      {/* HERO */}
      <section className="bg-[#0B3D4A] pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C8963A]" />
            <span className="font-[family-name:var(--font-dm)] text-[#3AA0B2] text-xs font-semibold tracking-[0.15em] uppercase">Timeplan</span>
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(4rem,12vw,10rem)] text-white tracking-wide leading-none">
            START DIN
            <span className="text-[#C8963A]"> REISE</span>
          </h1>
          <p className="font-[family-name:var(--font-dm)] text-white/50 text-base mt-4 max-w-lg leading-relaxed">
            Velg det coachingområdet som passer deg — og start gjerne med en gratis intro-samtale.
          </p>
        </div>
      </section>

      {/* FORMAT PILLS */}
      <section className="bg-white border-b border-[#D0E5EA] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {formats.map((f, i) => (
            <div key={i} className="flex items-start gap-4 p-5 bg-[#EDF7FA] rounded-xl">
              <div className="w-9 h-9 rounded-lg bg-[#1B6B7A] flex items-center justify-center shrink-0">
                <f.icon size={16} className="text-white" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-outfit)] font-semibold text-[#0A1F27] text-sm">{f.title}</p>
                <p className="font-[family-name:var(--font-dm)] text-[#5C7A84] text-xs mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SESSION TYPES */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#C8963A]" />
            <span className="font-[family-name:var(--font-dm)] text-[#1B6B7A] text-xs font-semibold tracking-[0.15em] uppercase">Hva jeg tilbyr</span>
          </div>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl font-bold text-[#0A1F27] mb-10">
            Velg ditt coachingområde
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sessions.map((s, i) => (
              <div key={i} className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                <Image src={s.img} alt={s.title} fill sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" quality={70} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07303C]/90 via-[#07303C]/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="inline-block font-[family-name:var(--font-dm)] text-[10px] font-bold tracking-widest uppercase text-[#C8963A] bg-[#C8963A]/15 px-2 py-1 rounded-full w-fit mb-2">{s.tag}</span>
                  <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-white">{s.title}</h3>
                  <p className="font-[family-name:var(--font-dm)] text-white/60 text-xs mt-1 leading-relaxed opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#0B3D4A] text-white font-[family-name:var(--font-dm)] font-semibold px-8 py-4 rounded-xl hover:bg-[#1B6B7A] transition-colors duration-200 cursor-pointer text-sm"
            >
              Ta kontakt for å booke <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* INFO BOX */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-64 rounded-2xl overflow-hidden relative">
            <Image src="/images/img6.jpg" alt="" fill className="object-cover" quality={75} />
          </div>
          <div className="space-y-4">
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-[#0A1F27]">
              Usikker på om coaching er <span className="text-[#1B6B7A]">noe for deg?</span>
            </h2>
            <p className="font-[family-name:var(--font-dm)] text-[#2C4A55] text-sm leading-[1.8]">
              Start med en gratis 20-minutters intro-samtale. Ingen forpliktelser — bare en åpen prat om hva du ønsker å jobbe med. Etter samtalen avgjør du selv om du ønsker å gå videre.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#C8963A] text-white font-[family-name:var(--font-dm)] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#E8B96A] transition-colors duration-200 cursor-pointer text-sm"
            >
              Ta kontakt <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
