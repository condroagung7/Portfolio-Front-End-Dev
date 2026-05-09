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

        <div className="grid md:grid-cols-2 gap-16">
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
                { label: "Email", value: "condro@example.com", href: "mailto:condro@example.com" },
                { label: "GitHub", value: "github.com/condro", href: "#" },
                { label: "LinkedIn", value: "linkedin.com/in/condro", href: "#" },
                { label: "Twitter", value: "@condrodev", href: "#" },
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

          {/* Right: form */}
          <div>
            {status === "sent" ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12"
                style={{
                  border: "1px solid rgba(232,255,71,0.3)",
                  borderRadius: "4px",
                  background: "rgba(232,255,71,0.03)",
                }}
              >
                <div
                  style={{ fontSize: "48px", marginBottom: "16px" }}
                >
                  ✓
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: "24px", color: "var(--accent)" }}
                >
                  Pesan Terkirim!
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "13px",
                    color: "var(--muted)",
                    lineHeight: "1.7",
                    fontWeight: 300,
                  }}
                >
                  Terima kasih sudah menghubungi saya. Saya akan membalas dalam 1–2 hari kerja.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {[
                  { key: "name", label: "Nama", placeholder: "Nama lengkap kamu", type: "text" },
                  { key: "email", label: "Email", placeholder: "email@example.com", type: "email" },
                ].map((field) => (
                  <div key={field.key}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "10px",
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "8px",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as "name" | "email"]}
                      onChange={(e) =>
                        setForm({ ...form, [field.key]: e.target.value })
                      }
                      style={{
                        width: "100%",
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                        borderRadius: "2px",
                        padding: "12px 16px",
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "13px",
                        color: "var(--text)",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(232,255,71,0.4)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "var(--border)")
                      }
                    />
                  </div>
                ))}

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "8px",
                    }}
                  >
                    Pesan
                  </label>
                  <textarea
                    placeholder="Ceritakan tentang proyekmu..."
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{
                      width: "100%",
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      padding: "12px 16px",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "13px",
                      color: "var(--text)",
                      outline: "none",
                      resize: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(232,255,71,0.4)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border)")
                    }
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background:
                      status === "sending" ? "rgba(232,255,71,0.5)" : "var(--accent)",
                    color: "#000",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    border: "none",
                    borderRadius: "2px",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending")
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  {status === "sending" ? "Mengirim..." : "Kirim Pesan →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
