import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanser — FAS Coaching",
  description: "Les hva klienter sier om coaching med Finn Arne Sivertsen. Ekte erfaringer fra folk i alle livssituasjoner.",
};

const testimonials = [
  {
    name: "Jon Henning",
    role: "42 år",
    sessions: "4 måneder",
    quote: "Finn Arne er en mann som virkelig får deg til å finne ut av hvem som er viktigst i livet og hva som er viktigst ved å lytte hjerte og følelser, ikke via hjerne og mekanismer som er satt i et system. Han finner dine behov og avdekker hva du trenger. Jeg hadde ikke kommet dit jeg er i dag på 4 mnd uten Finn Arnes hjelp og opplever nå min beste tid i livet i en alder av 42 år.",
  },
  {
    name: "Tore",
    role: "38 år",
    sessions: "3 timer",
    quote: "Når jeg kom til deg hadde jeg få eller ingen positive tanker. Var sint og skylte på omgivelser og andre rundt meg. Lei av livet og meg selv, lite sosial og murte meg inne. Du fikk meg til å gå i meg selv og vi fant raskt noen av årsakene til mine problemer. Nå smiler livet igjen og er sosial, positiv og har fått meg kjæreste. Dette kan varmt anbefales. Tusen takk.",
  },
  {
    name: "Per",
    role: "40 år",
    sessions: "Flere samtaler",
    quote: "Han er ikke belærende, ikke instruerende, har ikke alltid svaret, men er meget god til å stille spørsmål. Gjennom gode samtaler og dialog leder han meg gjennom nye måter å se ting på, og via gode spørsmål ender jeg oftest opp med svaret selv. Finn Arne oppklarte raskt at det er en lettere og mer realistisk oppgave å endre på seg selv fremfor å tro en skal lykkes med å endre verden. Stor takk for kunnskap og profesjonell hjelp.",
  },
  {
    name: "Frode",
    role: "49 år — bedriftsleder",
    sessions: "Krisetid",
    quote: "På få dagers varsel hadde vi igjen gode samtaler og begynte å nøste sammen. På rekord tid klarte han å få meg til å innse at det faktisk ikke var noen som hadde alle svarene. Han får meg til å tenke selv og støtter, dytter meg i front og er selv usynlig støtte og sørger for at vi har fremdrift og følger planen. Takk for det jeg klart ser som 'avgjørende bidrag' for meg i noen uker preget av rådløshet.",
  },
];

const stats = [
  { value: "100+", label: "Klienter" },
  { value: "5 år", label: "Erfaring" },
  { value: "98%", label: "Anbefaler" },
  { value: "★ 5.0", label: "Snittrating" },
];

export default function ReferanserPage() {
  return (
    <div className="bg-[#F8F7F4] pt-16">

      {/* HERO */}
      <section className="py-24 px-6 border-b border-[#E2DDD7]">
        <div className="max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Referanser
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,8vw,7rem)] text-[#111110] font-bold leading-[1.0]">
            Ekte<br />
            <span className="text-[#002850]">endring</span>
          </h1>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-[#E2DDD7] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#111110]">{value}</p>
              <p className="font-[family-name:var(--font-dm)] text-[#1A1A1A] text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CARDS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-[#E2DDD7] hover:border-[#64C8C8] hover:shadow-md transition-all duration-200 flex flex-col gap-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} size={12} className="fill-[#64C8C8] text-[#64C8C8]" />)}
              </div>
              <p className="font-[family-name:var(--font-dm)] text-sm text-[#2C2C2C] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#F8F7F4]">
                <div>
                  <p className="font-[family-name:var(--font-dm)] font-semibold text-[#111110] text-sm">{t.name}</p>
                  <p className="font-[family-name:var(--font-dm)] text-[#1A1A1A] text-xs mt-0.5">{t.role}</p>
                </div>
                <span className="font-[family-name:var(--font-dm)] text-xs text-[#1A1A1A] bg-[#F8F7F4] border border-[#E2DDD7] px-3 py-1 rounded-full">
                  {t.sessions}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-64 overflow-hidden">
        <Image src="/images/site_img_a.jpg" alt="" fill className="object-cover" quality={75} />
        <div className="absolute inset-0 bg-[#141210]/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-white text-center max-w-3xl leading-tight">
            Den beste investeringen du kan gjøre,{" "}
            <span className="text-[#64C8C8]">er i deg selv.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#111110]">
            Skriv din egen <span className="text-[#002850]">historie</span>
          </h2>
          <p className="font-[family-name:var(--font-dm)] text-[#1A1A1A] text-base leading-relaxed">
            Start med en gratis intro-samtale og se hva coaching kan gjøre for deg.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-8 py-4 rounded-full hover:bg-[#002850] transition-colors duration-200 cursor-pointer text-sm"
          >
            Book gratis intro <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
