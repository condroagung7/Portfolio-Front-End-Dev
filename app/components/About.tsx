"use client";

const stats = [
  { value: "2+", label: "Tahun Experience" },
  { value: "20+", label: "Proyek Selesai" },
  { value: "10+", label: "Klien Puas" },
  { value: "100%", label: "Dedikasi" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "8rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
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
          01 / About
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "var(--border)",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left: Text */}
        <div>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              color: "var(--text)",
            }}
          >
            Saya suka membuat hal-hal{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              yang hidup
            </em>{" "}
            di web.
          </h2>

          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontSize: "0.95rem",
            }}
          >
            Saya adalah frontend developer berbasis di Balikpapan yang passionate
            membangun pengalaman digital yang estetis dan fungsional. Saya fokus pada
            detail, performa, dan user experience.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "0.95rem",
              marginBottom: "2rem",
            }}
          >
            Dengan background di React ecosystem, saya suka menerjemahkan desain
            menjadi kode yang bersih, maintainable, dan accessible.
          </p>

          <a
            href="/cv.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.05em",
              borderBottom: "1px solid var(--accent)",
              paddingBottom: "2px",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Download CV →
          </a>
        </div>

        {/* Right: Stats + Card */}
        <div>
          <div
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "2.5rem",
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently */}
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "1.25rem 1.5rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>📍</span>
            <div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  color: "var(--text-dim)",
                  letterSpacing: "0.1em",
                  marginBottom: "0.25rem",
                  textTransform: "uppercase",
                }}
              >
                Currently
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--text)" }}>
                Balikpapan, Kalimantan Timur
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
