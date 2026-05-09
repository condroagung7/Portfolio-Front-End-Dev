"use client";

const skills = [
  { name: "React.js", level: 90, category: "Framework" },
  { name: "Next.js", level: 85, category: "Framework" },
  { name: "TypeScript", level: 82, category: "Language" },
  { name: "Tailwind CSS", level: 92, category: "Styling" },
  { name: "JavaScript", level: 88, category: "Language" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Figma", level: 75, category: "Design" },
  { name: "REST API", level: 88, category: "Integration" },
  { name: "CSS3", level: 90, category: "Styling" },
  { name: "HTML5", level: 95, category: "Markup" },
  { name: "Framer Motion", level: 72, category: "Animation" },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
  "PostgreSQL", "Git", "Figma", "Vercel", "REST API", "Prisma",
  "Redux", "Zustand", "React Query", "Vite", "Jest",
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
  "PostgreSQL", "Git", "Figma", "Vercel", "REST API", "Prisma",
  "Redux", "Zustand", "React Query", "Vite", "Jest",
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div
          className="flex items-center gap-4 mb-16"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <span style={{ color: "var(--accent)", fontSize: "12px" }}>02</span>
          <div style={{ width: "60px", height: "1px", background: "var(--accent)" }} />
          <span style={{ fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Skills & Tech
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: skill bars */}
          <div>
            <h2
              className="font-bold mb-10"
              style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.02em" }}
            >
              Keahlian <span style={{ color: "var(--accent)" }}>Teknis</span>
            </h2>
            <div className="flex flex-col gap-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-semibold"
                        style={{ fontSize: "14px" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "9px",
                          color: "var(--muted)",
                          background: "rgba(255,255,255,0.05)",
                          padding: "2px 6px",
                          borderRadius: "100px",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {skill.category}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "11px",
                        color: "var(--accent)",
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  {/* Bar */}
                  <div
                    className="h-1 rounded-full overflow-hidden"
                    style={{ background: "var(--border)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, var(--accent), rgba(232,255,71,0.5))`,
                        transition: "width 1s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: categories */}
          <div>
            <h2
              className="font-bold mb-10"
              style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.02em" }}
            >
              Apa yang <span style={{ color: "var(--accent)" }}>Saya Lakukan</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: "⬡",
                  title: "Frontend Development",
                  desc: "Membangun UI yang responsif, aksesibel, dan performan menggunakan React & Next.js.",
                },
                {
                  icon: "◈",
                  title: "UI/UX Implementation",
                  desc: "Mentranslasikan desain dari Figma ke kode yang pixel-perfect dengan animasi halus.",
                },
                {
                  icon: "◎",
                  title: "API Integration",
                  desc: "Menghubungkan frontend dengan REST API dan backend services menggunakan TypeScript.",
                },
                {
                  icon: "◇",
                  title: "Performance Optimization",
                  desc: "Mengoptimalkan Core Web Vitals, lazy loading, dan bundle size untuk UX terbaik.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 flex gap-4 items-start transition-all duration-200"
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    background: "var(--bg)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,255,71,0.3)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(232,255,71,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg)";
                  }}
                >
                  <span style={{ color: "var(--accent)", fontSize: "20px", lineHeight: 1, marginTop: "2px" }}>
                    {item.icon}
                  </span>
                  <div>
                    <div className="font-semibold mb-1" style={{ fontSize: "14px" }}>
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "12px",
                        color: "var(--muted)",
                        lineHeight: "1.7",
                        fontWeight: 300,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee tech stack */}
      <div
        className="mt-20 overflow-hidden"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "32px" }}
      >
        <div style={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite" }}>
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="flex items-center gap-6 mx-6"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                color: "var(--muted)",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {tech}
              <span style={{ color: "var(--accent)", opacity: 0.4 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
