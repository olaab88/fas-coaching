import Image from "next/image";
import { MapPin, Mail, Clock, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — FAS Coaching",
  description:
    "Ta kontakt med FAS Coaching. Basert i Lørenskog — tilbyr også digitale samtaler. Send melding eller book en gratis intro-samtale.",
};

export default function KontaktPage() {
  return (
    <div className="bg-[#FAFAF9]">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-16 px-6 bg-[#F5F0EB]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="font-[family-name:var(--font-quicksand)] text-[#CA8A04] text-sm font-medium tracking-widest uppercase">
              Kontakt
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-7xl font-light text-[#1C1917] leading-tight mt-3">
              La oss ta en<br />
              <em className="italic">prat</em>
            </h1>
            <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-base leading-relaxed mt-5 max-w-md">
              Send meg en melding, og jeg svarer innen én arbeidsdag. Du kan også ringe direkte eller booke en time via timeplanen.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#1C1917] mb-8">
                Send en melding
              </h2>
              <form className="space-y-5" action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="navn"
                      className="block font-[family-name:var(--font-quicksand)] text-xs font-semibold text-[#44403C] tracking-wide uppercase mb-2"
                    >
                      Navn
                    </label>
                    <input
                      type="text"
                      id="navn"
                      name="navn"
                      required
                      placeholder="Ditt fulle navn"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DDD0] bg-[#FAFAF9] font-[family-name:var(--font-quicksand)] text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="epost"
                      className="block font-[family-name:var(--font-quicksand)] text-xs font-semibold text-[#44403C] tracking-wide uppercase mb-2"
                    >
                      E-post
                    </label>
                    <input
                      type="email"
                      id="epost"
                      name="epost"
                      required
                      placeholder="din@epost.no"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DDD0] bg-[#FAFAF9] font-[family-name:var(--font-quicksand)] text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="emne"
                    className="block font-[family-name:var(--font-quicksand)] text-xs font-semibold text-[#44403C] tracking-wide uppercase mb-2"
                  >
                    Emne
                  </label>
                  <select
                    id="emne"
                    name="emne"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DDD0] bg-[#FAFAF9] font-[family-name:var(--font-quicksand)] text-sm text-[#1C1917] focus:outline-none focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] transition-colors cursor-pointer"
                  >
                    <option value="">Velg kategori...</option>
                    <option value="intro">Gratis intro-samtale</option>
                    <option value="individuell">Individuell coaching — voksen</option>
                    <option value="barn">Coaching for barn/unge</option>
                    <option value="gruppe">Gruppecoaching</option>
                    <option value="annet">Annet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="melding"
                    className="block font-[family-name:var(--font-quicksand)] text-xs font-semibold text-[#44403C] tracking-wide uppercase mb-2"
                  >
                    Melding
                  </label>
                  <textarea
                    id="melding"
                    name="melding"
                    rows={6}
                    required
                    placeholder="Fortell litt om deg selv og hva du ønsker å jobbe med..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DDD0] bg-[#FAFAF9] font-[family-name:var(--font-quicksand)] text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1C1917] text-[#FAFAF9] font-[family-name:var(--font-quicksand)] font-semibold py-4 rounded-xl hover:bg-[#CA8A04] transition-colors duration-300 cursor-pointer text-sm"
                >
                  Send melding
                </button>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8 lg:pt-14">
              {/* Contact info */}
              <div className="space-y-5">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#1C1917]">
                  Kontaktinformasjon
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#CA8A04]/10 rounded-lg shrink-0">
                      <MapPin size={16} className="text-[#CA8A04]" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-quicksand)] font-semibold text-[#1C1917] text-sm">
                        Adresse
                      </p>
                      <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-sm mt-0.5">
                        Skårerveien 12<br />Lørenskog, Norge
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#CA8A04]/10 rounded-lg shrink-0">
                      <Mail size={16} className="text-[#CA8A04]" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-quicksand)] font-semibold text-[#1C1917] text-sm">
                        E-post
                      </p>
                      <a
                        href="mailto:post@fas-coaching.no"
                        className="font-[family-name:var(--font-quicksand)] text-[#44403C] hover:text-[#CA8A04] text-sm mt-0.5 transition-colors"
                      >
                        post@fas-coaching.no
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#CA8A04]/10 rounded-lg shrink-0">
                      <Clock size={16} className="text-[#CA8A04]" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-quicksand)] font-semibold text-[#1C1917] text-sm">
                        Åpningstider
                      </p>
                      <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-sm mt-0.5">
                        Man–fre: 09:00–17:00<br />Lørdag: etter avtale
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-56 rounded-2xl overflow-hidden">
                <Image
                  src="/images/img5.jpg"
                  alt="FAS Coaching lokale"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Response time note */}
              <div className="bg-[#F5F0EB] rounded-2xl p-5 border border-[#E8DDD0]">
                <p className="font-[family-name:var(--font-quicksand)] text-[#44403C] text-sm leading-relaxed">
                  <span className="font-semibold">Svartid:</span> Jeg svarer på alle henvendelser innen én arbeidsdag. For rask booking, bruk{" "}
                  <a href="/timeplan" className="text-[#CA8A04] hover:underline font-semibold">
                    timeplanen
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
