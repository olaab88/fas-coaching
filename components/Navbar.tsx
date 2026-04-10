"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/om", label: "Om meg" },
  { href: "/timeplan", label: "Timeplan" },
  { href: "/referanser", label: "Referanser" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2DDD7]"
            : "bg-white border-b border-[#E2DDD7]"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <Image src="/images/logo_real.png" alt="FAS Coaching" width={32} height={32} className="object-contain" />
            </div>
            <span className="font-[family-name:var(--font-dm)] text-[#111110] font-semibold text-sm tracking-tight">
              FAS Coaching
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-4 py-2 rounded-lg font-[family-name:var(--font-dm)] text-sm transition-colors duration-150 ${
                    pathname === l.href
                      ? "text-[#111110] font-medium"
                      : "text-[#6B6860] hover:text-[#111110]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/kontakt"
            className="hidden md:inline-flex items-center gap-2 bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium text-sm px-5 py-2.5 rounded-full hover:bg-[#002850] transition-colors duration-200 cursor-pointer"
          >
            Book gratis intro
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-[#6B6860] hover:text-[#111110] hover:bg-[#EFECEA] transition-colors cursor-pointer"
            aria-label="Meny"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/20" onClick={() => setOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 bg-white border-b border-[#E2DDD7] shadow-lg transition-all duration-200 ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-3 rounded-lg font-[family-name:var(--font-dm)] text-sm transition-colors ${
                  pathname === l.href
                    ? "text-[#111110] font-medium bg-[#EFECEA]"
                    : "text-[#6B6860] hover:text-[#111110] hover:bg-[#F8F7F4]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-2 px-4 py-3 rounded-full bg-[#111110] text-white font-[family-name:var(--font-dm)] font-medium text-sm text-center hover:bg-[#002850] transition-colors cursor-pointer"
            >
              Book gratis intro
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
