import Image from "next/image";
import { MapPin, Mail, Clock, Phone, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — FAS Coaching",
  description: "Ta kontakt med FAS Coaching. Basert i Lørenskog — tilbyr også digitale samtaler.",
};

export default function KontaktPage() {
  return (
    <div className="bg-[#F8F7F4] pt-16">

      {/* HERO */}
      <section className="py-24 px-6 border-b border-[#E2DDD7]">
        <div className="max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Kontakt
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,8vw,7rem)] text-[#111110] font-bold leading-[1.0]">
            La oss ta en<br />
            <span className="text-[#002850]">prat</span>
          </h1>
          <p className="font-[family-name:var(--font-dm)] text-[#111110] text-[1rem] mt-6 max-w-lg leading-relaxed">
            Send en melding og jeg svarer innen én arbeidsdag. Eller ring direkte.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#111110] mb-8">
              Send en melding
            </h2>
            <form className="space-y-5" action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="navn" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#111110] tracking-[0.1em] uppercase mb-2">
                    Navn
                  </label>
                  <input
                    type="text" id="navn" name="navn" required
                    placeholder="Ditt fulle navn"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2DDD7] bg-white font-[family-name:var(--font-dm)] text-sm text-[#111110] placeholder:text-[#B8B4AE] focus:outline-none focus:border-[#111110] focus:ring-2 focus:ring-[#111110]/8 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="epost" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#111110] tracking-[0.1em] uppercase mb-2">
                    E-post
                  </label>
                  <input
                    type="email" id="epost" name="epost" required
                    placeholder="din@epost.no"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2DDD7] bg-white font-[family-name:var(--font-dm)] text-sm text-[#111110] placeholder:text-[#B8B4AE] focus:outline-none focus:border-[#111110] focus:ring-2 focus:ring-[#111110]/8 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="emne" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#111110] tracking-[0.1em] uppercase mb-2">
                  Hva gjelder det?
                </label>
                <select
                  id="emne" name="emne"
                  className="w-full px-4 py-3 rounded-xl border border-[#E2DDD7] bg-white font-[family-name:var(--font-dm)] text-sm text-[#111110] focus:outline-none focus:border-[#111110] focus:ring-2 focus:ring-[#111110]/8 transition-all cursor-pointer"
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
                <label htmlFor="melding" className="block font-[family-name:var(--font-dm)] text-xs font-semibold text-[#111110] tracking-[0.1em] uppercase mb-2">
                  Melding
                </label>
                <textarea
                  id="melding" name="melding" rows={6} required
                  placeholder="Fortell litt om deg selv og hva du ønsker å jobbe med..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E2DDD7] bg-white font-[family-name:var(--font-dm)] text-sm text-[#111110] placeholder:text-[#B8B4AE] focus:outline-none focus:border-[#111110] focus:ring-2 focus:ring-[#111110]/8 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium px-8 py-4 rounded-full hover:bg-[#002850] transition-colors duration-200 cursor-pointer text-sm"
              >
                Send melding <ArrowRight size={14} />
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-5 lg:pt-16">
            <div className="bg-white rounded-2xl p-7 border border-[#E2DDD7] space-y-5">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#111110]">
                Kontaktinformasjon
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Telefon", value: "+47 906 90 635", href: "tel:+4790690635" },
                  { icon: Mail, label: "E-post", value: "finnarnes@yahoo.no", href: "mailto:finnarnes@yahoo.no" },
                  { icon: MapPin, label: "Adresse", value: "Skårerveien 12, 1470 Lørenskog", href: "#" },
                  { icon: Clock, label: "Åpningstider", value: "Man–fre 09:00–17:00", href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#F8F7F4] border border-[#E2DDD7] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} className="text-[#111110]" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-dm)] font-semibold text-[#111110] text-xs tracking-wide uppercase">{label}</p>
                      <a href={href} className="font-[family-name:var(--font-dm)] text-[#111110] hover:text-[#111110] text-sm mt-0.5 transition-colors leading-relaxed">
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-44 rounded-2xl overflow-hidden relative">
              <Image src="/images/img3.jpg" alt="FAS Coaching" fill className="object-cover" quality={80} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/50 to-transparent" />
            </div>

            <div className="bg-[#E8F7F7] border border-[#A8E0E0] rounded-xl p-5">
              <p className="font-[family-name:var(--font-dm)] text-[#00617A] text-sm leading-relaxed">
                <span className="font-semibold">Svartid:</span> Jeg svarer på alle henvendelser innen én arbeidsdag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-dm)] text-[#64C8C8] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Finn oss
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#E2DDD7]" style={{ height: "420px" }}>
            <iframe
              title="FAS Coaching kart"
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
