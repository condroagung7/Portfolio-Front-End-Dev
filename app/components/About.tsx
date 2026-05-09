"use client";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div
          className="flex items-center gap-4 mb-16"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <span style={{ color: "var(--accent)", fontSize: "12px" }}>01</span>
          <div style={{ width: "60px", height: "1px", background: "var(--accent)" }} />
          <span
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            About Me
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text side */}
          <div>
            <h2
              className="font-bold mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              Saya membangun
              <br />
              <span style={{ color: "var(--accent)" }}>antarmuka</span> yang
              <br />
              bermakna.
            </h2>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "13px",
                color: "var(--muted)",
                lineHeight: "1.9",
                fontWeight: 300,
              }}
            >
              <p className="mb-4">
                Berbasis di{" "}
                <span style={{ color: "var(--text)" }}>Balikpapan, Indonesia</span>, saya
                adalah seorang frontend developer yang berfokus pada pembuatan
                produk digital yang menggabungkan estetika dan fungsionalitas.
              </p>
              <p className="mb-4">
                Saya bekerja dengan{" "}
                <span style={{ color: "var(--accent)" }}>React</span>,{" "}
                <span style={{ color: "var(--accent)" }}>Next.js</span>, dan{" "}
                <span style={{ color: "var(--accent)" }}>TypeScript</span> untuk
                membangun aplikasi web yang performan, skalabel, dan mudah
                digunakan.
              </p>
              <p>
                Ketika tidak sedang coding, saya senang menjelajahi tren desain
                terbaru dan belajar teknologi baru untuk meningkatkan skill saya.
              </p>
            </div>
          </div>

          {/* Right side - decorative card */}
          <div className="relative">
            <div
              className="relative p-8"
              style={{
                border: "1px solid var(--border)",
                borderRadius: "4px",
                background: "var(--surface)",
              }}
            >
              {/* Accent corner */}
              <div
                className="absolute top-0 right-0 w-16 h-16"
                style={{
                  background: "var(--accent)",
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                  opacity: 0.15,
                }}
              />

              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "24px",
                }}
              >
                // current_focus.ts
              </div>

              {[
                {
                  label: "Primary Stack",
                  value: "React · Next.js · TypeScript",
                },
                { label: "Styling", value: "Tailwind CSS · Framer Motion" },
                { label: "Backend", value: "Node.js · REST API · Prisma" },
                { label: "Tools", value: "Git · Figma · Vercel" },
                { label: "Learning", value: "Three.js · GSAP · tRPC" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-start py-3"
                  style={{
                    borderTop: i === 0 ? "none" : "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "11px",
                      color: "var(--text)",
                      textAlign: "right",
                      maxWidth: "200px",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}

              {/* Bottom status */}
              <div
                className="flex items-center gap-2 mt-6 pt-4"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }}
                />
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                  }}
                >
                  Open to new opportunities
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-2 animate-float"
              style={{
                background: "var(--accent)",
                borderRadius: "2px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#000",
              }}
            >
              Based in 🇮🇩 Indonesia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
