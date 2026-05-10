"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section
      id="contact"
      className="py-32 px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div
          className="flex items-center gap-4 mb-16"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <span style={{ color: "var(--accent)", fontSize: "12px" }}>04</span>
          <div style={{ width: "60px", height: "1px", background: "var(--accent)" }} />
          <span
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Contact
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-16 ">
          {/* Left */}
          <div>
            <h2
              className="font-bold mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Mari
              <br />
              <span style={{ color: "var(--accent)" }}>Berkolaborasi</span>
              <br />
              Bersama.
            </h2>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "13px",
                color: "var(--muted)",
                lineHeight: "1.8",
                maxWidth: "380px",
                marginBottom: "40px",
                fontWeight: 300,
              }}
            >
              Punya proyek menarik? Butuh frontend developer berpengalaman? 
              Atau sekadar ingin ngobrol tentang teknologi? 
              Jangan ragu untuk menghubungi saya.
            </p>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Email", value: "condroagung7@gmail.com", href: "mailto:condroagung7@gmail.com" },
                { label: "LinkedIn", value: "linkedin.com/in/condro", href: "https://www.linkedin.com/in/condro-agung-utomo/" },
                { label: "Instagram", value: "@condroagung", href: "https://www.instagram.com/condroagung/" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      minWidth: "64px",
                    }}
                  >
                    {item.label}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background: "var(--border)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "12px",
                      color: "var(--text)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--text)")
                    }
                  >
                    {item.value} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
          </div>
        </div>
    </section>
  );
}
