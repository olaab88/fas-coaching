import Image from "next/image";
import { MapPin, Mail, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — FAS Coaching",
  description:
    "Ta kontakt med FAS Coaching. Basert i Lørenskog — tilbyr også digitale samtaler. Send melding eller book en gratis intro-samtale.",
};

export default function KontaktPage() {
  return (
    <div className="bg-[#FAF8F2]">

      {/* HERO */}
      <section className="pt-36 pb-16 px-6 bg-[#F0EBE0]">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-quicksand)] text-[#7A8E3E] text-sm font-bold tracking-widest uppercase mb-4">
            Kontakt
          </p>
          <h1 className="font-[family-name:var(--font-caveat)] text-[clamp(3rem,7vw,6rem)] font-bold text-[#1A1A12] leading-[0.95] max-w-lg">
            La oss ta en<br />
            <span className="text-[#C8963A]">prat</span>
          </h1>
          <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-base leading-relaxed mt-5 max-w-md">
            Send en melding og jeg svarer innen én arbeidsdag. Du kan også booke direkte via timeplanen.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact form */}
          <div className="lg:col-span-7">
            <h2 className="font-[family-name:var(--font-caveat)] text-3xl font-bold text-[#1A1A12] mb-8">
              Send en melding
            </h2>
            <form className="space-y-5" action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="navn"
                    className="block font-[family-name:var(--font-quicksand)] text-xs font-bold text-[#4A4837] tracking-widest uppercase mb-2"
                  >
                    Navn
                  </label>
                  <input
                    type="text"
                    id="navn"
                    name="navn"
                    required
                    placeholder="Ditt fulle navn"
                    className="w-full px-4 py-3 rounded-xl border border-[#DDD5C0] bg-[#FAFAF2] font-[family-name:var(--font-quicksand)] text-sm text-[#1A1A12] placeholder:text-[#A8A48A] focus:outline-none focus:border-[#7A8E3E] focus:ring-2 focus:ring-[#7A8E3E]/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="epost"
                    className="block font-[family-name:var(--font-quicksand)] text-xs font-bold text-[#4A4837] tracking-widest uppercase mb-2"
                  >
                    E-post
                  </label>
                  <input
                    type="email"
                    id="epost"
                    name="epost"
                    required
                    placeholder="din@epost.no"
                    className="w-full px-4 py-3 rounded-xl border border-[#DDD5C0] bg-[#FAFAF2] font-[family-name:var(--font-quicksand)] text-sm text-[#1A1A12] placeholder:text-[#A8A48A] focus:outline-none focus:border-[#7A8E3E] focus:ring-2 focus:ring-[#7A8E3E]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="emne"
                  className="block font-[family-name:var(--font-quicksand)] text-xs font-bold text-[#4A4837] tracking-widest uppercase mb-2"
                >
                  Hva gjelder det?
                </label>
                <select
                  id="emne"
                  name="emne"
                  className="w-full px-4 py-3 rounded-xl border border-[#DDD5C0] bg-[#FAFAF2] font-[family-name:var(--font-quicksand)] text-sm text-[#1A1A12] focus:outline-none focus:border-[#7A8E3E] focus:ring-2 focus:ring-[#7A8E3E]/20 transition-all cursor-pointer"
                >
                  <option value="">Velg kategori...</option>
                  <option value="intro">Gratis intro-samtale</option>
                  <option value="individuell">Individuell coaching — voksen</option>
                  <option value="barn">Coaching for barn/unge</option>
                  <option value="gruppe">Gruppecoaching</option>
                  <option value="annet">Annet spørsmål</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="melding"
                  className="block font-[family-name:var(--font-quicksand)] text-xs font-bold text-[#4A4837] tracking-widest uppercase mb-2"
                >
                  Melding
                </label>
                <textarea
                  id="melding"
                  name="melding"
                  rows={6}
                  required
                  placeholder="Fortell litt om deg selv og hva du ønsker å jobbe med..."
                  className="w-full px-4 py-3 rounded-xl border border-[#DDD5C0] bg-[#FAFAF2] font-[family-name:var(--font-quicksand)] text-sm text-[#1A1A12] placeholder:text-[#A8A48A] focus:outline-none focus:border-[#7A8E3E] focus:ring-2 focus:ring-[#7A8E3E]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#7A8E3E] text-[#FAF8F2] font-[family-name:var(--font-quicksand)] font-bold py-4 rounded-2xl hover:bg-[#C8963A] transition-colors duration-300 cursor-pointer text-sm tracking-wide"
              >
                Send melding
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-6 lg:pt-14">
            <div className="bg-[#F0EBE0] rounded-2xl p-6 space-y-5 border border-[#DDD5C0]">
              <h3 className="font-[family-name:var(--font-caveat)] text-2xl font-bold text-[#1A1A12]">
                Kontaktinformasjon
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#9EAB5C]/20 rounded-lg shrink-0">
                    <MapPin size={16} className="text-[#7A8E3E]" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-quicksand)] font-bold text-[#1A1A12] text-sm">Adresse</p>
                    <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-sm mt-0.5">
                      Skårerveien 12<br />Lørenskog, Norge
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#9EAB5C]/20 rounded-lg shrink-0">
                    <Mail size={16} className="text-[#7A8E3E]" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-quicksand)] font-bold text-[#1A1A12] text-sm">E-post</p>
                    <a
                      href="mailto:post@fas-coaching.no"
                      className="font-[family-name:var(--font-quicksand)] text-[#4A4837] hover:text-[#7A8E3E] text-sm mt-0.5 transition-colors"
                    >
                      post@fas-coaching.no
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#9EAB5C]/20 rounded-lg shrink-0">
                    <Clock size={16} className="text-[#7A8E3E]" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-quicksand)] font-bold text-[#1A1A12] text-sm">Åpningstider</p>
                    <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-sm mt-0.5">
                      Man–fre: 09:00–17:00<br />Lørdag: etter avtale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick image */}
            <div className="h-44 rounded-2xl overflow-hidden relative">
              <Image src="/images/img5.jpg" alt="FAS Coaching lokale" fill className="object-cover" quality={80} />
            </div>

            {/* Response note */}
            <div className="bg-[#9EAB5C]/10 border border-[#9EAB5C]/30 rounded-2xl p-5">
              <p className="font-[family-name:var(--font-quicksand)] text-[#4A4837] text-sm leading-relaxed">
                <span className="font-bold text-[#7A8E3E]">Svartid:</span> Jeg svarer på alle henvendelser innen én arbeidsdag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-caveat)] text-3xl font-bold text-[#1A1A12] mb-6">
            Finn oss
          </h2>
          <div className="rounded-[1.75rem] overflow-hidden border border-[#DDD5C0] shadow-sm" style={{ height: "420px" }}>
            <iframe
              title="FAS Coaching kart — Skårerveien 12, Lørenskog"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.0!2d10.9450!3d59.9230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46417097b3c7e91d%3A0x1c3b5c5a5d3b5a5a!2sSkårerveien%2012%2C%202013%20Skjetten!5e0!3m2!1snb!2sno!4v1700000000000!5m2!1snb!2sno"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
