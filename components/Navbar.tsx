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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isHeroPage = pathname === "/";

  return (
    <>
      {/* ── Desktop nav ── */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 transition-all duration-500`}
      >
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
            scrolled || open
              ? "bg-[#FAF8F2]/95 backdrop-blur-md shadow-lg border border-[#DDD5C0]"
              : isHeroPage
              ? "bg-[#1A1A12]/30 backdrop-blur-sm border border-white/10"
              : "bg-[#FAF8F2]/95 backdrop-blur-md border border-[#DDD5C0]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-[#F0EBE0] flex items-center justify-center">
              <Image
                src="/images/logo6.png"
                alt="FAS Coaching logo"
                width={36}
                height={36}
                className="object-contain scale-90"
              />
            </div>
            <span
              className={`font-[family-name:var(--font-caveat)] text-xl font-semibold tracking-tight transition-colors duration-300 ${
                scrolled || !isHeroPage ? "text-[#1A1A12]" : "text-[#FAF8F2]"
              }`}
            >
              FAS Coaching
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-[family-name:var(--font-quicksand)] font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-[#7A8E3E] text-[#FAF8F2]"
                      : scrolled || !isHeroPage
                      ? "text-[#2D2C1F] hover:bg-[#F0EBE0]"
                      : "text-[#FAF8F2]/90 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/timeplan"
            className="hidden md:inline-flex items-center gap-2 bg-[#C8963A] text-[#FAF8F2] text-sm font-[family-name:var(--font-quicksand)] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#7A8E3E] transition-colors duration-300 cursor-pointer shrink-0"
          >
            Book time
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-xl transition-colors cursor-pointer ${
              scrolled || !isHeroPage ? "text-[#1A1A12] hover:bg-[#F0EBE0]" : "text-[#FAF8F2] hover:bg-white/10"
            }`}
            aria-label="Åpne meny"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile menu ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#1A1A12]/40 backdrop-blur-xs" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-[72px] left-4 right-4 bg-[#FAF8F2] rounded-2xl p-4 shadow-2xl border border-[#DDD5C0] transition-all duration-400 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-xl font-[family-name:var(--font-quicksand)] font-medium text-sm transition-colors duration-200 ${
                    pathname === link.href
                      ? "bg-[#7A8E3E] text-[#FAF8F2]"
                      : "text-[#2D2C1F] hover:bg-[#F0EBE0]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-[#DDD5C0]">
            <Link
              href="/timeplan"
              className="flex items-center justify-center bg-[#C8963A] text-[#FAF8F2] font-[family-name:var(--font-quicksand)] font-semibold px-5 py-3 rounded-xl hover:bg-[#7A8E3E] transition-colors duration-300 cursor-pointer text-sm"
            >
              Book en time
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
