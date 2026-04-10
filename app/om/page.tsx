import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om meg — FAS Coaching",
  description: "Lær mer om FAS Coaching. Erfaring innen livsstil, karriere, relasjoner, sorg, idrett og ledelse — i Lørenskog.",
};

const values = [
  "Trygghet og tillit i alle samtaler",
  "Nysgjerrighet fremfor fasitsvar",
  "Respekt for din individuelle prosess",
  "Verktøy du faktisk kan bruke i hverdagen",
  "Helhetstenkning — kropp, sinn og relasjoner",
];

const certs = [
  { num: "01", title: "Sertifisert livsstilscoach" },
  { num: "02", title: "Spesialisering innen barn og unge" },
  { num: "03", title: "Kurs i motiverende samtale (MI)" },
  { num: "04", title: "Videreutdanning i positiv psykologi" },
];

export default function OmPage() {
  return (
    <div className="bg-[#F8F7F4] pt-16">

      {/* HERO */}
      <section className="py-24 px-6 border-b border-[#E2DDD7]">
        <div className="max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-dm)] text-[#C8963A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Om meg
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,8vw,7rem)] text-[#111110] font-bold leading-[1.0]">
            Hvem er<br />
            <em>jeg?</em>
          </h1>
        </div>
      </section>

      {/* MAIN ABOUT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] relative">
              <Image
                src="/images/img2.jpg"
                alt="FAS Coaching"
                fill
                sizes="(max-width:1024px)100vw,42vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -right-4 bg-[#141210] rounded-2xl px-6 py-5 shadow-xl">
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#C8963A]">5+</p>
              <p className="font-[family-name:var(--font-dm)] text-white/60 text-xs mt-0.5">år som coach</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:pt-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#111110] leading-tight">
              Min reise inn i coaching
            </h2>
            <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-base leading-[1.8]">
              FAS Coaching jobber innen mange områder. Jeg veileder unge og voksne i å få et nytt perspektiv på livsstil, karriere, relasjoner, sorg, idrett og ledelse — der man støter på problemer. Hensikten er å oppnå en bedre livskvalitet.
            </p>
            <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-base leading-[1.8]">
              Jeg er basert i Lørenskog og tilbyr samtaler både fysisk og digitalt. Du kan nå meg på telefon eller via kontaktskjemaet — og vi starter alltid med en gratis og uforpliktende intro.
            </p>

            <div className="pt-2 space-y-3">
              <p className="font-[family-name:var(--font-dm)] font-semibold text-[#111110] text-sm tracking-wide">
                Mine verdier
              </p>
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#141210] flex items-center justify-center shrink-0">
                    <Check size={10} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="font-[family-name:var(--font-dm)] text-[#6B6860] text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTS */}
      <section className="py-20 px-6 bg-[#141210]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-[family-name:var(--font-dm)] text-[#C8963A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Kompetanse
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white leading-tight">
              Sertifiseringer<br />
              <em>& utdanning</em>
            </h2>
            <p className="font-[family-name:var(--font-dm)] text-white/40 text-sm leading-relaxed mt-4 max-w-xs">
              Solid faglig fundament kombinert med mange år i praksis.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {certs.map((c) => (
              <div key={c.num} className="bg-white/5 rounded-xl p-5 border border-white/8">
                <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8963A]">{c.num}</span>
                <p className="font-[family-name:var(--font-dm)] text-white/60 text-sm mt-2 leading-snug">{c.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-72 lg:h-[400px] rounded-3xl overflow-hidden relative">
            <Image src="/images/img5.jpg" alt="" fill className="object-cover" quality={80} />
          </div>
          <div className="space-y-6">
            <blockquote>
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#111110] leading-snug italic">
                &ldquo;Coaching handler ikke om å gi svar — det handler om å hjelpe deg{" "}
                <span className="text-[#C8963A] not-italic font-semibold">finne dine egne.&rdquo;</span>
              </p>
            </blockquote>
            <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-sm leading-relaxed">
              Hvert menneske er unikt. Det finnes ingen universaloppskrift — men det finnes alltid et veikart, og vi finner det sammen.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-7 py-3.5 rounded-full hover:bg-[#C8963A] transition-colors duration-200 cursor-pointer text-sm"
            >
              Book en samtale <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
