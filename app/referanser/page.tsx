import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanser — FAS Coaching",
  description: "Les hva klienter sier om coaching med FAS Coaching. Ekte erfaringer fra voksne og familier i Lørenskog og omegn.",
};

const testimonials = [
  { quote: "FAS Coaching forandret måten jeg ser på meg selv og livet mitt. Etter noen samtaler hadde jeg verktøy jeg ikke visste jeg trengte.", name: "Maria H.", role: "Pedagog, Oslo", sessions: "6 samtaler" },
  { quote: "Utrolig varmt og profesjonelt. Coachen møtte meg akkurat der jeg var — ingen press, ingen fasitsvar.", name: "Thomas A.", role: "Bedriftsleder, Lørenskog", sessions: "10 timer" },
  { quote: "Datteren min blomstret opp etter coaching her. Anbefales på det varmeste til alle foreldre.", name: "Kari M.", role: "Mor til 14-åring", sessions: "5 samtaler" },
  { quote: "Jeg var skeptisk i starten, men allerede etter første time visste jeg at dette var noe for meg.", name: "Jonas B.", role: "IT-konsulent, Lørenskog", sessions: "8 samtaler" },
  { quote: "Som alenemor med krevende jobb trengte jeg hjelp til å finne balansen. FAS Coaching ga meg akkurat det.", name: "Lene S.", role: "Sykepleier, Skedsmo", sessions: "5 timer" },
  { quote: "Sønnen min (12 år) hadde det vanskelig sosialt. Etter noen måneder med coaching ser vi en stor positiv forandring.", name: "Erik og Tone V.", role: "Foreldre", sessions: "4 samtaler" },
];

export default function ReferanserPage() {
  return (
    <div className="bg-[#F4F9FA] pt-16">

      {/* HERO */}
      <section className="bg-[#0B3D4A] pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C8963A]" />
            <span className="font-[family-name:var(--font-dm)] text-[#3AA0B2] text-xs font-semibold tracking-[0.15em] uppercase">Referanser</span>
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(4rem,12vw,10rem)] text-white tracking-wide leading-none">
            EKTE
            <span className="text-[#C8963A]"> ENDRING</span>
          </h1>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-[#D0E5EA] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["100+","Klienter"],["5 år","Med coaching"],["98%","Anbefaler"],["★ 5.0","Snittrating"]].map(([v,l]) => (
            <div key={l}>
              <p className="font-[family-name:var(--font-bebas)] text-4xl text-[#1B6B7A] tracking-wide">{v}</p>
              <p className="font-[family-name:var(--font-dm)] text-[#5C7A84] text-sm mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CARDS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-[#D0E5EA] shadow-sm flex flex-col gap-4 hover:border-[#1B6B7A] hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={13} className="fill-[#C8963A] text-[#C8963A]" />)}
                </div>
                <Quote size={18} className="text-[#D0E5EA]" />
              </div>
              <p className="font-[family-name:var(--font-outfit)] text-base font-light italic text-[#0A1F27] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#EDF7FA]">
                <div>
                  <p className="font-[family-name:var(--font-dm)] font-semibold text-[#0A1F27] text-sm">{t.name}</p>
                  <p className="font-[family-name:var(--font-dm)] text-[#5C7A84] text-xs mt-0.5">{t.role}</p>
                </div>
                <span className="font-[family-name:var(--font-dm)] text-xs text-[#1B6B7A] bg-[#EDF7FA] px-3 py-1 rounded-full">{t.sessions}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-64 overflow-hidden">
        <Image src="/images/img4.jpg" alt="" fill className="object-cover" quality={75} />
        <div className="absolute inset-0 bg-[#0B3D4A]/65" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,4rem)] text-white tracking-wide text-center">
            Den beste investeringen du kan gjøre,{" "}
            <span className="text-[#C8963A]">er i deg selv.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl font-bold text-[#0A1F27]">
            Skriv din egen <span className="text-[#1B6B7A]">historie</span>
          </h2>
          <p className="font-[family-name:var(--font-dm)] text-[#5C7A84] text-base leading-relaxed">
            Start med en gratis intro-samtale og se hva coaching kan gjøre for deg.
          </p>
          <Link
            href="/timeplan"
            className="inline-flex items-center gap-2 bg-[#0B3D4A] text-white font-[family-name:var(--font-dm)] font-semibold px-8 py-4 rounded-xl hover:bg-[#1B6B7A] transition-colors duration-200 cursor-pointer text-sm"
          >
            Book gratis intro <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
