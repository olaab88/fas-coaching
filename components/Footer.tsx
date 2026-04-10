import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Clock, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A12] text-[#FAF8F2]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#2D2C1F] flex items-center justify-center">
                <Image src="/images/logo6.png" alt="FAS Coaching" width={40} height={40} className="object-contain scale-90" />
              </div>
              <span className="font-[family-name:var(--font-caveat)] text-2xl font-bold text-[#FAF8F2]">
                FAS Coaching
              </span>
            </div>
            <p className="font-[family-name:var(--font-quicksand)] text-[#6B6852] text-sm leading-relaxed max-w-xs">
              Profesjonell livsstilscoaching for voksne og barn — for deg som ønsker å forme et eget perspektiv på livet.
            </p>
            {/* Social pills */}
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/Fascoaching.no/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#2D2C1F] hover:bg-[#7A8E3E] text-[#6B6852] hover:text-[#FAF8F2] transition-colors duration-300 cursor-pointer font-[family-name:var(--font-quicksand)] text-xs font-semibold"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-5">
            <h3 className="font-[family-name:var(--font-quicksand)] text-xs font-bold tracking-widest uppercase text-[#6B6852]">
              Navigasjon
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Hjem" },
                { href: "/om", label: "Om meg" },
                { href: "/timeplan", label: "Timeplan & Priser" },
                { href: "/referanser", label: "Referanser" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-quicksand)] text-[#6B6852] hover:text-[#9EAB5C] text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="font-[family-name:var(--font-quicksand)] text-xs font-bold tracking-widest uppercase text-[#6B6852]">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#9EAB5C] mt-0.5 shrink-0" />
                <span className="font-[family-name:var(--font-quicksand)] text-[#6B6852] text-sm">
                  Skårerveien 12<br />Lørenskog, Norge
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#9EAB5C] shrink-0" />
                <a
                  href="tel:+4741122129"
                  className="font-[family-name:var(--font-quicksand)] text-[#6B6852] hover:text-[#9EAB5C] text-sm transition-colors"
                >
                  +47 41 12 21 29
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#9EAB5C] shrink-0" />
                <a
                  href="mailto:post@fas-coaching.no"
                  className="font-[family-name:var(--font-quicksand)] text-[#6B6852] hover:text-[#9EAB5C] text-sm transition-colors"
                >
                  post@fas-coaching.no
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#9EAB5C] mt-0.5 shrink-0" />
                <span className="font-[family-name:var(--font-quicksand)] text-[#6B6852] text-sm">
                  Man–fre 09–17<br />Lørdag etter avtale
                </span>
              </li>
            </ul>

            <Link
              href="/timeplan"
              className="inline-flex items-center gap-2 bg-[#9EAB5C] text-[#FAF8F2] font-[family-name:var(--font-quicksand)] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#7A8E3E] transition-colors duration-300 cursor-pointer"
            >
              Book gratis intro
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#2D2C1F] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-quicksand)] text-[#3D3C2C] text-xs">
            © {new Date().getFullYear()} FAS Coaching · Skårerveien 12, Lørenskog
          </p>
          <p className="font-[family-name:var(--font-quicksand)] text-[#3D3C2C] text-xs">
            Alle rettigheter forbeholdt
          </p>
        </div>
      </div>
    </footer>
  );
}
