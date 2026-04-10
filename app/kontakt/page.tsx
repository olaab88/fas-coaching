import Image from "next/image";
import { MapPin, Mail, Clock, Phone, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — FAS Coaching",
  description: "Ta kontakt med FAS Coaching. Basert i Lørenskog — tilbyr også digitale samtaler. Send melding eller book en gratis intro-samtale.",
};

export default function KontaktPage() {
  return (
    <div className="bg-[#F4F9FA] pt-16">

      {/* HERO */}
      <section className="bg-[#0B3D4A] pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C8963A]" />
            <span className="font-[family-name:var(--font-dm)] text-[#3AA0B2] text-xs font-semibold tracking-[0.15em] uppercase">Kontakt</span>
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(4rem,12vw,10rem)] text-white tracking-wide leading-none">
            LA OSS TA EN
            <span className="text-[#C8963A]"> PRAT</span>
          </h1>
          <p className="font-[family-name:var(--font-dm)] text-white/50 text-base mt-4 max-w-lg leading-relaxed">
            Send en melding og jeg svarer innen én arbeidsdag. Eller ring direkte — jeg er tilgjengelig mandag til fredag.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact form */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#C8963A]" />
              <span className="font-[family-name:var(--font-dm)] text-[#1B6B7A] text-xs font-semibold tracking-[0.15em] uppercase">Skriv til meg</span>
            </div>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-[#0A1F27] mb-8">
              Send en melding
            </h2>

            <form className="space-y-5" action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="navn" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#2C4A55] tracking-[0.12em] uppercase mb-2">
                    Navn
                  </label>
                  <input
                    type="text"
                    id="navn"
                    name="navn"
                    required
                    placeholder="Ditt fulle navn"
                    className="w-full px-4 py-3 rounded-xl border border-[#D0E5EA] bg-white font-[family-name:var(--font-dm)] text-sm text-[#0A1F27] placeholder:text-[#8AACB8] focus:outline-none focus:border-[#1B6B7A] focus:ring-2 focus:ring-[#1B6B7A]/15 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="epost" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#2C4A55] tracking-[0.12em] uppercase mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="epost"
                    name="epost"
                    required
                    placeholder="din@epost.no"
                    className="w-full px-4 py-3 rounded-xl border border-[#D0E5EA] bg-white font-[family-name:var(--font-dm)] text-sm text-[#0A1F27] placeholder:text-[#8AACB8] focus:outline-none focus:border-[#1B6B7A] focus:ring-2 focus:ring-[#1B6B7A]/15 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="emne" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#2C4A55] tracking-[0.12em] uppercase mb-2">
                  Hva gjelder det?
                </label>
                <select
                  id="emne"
                  name="emne"
                  className="w-full px-4 py-3 rounded-xl border border-[#D0E5EA] bg-white font-[family-name:var(--font-dm)] text-sm text-[#0A1F27] focus:outline-none focus:border-[#1B6B7A] focus:ring-2 focus:ring-[#1B6B7A]/15 transition-all cursor-pointer"
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
                <label htmlFor="melding" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#2C4A55] tracking-[0.12em] uppercase mb-2">
                  Melding
                </label>
                <textarea
                  id="melding"
                  name="melding"
                  rows={6}
                  required
                  placeholder="Fortell litt om deg selv og hva du ønsker å jobbe med..."
                  className="w-full px-4 py-3 rounded-xl border border-[#D0E5EA] bg-white font-[family-name:var(--font-dm)] text-sm text-[#0A1F27] placeholder:text-[#8AACB8] focus:outline-none focus:border-[#1B6B7A] focus:ring-2 focus:ring-[#1B6B7A]/15 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#0B3D4A] text-white font-[family-name:var(--font-dm)] font-semibold px-8 py-4 rounded-xl hover:bg-[#1B6B7A] transition-colors duration-200 cursor-pointer text-sm"
              >
                Send melding <ArrowRight size={14} />
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-6 lg:pt-16">

            <div className="bg-white rounded-2xl p-7 border border-[#D0E5EA] shadow-sm space-y-5">
              <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[#0A1F27]">
                Kontaktinformasjon
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Telefon", value: "+47 41 12 21 29", href: "tel:+4741122129" },
                  { icon: Mail, label: "E-post", value: "post@fas-coaching.no", href: "mailto:post@fas-coaching.no" },
                  { icon: MapPin, label: "Adresse", value: "Skårerveien 12, Lørenskog", href: "#" },
                  { icon: Clock, label: "Åpningstider", value: "Man–fre 09:00–17:00", href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#EDF7FA] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-[#1B6B7A]" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-dm)] font-semibold text-[#0A1F27] text-xs tracking-wide uppercase">{label}</p>
                      <a
                        href={href}
                        className="font-[family-name:var(--font-dm)] text-[#2C4A55] hover:text-[#1B6B7A] text-sm mt-0.5 transition-colors leading-relaxed"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-44 rounded-2xl overflow-hidden relative">
              <Image src="/images/img3.jpg" alt="FAS Coaching" fill className="object-cover" quality={80} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D4A]/60 to-transparent" />
            </div>

            <div className="bg-[#EDF7FA] border border-[#D0E5EA] rounded-xl p-5">
              <p className="font-[family-name:var(--font-dm)] text-[#2C4A55] text-sm leading-relaxed">
                <span className="font-semibold text-[#1B6B7A]">Svartid:</span> Jeg svarer på alle henvendelser innen én arbeidsdag.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C8963A]" />
            <span className="font-[family-name:var(--font-dm)] text-[#1B6B7A] text-xs font-semibold tracking-[0.15em] uppercase">Finn oss</span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#D0E5EA] shadow-sm" style={{ height: "420px" }}>
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
