"use client";

const skillCategories = [
  {
    title: "Frontend",
    icon: "⬡",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS"],
  },
  {
    title: "Tools & Workflow",
    icon: "⬡",
    skills: ["Git & GitHub", "Vite", "Webpack", "Figma", "REST API", "GraphQL"],
  },
  {
    title: "State & Data",
    icon: "⬡",
    skills: ["Zustand", "React Query", "Redux Toolkit", "Context API", "Axios", "SWR"],
  },
  {
    title: "Testing & Deploy",
    icon: "⬡",
    skills: ["Jest", "React Testing Library", "Vercel", "Netlify", "Docker basics", "CI/CD"],
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Git",
  "Vite", "Figma", "Vercel", "GraphQL", "Jest", "PostgreSQL"
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "8rem 2rem",
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
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
            02 / Skills
          </span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem" }} className="skills-grid">
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Tech Stack &{" "}
              <br />
              <em style={{ color: "var(--accent)" }}>Keahlian</em>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              Saya terus belajar dan mengikuti perkembangan teknologi web modern.
              Berikut teknologi yang saya kuasai.
            </p>

            {/* Scrolling tech tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "0.3rem 0.75rem",
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    fontSize: "0.75rem",
                    fontFamily: "'DM Mono', monospace",
                    color: "var(--text-muted)",
                    transition: "border-color 0.2s, color 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Category cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "1.5rem",
                  transition: "border-color 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    color: "var(--accent)",
                    marginBottom: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.title}
                </div>
                <ul style={{ listStyle: "none" }}>
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      style={{
                        fontSize: "0.83rem",
                        color: "var(--text-muted)",
                        padding: "0.25rem 0",
                        borderBottom: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: "var(--text-dim)", fontSize: "0.6rem" }}>▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
