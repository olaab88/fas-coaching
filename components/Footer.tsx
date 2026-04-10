import Link from "next/link";
import { MapPin, Mail, Share2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#FAFAF9]">
              FAS Coaching
            </h2>
            <p className="font-[family-name:var(--font-quicksand)] text-[#A8A29E] text-sm leading-relaxed max-w-xs">
              Profesjonell livsstilscoaching for voksne og barn — for deg som ønsker å forme et eget perspektiv på livet.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#292524] hover:bg-[#CA8A04] text-[#A8A29E] hover:text-[#FAFAF9] transition-colors duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <Share2 size={16} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#292524] hover:bg-[#CA8A04] text-[#A8A29E] hover:text-[#FAFAF9] transition-colors duration-300 cursor-pointer"
                aria-label="Facebook"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#E8DDD0] tracking-wide uppercase text-sm">
              Navigasjon
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Hjem" },
                { href: "/om", label: "Mer om meg" },
                { href: "/timeplan", label: "Timeplan" },
                { href: "/referanser", label: "Referanser" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-quicksand)] text-[#A8A29E] hover:text-[#CA8A04] text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#E8DDD0] tracking-wide uppercase text-sm">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#CA8A04] mt-0.5 shrink-0" />
                <span className="font-[family-name:var(--font-quicksand)] text-[#A8A29E] text-sm">
                  Skårerveien 12<br />Lørenskog, Norge
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#CA8A04] shrink-0" />
                <a
                  href="mailto:post@fas-coaching.no"
                  className="font-[family-name:var(--font-quicksand)] text-[#A8A29E] hover:text-[#CA8A04] text-sm transition-colors duration-300"
                >
                  post@fas-coaching.no
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#292524] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-quicksand)] text-[#57534E] text-xs">
            © {new Date().getFullYear()} FAS Coaching. Alle rettigheter forbeholdt.
          </p>
          <p className="font-[family-name:var(--font-quicksand)] text-[#57534E] text-xs">
            Skårerveien 12, Lørenskog
          </p>
        </div>
      </div>
    </footer>
  );
}
