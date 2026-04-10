import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mer om meg — FAS Coaching",
  description:
    "Lær mer om livsstilscoach bak FAS Coaching. Profesjonell erfaring, verdier og tilnærming til coaching for voksne og barn.",
};

const values = [
  "Trygghet og tillit i alle samtaler",
  "Nysgjerrighet fremfor fasitsvar",
  "Respekt for din individuelle prosess",
  "Verktøy du faktisk kan bruke i hverdagen",
  "Helhetstenkning — kropp, sinn og relasjoner",
];

const certifications = [
  "Sertifisert livsstilscoach",
  "Spesialisering innen barn og unge",
  "Kurs i motiverende samtale (MI)",
  "Videreutdanning i positiv psykologi",
];

export default function OmPage() {
  return (
    <div className="bg-[#FAFAF9]">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-20 px-6 bg-[#F5F0EB]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="font-[family-name:var(--font-quicksand)] text-[#CA8A04] text-sm font-medium tracking-widest uppercase">
              Mer om meg
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-7xl font-light text-[#1C1917] leading-tight mt-3">
              Hvem er jeg, og<br />
              <em className="italic">hvorfor coaching?</em>
            </h1>
          </div>
        </div>
      </section>

      {/* ── MAIN ABOUT ───────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Portrait */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] relative">
                  <Image
                    src="/images/img2.jpg"
                    alt="FAS Coaching — coach portrett"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#CA8A04] rounded-2xl px-6 py-5">
                  <p className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#FAFAF9]">5+</p>
                  <p className="font-[family-name:var(--font-quicksand)] text-[#FAFAF9]/80 text-xs mt-0.5">år med coaching</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-6 lg:pt-4">
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#1C1917] leading-tight">
                Min reise inn i coaching
              </h2>
              <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-base leading-relaxed">
                Jeg begynte å coache fordi jeg selv opplevde hva det vil si å stå fast i livet — uten verktøy, uten retning og uten noen som virkelig lyttet. Den erfaringen ble drivkraften min.
              </p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-base leading-relaxed">
                I dag hjelper jeg voksne og barn til å finne klarheten og roen de trenger for å leve et liv som faktisk føles riktig for dem. Ikke etter andres oppskrift — men etter sine egne verdier og ønsker.
              </p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-base leading-relaxed">
                Jeg er basert i Lørenskog, men tilbyr også coaching digitalt for deg som ønsker det. Alle samtaler holdes i konfidensielle omgivelser med respekt for din prosess.
              </p>

              {/* Values */}
              <div className="pt-4">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#1C1917] mb-4">
                  Mine verdier
                </h3>
                <ul className="space-y-3">
                  {values.map((v, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#CA8A04] shrink-0" />
                      <span className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-sm">
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────── */}
      <section className="py-20 px-6 bg-[#1C1917]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-[family-name:var(--font-quicksand)] text-[#CA8A04] text-sm font-medium tracking-widest uppercase">
                Kompetanse
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#FAFAF9] leading-tight mt-2">
                Sertifiseringer &<br />utdanning
              </h2>
              <p className="font-[family-name:var(--font-quicksand)] text-[#A8A29E] text-sm leading-relaxed mt-4 max-w-sm">
                Solid faglig fundament kombinert med mange år i praksis — for at du skal få den beste oppfølgingen mulig.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((c, i) => (
                <div key={i} className="bg-[#292524] rounded-xl p-5 border border-[#44403C]">
                  <span className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#CA8A04]">
                    0{i + 1}
                  </span>
                  <p className="font-[family-name:var(--font-quicksand)] text-[#D6D3D1] text-sm mt-2 leading-snug">
                    {c}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE + QUOTE ─────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden">
              <Image src="/images/img5.jpg" alt="Coaching i praksis" fill className="object-cover" />
            </div>
            <div className="space-y-6 lg:pl-8">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light italic text-[#1C1917] leading-snug">
                &ldquo;Coaching handler ikke om å gi svar — det handler om å hjelpe deg å finne dine egne.&rdquo;
              </p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-sm leading-relaxed">
                Hver person jeg møter er unik. Det finnes ingen universaloppskrift, men det finnes alltid et veikart — og vi finner det sammen.
              </p>
              <Link
                href="/timeplan"
                className="inline-flex items-center gap-2 bg-[#1C1917] text-[#FAFAF9] font-[family-name:var(--font-quicksand)] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#CA8A04] transition-colors duration-300 cursor-pointer"
              >
                Book en samtale
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
