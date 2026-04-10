"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Hjem" },
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
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B3D4A]/98 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-[#0B3D4A]"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#1B6B7A] flex items-center justify-center shrink-0">
              <Image src="/images/logo6.png" alt="FAS Coaching" width={32} height={32} className="object-contain scale-90" />
            </div>
            <span className="font-[family-name:var(--font-outfit)] text-white font-semibold text-base tracking-tight group-hover:text-[#3AA0B2] transition-colors duration-200">
              FAS Coaching
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-4 py-2 rounded-lg font-[family-name:var(--font-dm)] text-sm font-medium transition-all duration-200 ${
                    pathname === l.href
                      ? "bg-white/10 text-white"
                      : "text-white/65 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/timeplan"
            className="hidden md:inline-flex items-center gap-2 bg-[#C8963A] text-white font-[family-name:var(--font-dm)] font-semibold text-sm px-5 py-2 rounded-lg hover:bg-[#E8B96A] transition-colors duration-200 cursor-pointer"
          >
            Book time
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Meny"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 bg-[#0B3D4A] border-t border-white/10 shadow-2xl transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-3 rounded-lg font-[family-name:var(--font-dm)] text-sm font-medium transition-colors ${
                  pathname === l.href ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/8 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/timeplan"
              className="mt-2 px-4 py-3 rounded-lg bg-[#C8963A] text-white font-[family-name:var(--font-dm)] font-semibold text-sm text-center hover:bg-[#E8B96A] transition-colors cursor-pointer"
            >
              Book en time
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
