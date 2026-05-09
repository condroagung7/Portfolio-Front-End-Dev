"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e1e" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-bold text-lg tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span style={{ color: "var(--accent)" }}>C</span>ondro
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-widest uppercase transition-colors duration-200"
                style={{
                  color: "var(--muted)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://drive.google.com/file/d/10DxUciqhcTw7le0p50YNp9EQ1yEXBw_K/view?usp=sharing"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase font-semibold transition-all duration-200"
          style={{
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            fontFamily: "'DM Mono', monospace",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--accent)";
            (e.currentTarget as HTMLElement).style.color = "#000";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "var(--accent)";
          }}
        >
          Hire Me ↗
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "var(--text)",
              transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "var(--text)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "var(--text)",
              transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden mt-4 mx-6 p-6 flex flex-col gap-4"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest"
              style={{
                color: "var(--muted)",
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
