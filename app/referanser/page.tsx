import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
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

const stats = [
  { value: "100+", label: "Klienter" },
  { value: "5 år", label: "Med coaching" },
  { value: "98%", label: "Anbefaler" },
  { value: "★ 5.0", label: "Snittrating" },
];

export default function ReferanserPage() {
  return (
    <div className="bg-[#F8F7F4] pt-16">

      {/* HERO */}
      <section className="py-24 px-6 border-b border-[#E2DDD7]">
        <div className="max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-dm)] text-[#C8963A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Referanser
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,8vw,7rem)] text-[#111110] font-bold leading-[1.0]">
            Ekte<br />
            <em>endring</em>
          </h1>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-[#E2DDD7] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#111110]">{value}</p>
              <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CARDS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-[#E2DDD7] hover:border-[#C8963A] hover:shadow-md transition-all duration-200 flex flex-col gap-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} size={12} className="fill-[#C8963A] text-[#C8963A]" />)}
              </div>
              <p className="font-[family-name:var(--font-playfair)] text-base italic font-light text-[#111110] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#F8F7F4]">
                <div>
                  <p className="font-[family-name:var(--font-dm)] font-semibold text-[#111110] text-sm">{t.name}</p>
                  <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-xs mt-0.5">{t.role}</p>
                </div>
                <span className="font-[family-name:var(--font-dm)] text-xs text-[#6B6860] bg-[#F8F7F4] border border-[#E2DDD7] px-3 py-1 rounded-full">
                  {t.sessions}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-64 overflow-hidden">
        <Image src="/images/img4.jpg" alt="" fill className="object-cover" quality={75} />
        <div className="absolute inset-0 bg-[#141210]/65" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,4vw,3.5rem)] font-bold italic text-white text-center max-w-3xl leading-tight">
            Den beste investeringen du kan gjøre,{" "}
            <em className="text-[#C8963A] not-italic font-bold">er i deg selv.</em>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#111110]">
            Skriv din egen <em>historie</em>
          </h2>
          <p className="font-[family-name:var(--font-dm)] text-[#6B6860] text-base leading-relaxed">
            Start med en gratis intro-samtale og se hva coaching kan gjøre for deg.
          </p>
          <Link
            href="/timeplan"
            className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-8 py-4 rounded-full hover:bg-[#C8963A] transition-colors duration-200 cursor-pointer text-sm"
          >
            Book gratis intro <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
