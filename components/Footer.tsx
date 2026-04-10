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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <Image src="/images/logo_real.png" alt="FAS Coaching" width={32} height={32} className="object-contain" />
              </div>
              <span className="font-[family-name:var(--font-dm)] text-white font-semibold text-sm">FAS Coaching</span>
            </div>
            <p className="font-[family-name:var(--font-dm)] text-white/40 text-sm leading-relaxed max-w-sm">
              Profesjonell coaching i livsstil, karriere, relasjoner, sorg, idrett og ledelse — for voksne og barn i Lørenskog og digitalt.
            </p>
            <a
              href="https://www.facebook.com/Fascoaching.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white font-[family-name:var(--font-dm)] text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer border border-white/8"
            >
              Facebook
            </a>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <p className="font-[family-name:var(--font-dm)] text-white/25 text-xs font-semibold tracking-[0.15em] uppercase">Sider</p>
            <ul className="space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-[family-name:var(--font-dm)] text-white/45 hover:text-white text-sm transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-[family-name:var(--font-dm)] text-white/25 text-xs font-semibold tracking-[0.15em] uppercase">Kontakt</p>
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
                    <span className="font-[family-name:var(--font-dm)] text-white/45 group-hover:text-white text-sm transition-colors duration-150">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-dm)] text-white/20 text-xs">
            © {new Date().getFullYear()} FAS Coaching · Finn Arne Sivertsen · Orgnr. 812977652
          </p>
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
