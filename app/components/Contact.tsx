"use client";

import { useState } from "react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "⌥" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "⊞" },
  { label: "Twitter/X", href: "https://twitter.com", icon: "✕" },
  { label: "Email", href: "mailto:condro@email.com", icon: "✉" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("condro@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 2rem",
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              color: "var(--accent)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            04 / Contact
          </span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "6rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Mari{" "}
              <em style={{ color: "var(--accent)", display: "block" }}>
                Bekerja Sama.
              </em>
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                maxWidth: "440px",
                marginBottom: "2.5rem",
              }}
            >
              Saya terbuka untuk peluang freelance, full-time, atau kolaborasi proyek.
              Jangan ragu untuk menghubungi saya!
            </p>

            {/* Email copy */}
            <button
              onClick={copyEmail}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.5rem",
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                color: "var(--text)",
                cursor: "pointer",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.85rem",
                transition: "border-color 0.2s, background 0.2s",
                letterSpacing: "0.03em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.background = "rgba(232,213,163,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span style={{ color: "var(--accent)" }}>✉</span>
              condro@email.com
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.65rem",
                  color: copied ? "var(--green)" : "var(--text-dim)",
                  transition: "color 0.2s",
                  marginLeft: "0.25rem",
                }}
              >
                {copied ? "✓ copied" : "click to copy"}
              </span>
            </button>
          </div>

          {/* Right: Social Links */}
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--text-dim)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Find me on
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem 0",
                    borderBottom: "1px solid var(--border)",
                    textDecoration: "none",
                    color: "var(--text-muted)",
                    transition: "color 0.2s, padding-left 0.2s",
                    fontSize: "0.9rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text)";
                    e.currentTarget.style.paddingLeft = "0.75rem";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.8rem",
                        color: "var(--text-dim)",
                      }}
                    >
                      {link.icon}
                    </span>
                    {link.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "'DM Mono', monospace",
                      color: "var(--text-dim)",
                    }}
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
