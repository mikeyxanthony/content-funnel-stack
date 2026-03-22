"use client";
import { useState, useEffect } from "react";
const navLinks = [
  { label: "About", href: "#story" },
  { label: "What's Included", href: "#offer" },
  { label: "Results", href: "#testimonials" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <nav className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#FF2020]/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-[#FF2020] font-black text-xl tracking-tighter">CFS</span>
            <span className="text-white/60 text-sm font-medium hidden sm:block">Content Funnel Stack</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-white/70 hover:text-white text-sm font-medium transition-colors">{l.label}</a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="#cta" className="neon-btn px-5 py-2 rounded-lg text-sm font-bold pulse-glow">Book a Call</a>
          </div>
          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <div className="w-5 space-y-1">
              <span className={`block h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#FF2020]/10 px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="block text-white/70 hover:text-white text-base font-medium py-1">{l.label}</a>
          ))}
          <a href="#cta" onClick={() => setMobileOpen(false)} className="neon-btn block w-full text-center px-5 py-3 rounded-lg text-sm font-bold mt-2">Book a Call</a>
        </div>
      )}
    </nav>
  );
}
