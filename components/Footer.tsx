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
    <footer className="bg-[#07303C] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-[#1B6B7A] flex items-center justify-center">
                <Image src="/images/logo6.png" alt="FAS Coaching" width={36} height={36} className="object-contain scale-90" />
              </div>
              <span className="font-[family-name:var(--font-outfit)] text-white font-semibold text-lg">FAS Coaching</span>
            </div>
            <p className="font-[family-name:var(--font-dm)] text-white/40 text-sm leading-relaxed max-w-sm">
              Profesjonell coaching i livsstil, karriere, relasjoner, sorg, idrett og ledelse — for voksne og barn i Lørenskog og digitalt.
            </p>
            <a
              href="https://www.facebook.com/Fascoaching.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/6 hover:bg-[#1B6B7A] text-white/60 hover:text-white font-[family-name:var(--font-dm)] text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
            >
              Facebook
            </a>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <p className="font-[family-name:var(--font-dm)] text-white/30 text-xs font-semibold tracking-[0.15em] uppercase">Sider</p>
            <ul className="space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-[family-name:var(--font-dm)] text-white/50 hover:text-white text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-[family-name:var(--font-dm)] text-white/30 text-xs font-semibold tracking-[0.15em] uppercase">Kontakt</p>
            <ul className="space-y-3">
              {[
                { icon: Phone, label: "+47 41 12 21 29", href: "tel:+4741122129" },
                { icon: Mail, label: "post@fas-coaching.no", href: "mailto:post@fas-coaching.no" },
                { icon: MapPin, label: "Skårerveien 12, Lørenskog", href: "#" },
                { icon: Clock, label: "Man–fre 09–17", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} className="flex items-center gap-2.5 group cursor-pointer">
                    <Icon size={13} className="text-[#3AA0B2] shrink-0" />
                    <span className="font-[family-name:var(--font-dm)] text-white/50 group-hover:text-white text-sm transition-colors duration-200">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-dm)] text-white/20 text-xs">
            © {new Date().getFullYear()} FAS Coaching · Skårerveien 12, Lørenskog
          </p>
          <Link
            href="/timeplan"
            className="font-[family-name:var(--font-dm)] text-xs bg-[#C8963A] text-white px-4 py-2 rounded-lg hover:bg-[#E8B96A] transition-colors cursor-pointer font-semibold"
          >
            Book gratis intro →
          </Link>
        </div>
      </div>
    </footer>
  );
}
