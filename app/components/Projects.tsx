"use client";

const projects = [
  {
    number: "01",
    title: "ReqRes Dashboard",
    description:
      "Aplikasi full-stack React dengan autentikasi JWT, manajemen user, dan integrasi REST API menggunakan TypeScript dan Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    link: "https://github.com",
    demo: "https://vercel.app",
    featured: true,
  },
  {
    number: "02",
    title: "Sakura Restaurant",
    description:
      "Website restoran Jepang dengan animasi sakura, menu interaktif, dan reservasi form. Dibangun sebagai single HTML file dengan React CDN.",
    tags: ["React", "Tailwind CSS v4", "CSS Animation"],
    link: "https://github.com",
    demo: "https://vercel.app",
    featured: true,
  },
  {
    number: "03",
    title: "Portfolio Landing Page",
    description:
      "Landing page portfolio dengan komponen-based architecture, props-driven data flow, dan Tailwind CSS.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://github.com",
    demo: "https://vercel.app",
    featured: false,
  },
  {
    number: "04",
    title: "Custom Hooks Library",
    description:
      "Koleksi custom React hooks: useFetch, useDebounce, useLocalStorage, dan useMediaQuery untuk reusabilitas kode.",
    tags: ["React", "TypeScript", "Hooks"],
    link: "https://github.com",
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          03 / Projects
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        <a
          href="https://github.com"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            textDecoration: "none",
            letterSpacing: "0.05em",
            whiteSpace: "nowrap",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          Lihat semua →
        </a>
      </div>

      <h2
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          marginBottom: "3rem",
          lineHeight: 1.15,
        }}
      >
        Proyek{" "}
        <em style={{ color: "var(--accent)" }}>Pilihan</em>
      </h2>

      {/* Projects list */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((project, i) => (
          <div
            key={project.number}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: "2rem",
              padding: "2rem 0",
              borderBottom: "1px solid var(--border)",
              alignItems: "center",
              transition: "background 0.2s",
              cursor: "default",
            }}
            className="project-row"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.paddingLeft = "1rem";
              (e.currentTarget as HTMLElement).style.paddingRight = "1rem";
              (e.currentTarget as HTMLElement).style.background = "var(--bg-2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.paddingLeft = "0";
              (e.currentTarget as HTMLElement).style.paddingRight = "0";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            {/* Number */}
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                color: "var(--text-dim)",
                letterSpacing: "0.05em",
              }}
            >
              {project.number}
            </span>

            {/* Content */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    color: "var(--text)",
                    fontWeight: 400,
                  }}
                >
                  {project.title}
                </h3>
                {project.featured && (
                  <span
                    style={{
                      padding: "0.15rem 0.5rem",
                      background: "rgba(232,213,163,0.1)",
                      border: "1px solid var(--accent)",
                      borderRadius: "2px",
                      fontSize: "0.6rem",
                      color: "var(--accent)",
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  maxWidth: "520px",
                  lineHeight: 1.7,
                  marginBottom: "0.75rem",
                }}
              >
                {project.description}
              </p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      color: "var(--text-dim)",
                      padding: "0.15rem 0.4rem",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--accent)",
                    textDecoration: "none",
                    fontSize: "0.75rem",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.05em",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Live ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .project-row { transition: padding 0.3s ease, background 0.3s ease !important; }
        @media (max-width: 640px) {
          .project-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
