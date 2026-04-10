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
    <div className="bg-[#F8F7F4] pt-16">

      {/* HERO */}
      <section className="py-24 px-6 border-b border-[#E2DDD7]">
        <div className="max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Timeplan
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,8vw,7rem)] text-[#111110] font-bold leading-[1.0]">
            Start din<br />
            <em className="text-[#002850]">reise</em>
          </h1>
          <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-base mt-6 max-w-lg leading-relaxed">
            Velg det coachingområdet som passer deg — og start gjerne med en gratis intro-samtale.
          </p>
        </div>
      </section>

      {/* FORMAT PILLS */}
      <section className="bg-white border-b border-[#E2DDD7] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {formats.map((f, i) => (
            <div key={i} className="flex items-start gap-4 p-5 bg-[#F8F7F4] rounded-xl border border-[#E2DDD7]">
              <div className="w-9 h-9 rounded-lg bg-[#141210] flex items-center justify-center shrink-0">
                <f.icon size={15} className="text-white" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-dm)] font-semibold text-[#111110] text-sm">{f.title}</p>
                <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-xs mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SESSION TYPES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Hva jeg tilbyr
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#111110] mb-10">
            Velg ditt coachingområde
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sessions.map((s, i) => (
              <div key={i} className="group bg-[#F8F7F4] rounded-2xl overflow-hidden border border-[#E2DDD7] hover:border-[#64C8C8] hover:shadow-lg transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={70}
                  />
                </div>
                <div className="p-5">
                  <span className="font-[family-name:var(--font-dm)] text-[10px] font-bold tracking-widest uppercase text-[#64C8C8]">
                    {s.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#111110] mt-1 mb-2">{s.title}</h3>
                  <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-8 py-4 rounded-full hover:bg-[#002850] transition-colors duration-200 cursor-pointer text-sm"
            >
              Ta kontakt for å booke <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* INFO BOX */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-64 rounded-3xl overflow-hidden relative">
            <Image src="/images/img6.jpg" alt="" fill className="object-cover" quality={75} />
          </div>
          <div className="space-y-5">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#111110]">
              Usikker på om coaching er{" "}
              <em className="text-[#002850]">noe for deg?</em>
            </h2>
            <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-sm leading-[1.8]">
              Start med en gratis 20-minutters intro-samtale. Ingen forpliktelser — bare en åpen prat om hva du ønsker å jobbe med. Etter samtalen avgjør du selv om du ønsker å gå videre.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#002850] text-white font-[family-name:var(--font-dm)] font-medium px-7 py-3.5 rounded-full hover:bg-[#143C64] transition-colors duration-200 cursor-pointer text-sm"
            >
              Ta kontakt <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
