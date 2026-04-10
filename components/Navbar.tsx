"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/om", label: "Mer om meg" },
  { href: "/timeplan", label: "Timeplan" },
  { href: "/referanser", label: "Referanser" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
          scrolled
            ? "bg-[#FAFAF9]/90 backdrop-blur-md shadow-sm border border-[#E8DDD0]"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-tight text-[#1C1917] hover:text-[#CA8A04] transition-colors duration-300"
          >
            FAS Coaching
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-[family-name:var(--font-quicksand)] font-medium tracking-wide transition-colors duration-300 relative group ${
                    pathname === link.href
                      ? "text-[#CA8A04]"
                      : "text-[#44403C] hover:text-[#1C1917]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[#CA8A04] transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/timeplan"
            className="hidden md:inline-flex items-center gap-2 bg-[#1C1917] text-[#FAFAF9] text-sm font-[family-name:var(--font-quicksand)] font-medium px-5 py-2.5 rounded-xl hover:bg-[#CA8A04] transition-colors duration-300 cursor-pointer"
          >
            Book time
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-[#1C1917] hover:bg-[#E8DDD0] transition-colors cursor-pointer"
            aria-label="Meny"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#1C1917]/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-[#FAFAF9] rounded-2xl p-6 shadow-xl border border-[#E8DDD0] transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl font-[family-name:var(--font-quicksand)] font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "bg-[#1C1917] text-[#FAFAF9]"
                      : "text-[#44403C] hover:bg-[#E8DDD0] hover:text-[#1C1917]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-[#E8DDD0]">
            <Link
              href="/timeplan"
              className="block text-center bg-[#CA8A04] text-[#FAFAF9] font-[family-name:var(--font-quicksand)] font-semibold px-5 py-3 rounded-xl hover:bg-[#92400E] transition-colors duration-300 cursor-pointer"
            >
              Book time
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
