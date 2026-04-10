import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const nav = [
  { href: "/", label: "Hjem" },
  { href: "/om", label: "Om meg" },
  { href: "/timeplan", label: "Timeplan" },
  { href: "/referanser", label: "Referanser" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#141210] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/30">

          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <Image src="/images/logo_real.png" alt="FAS Coaching" width={32} height={32} className="object-contain" />
              </div>
              <span className="font-[family-name:var(--font-dm)] text-white font-semibold text-sm">FAS Coaching</span>
            </div>
            <p className="font-[family-name:var(--font-dm)] text-white/85 text-sm leading-relaxed max-w-sm">
              Profesjonell coaching i livsstil, karriere, relasjoner, sorg, idrett og ledelse — for voksne og barn i Lørenskog og digitalt.
            </p>
            <a
              href="https://www.facebook.com/Fascoaching.no/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FAS Coaching på Facebook"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-[#1877F2] border border-white/20 hover:border-[#1877F2] transition-all duration-200 cursor-pointer group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/80 group-hover:text-white transition-colors">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <p className="font-[family-name:var(--font-dm)] text-white/80 text-xs font-semibold tracking-[0.15em] uppercase">Sider</p>
            <ul className="space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-[family-name:var(--font-dm)] text-white/85 hover:text-white text-sm transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-[family-name:var(--font-dm)] text-white/80 text-xs font-semibold tracking-[0.15em] uppercase">Kontakt</p>
            <ul className="space-y-3">
              {[
                { icon: Phone, label: "+47 906 90 635", href: "tel:+4790690635" },
                { icon: Mail, label: "finnarnes@yahoo.no", href: "mailto:finnarnes@yahoo.no" },
                { icon: MapPin, label: "Skårerveien 12, Lørenskog", href: "#" },
                { icon: Clock, label: "Man–fre 09–17", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} className="flex items-center gap-2.5 group cursor-pointer">
                    <Icon size={12} className="text-[#64C8C8] shrink-0" />
                    <span className="font-[family-name:var(--font-dm)] text-white/85 group-hover:text-white text-sm transition-colors duration-150">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <p className="font-[family-name:var(--font-dm)] text-white/80 text-xs">
              © {new Date().getFullYear()} FAS Coaching · Finn Arne Sivertsen · Orgnr. 812977652
            </p>
            <Link href="/personvern" className="font-[family-name:var(--font-dm)] text-white/50 hover:text-white/80 text-xs transition-colors duration-150">
              Personvern
            </Link>
          </div>
          <Link
            href="/kontakt"
            className="font-[family-name:var(--font-dm)] text-xs bg-[#002850] text-white px-5 py-2 rounded-full hover:bg-[#143C64] transition-colors cursor-pointer font-medium"
          >
            Book gratis intro →
          </Link>
        </div>
      </div>
    </footer>
  );
}
