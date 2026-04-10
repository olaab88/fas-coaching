import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om meg — FAS Coaching",
  description: "Lær mer om livsstilscoachen bak FAS Coaching. Erfaring, verdier og tilnærming — for voksne og barn i Lørenskog.",
};

const values = [
  "Trygghet og tillit i alle samtaler",
  "Nysgjerrighet fremfor fasitsvar",
  "Respekt for din individuelle prosess",
  "Verktøy du faktisk kan bruke i hverdagen",
  "Helhetstenkning — kropp, sinn og relasjoner",
];

const certs = [
  { num: "01", text: "Sertifisert livsstilscoach" },
  { num: "02", text: "Spesialisering innen barn og unge" },
  { num: "03", text: "Motiverende samtale (MI)" },
  { num: "04", text: "Videreutdanning positiv psykologi" },
];

export default function OmPage() {
  return (
    <div className="bg-[#FAF8F2]">

      {/* HERO */}
      <section className="pt-36 pb-20 px-6 bg-[#F0EBE0]">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-quicksand)] text-[#7A8E3E] text-sm font-bold tracking-widest uppercase mb-4">
            Mer om meg
          </p>
          <h1 className="font-[family-name:var(--font-caveat)] text-[clamp(3rem,7vw,6rem)] font-bold text-[#1A1A12] leading-[0.95] max-w-xl">
            Hvem er jeg, og<br />
            <span className="text-[#C8963A]">hvorfor coaching?</span>
          </h1>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

          {/* Portrait col */}
          <div className="lg:col-span-4 relative">
            <div className="rounded-[2rem] overflow-hidden aspect-[3/4]">
              <Image src="/images/img2.jpg" alt="Coach portrett" fill sizes="(max-width:768px)100vw,33vw" className="object-cover object-top" priority />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#9EAB5C] rounded-2xl px-5 py-4">
              <p className="font-[family-name:var(--font-caveat)] text-4xl font-bold text-[#FAF8F2]">5+</p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#E8F0D0] text-xs">år med coaching</p>
            </div>
          </div>

          {/* Text col */}
          <div className="lg:col-span-8 space-y-6 lg:pt-4">
            <h2 className="font-[family-name:var(--font-caveat)] text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#1A1A12] leading-tight">
              Min reise inn i coaching
            </h2>
            <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-base leading-[1.8]">
              FAS Coaching jobber innen mange områder. Jeg veileder unge og voksne i å få et nytt perspektiv på livsstil, karriere, relasjoner, sorg, idrett og ledelse — der man støter på problemer. Hensikten er å oppnå en bedre livskvalitet.
            </p>
            <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-base leading-[1.8]">
              Jeg er basert i Lørenskog og tilbyr samtaler både fysisk og digitalt. Du kan nå meg på telefon eller via kontaktskjemaet — og vi starter alltid med en gratis og uforpliktende intro.
            </p>

            {/* Values */}
            <div className="pt-2">
              <h3 className="font-[family-name:var(--font-caveat)] text-2xl font-bold text-[#1A1A12] mb-4">Mine verdier</h3>
              <ul className="space-y-3">
                {values.map((v, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#9EAB5C] flex items-center justify-center shrink-0">
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-sm">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 px-6 bg-[#1A1A12]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-[family-name:var(--font-quicksand)] text-[#9EAB5C] text-sm font-bold tracking-widest uppercase mb-3">
              Kompetanse
            </p>
            <h2 className="font-[family-name:var(--font-caveat)] text-[clamp(2.5rem,4.5vw,4rem)] font-bold text-[#FAF8F2] leading-tight">
              Sertifiseringer &<br />utdanning
            </h2>
            <p className="font-[family-name:var(--font-quicksand)] text-[#6B6852] text-sm leading-relaxed mt-4 max-w-xs">
              Solid faglig fundament kombinert med mange år i praksis.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {certs.map((c) => (
              <div key={c.num} className="bg-[#2D2C1F] rounded-2xl p-5 border border-[#3D3C2C]">
                <span className="font-[family-name:var(--font-caveat)] text-3xl font-bold text-[#9EAB5C]">{c.num}</span>
                <p className="font-[family-name:var(--font-quicksand)] text-[#DDD5C0] text-sm mt-2 leading-snug">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE + IMAGE */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="h-72 lg:h-[440px] rounded-[2rem] overflow-hidden relative">
            <Image src="/images/img5.jpg" alt="Coaching i praksis" fill className="object-cover" quality={85} />
          </div>
          <div className="space-y-6 lg:pl-6">
            <p className="font-[family-name:var(--font-caveat)] text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-[#1A1A12] leading-snug">
              &ldquo;Coaching handler ikke om å gi svar — det handler om å hjelpe deg{" "}
              <span className="text-[#7A8E3E]">finne dine egne.</span>&rdquo;
            </p>
            <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-sm leading-relaxed">
              Hver person er unik. Det finnes ingen universaloppskrift — men det finnes alltid et veikart, og vi finner det sammen.
            </p>
            <Link
              href="/timeplan"
              className="inline-flex items-center gap-2 bg-[#7A8E3E] text-[#FAF8F2] font-[family-name:var(--font-quicksand)] font-bold px-7 py-3.5 rounded-2xl hover:bg-[#C8963A] transition-colors duration-300 cursor-pointer"
            >
              Book en samtale <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
