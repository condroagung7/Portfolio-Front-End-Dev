"use client";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "Dashboard Analytics",
    category: "Full-Stack App",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    desc: "Platform analitik real-time dengan visualisasi data interaktif, autentikasi JWT, dan dark mode. Dibangun dengan arsitektur component-based yang skalabel.",
    year: "2024",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "02",
    title: "E-Commerce UI Kit",
    category: "UI Library",
    tech: ["React", "TypeScript", "Storybook", "CSS Modules"],
    desc: "Komponen UI reusable untuk e-commerce: product cards, cart drawer, checkout form, dengan dokumentasi Storybook lengkap dan aksesibilitas penuh.",
    year: "2024",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "03",
    title: "reqres.in Integration",
    category: "Frontend App",
    tech: ["React", "TypeScript", "Tailwind", "Axios"],
    desc: "Aplikasi React dengan integrasi REST API penuh: register, login, paginated user list, user detail, dengan AuthContext dan ProtectedRoute.",
    year: "2024",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: "04",
    title: "Sakura Restaurant",
    category: "Landing Page",
    tech: ["React", "Tailwind v4", "Framer Motion"],
    desc: "Website restoran Jepang dengan animasi sakura, dark luxury aesthetic, tabbed menu, reservation form, dan scroll-aware navigation.",
    year: "2023",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: "05",
    title: "Portfolio Starter",
    category: "Template",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    desc: "Template portofolio open-source yang responsif dengan dark mode, animasi smooth, dan optimasi SEO. Digunakan oleh 100+ developer.",
    year: "2023",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: "06",
    title: "Task Manager PWA",
    category: "Progressive Web App",
    tech: ["React", "Redux", "PWA", "IndexedDB"],
    desc: "Aplikasi manajemen tugas offline-first dengan sinkronisasi data, notifikasi push, dan instalasi sebagai PWA di device pengguna.",
    year: "2023",
    link: "#",
    github: "#",
    featured: false,
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div
          className="flex items-center gap-4 mb-4"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <span style={{ color: "var(--accent)", fontSize: "12px" }}>03</span>
          <div style={{ width: "60px", height: "1px", background: "var(--accent)" }} />
          <span style={{ fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Projects
          </span>
        </div>

        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <h2
            className="font-bold"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Karya <span style={{ color: "var(--accent)" }}>Terpilih</span>
          </h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
          >
            GitHub Profile ↗
          </a>
        </div>

        {/* Project list */}
        <div>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group relative py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-200 cursor-pointer"
              style={{
                borderTop: "1px solid var(--border)",
                borderBottom: i === projects.length - 1 ? "1px solid var(--border)" : "none",
                paddingLeft: hoveredId === project.id ? "16px" : "0",
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Accent line on hover */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-200"
                style={{
                  background: "var(--accent)",
                  opacity: hoveredId === project.id ? 1 : 0,
                  transform: hoveredId === project.id ? "scaleY(1)" : "scaleY(0)",
                }}
              />

              {/* Left: number + title + desc */}
              <div className="flex items-start gap-6 flex-1">
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                    minWidth: "24px",
                    marginTop: "4px",
                  }}
                >
                  {project.id}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3
                      className="font-bold transition-colors duration-200"
                      style={{
                        fontSize: "clamp(18px, 2vw, 22px)",
                        color: hoveredId === project.id ? "var(--accent)" : "var(--text)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "9px",
                        color: "var(--muted)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--border)",
                        padding: "2px 8px",
                        borderRadius: "100px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "9px",
                          color: "#000",
                          background: "var(--accent)",
                          padding: "2px 8px",
                          borderRadius: "100px",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontWeight: 700,
                        }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "12px",
                      color: "var(--muted)",
                      lineHeight: "1.7",
                      maxWidth: "560px",
                      fontWeight: 300,
                    }}
                  >
                    {project.desc}
                  </p>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "10px",
                          color: hoveredId === project.id ? "var(--accent)" : "var(--muted)",
                          padding: "2px 8px",
                          border: "1px solid",
                          borderColor: hoveredId === project.id ? "rgba(232,255,71,0.3)" : "var(--border)",
                          borderRadius: "100px",
                          transition: "all 0.2s",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: year + links */}
              <div
                className="flex items-center gap-6 md:ml-8"
                style={{ minWidth: "120px", justifyContent: "flex-end" }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                  }}
                >
                  {project.year}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
                  >
                    Code
                  </a>
                  <a
                    href={project.link}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "11px",
                      color: hoveredId === project.id ? "var(--accent)" : "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      transition: "color 0.2s",
                    }}
                  >
                    Live ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
