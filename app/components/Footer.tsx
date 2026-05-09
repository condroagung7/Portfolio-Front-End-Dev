"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "var(--muted)",
          }}
        >
          © {year}{" "}
          <span style={{ color: "var(--text)" }}>Condro</span> — Built with{" "}
          <span style={{ color: "var(--accent)" }}>Next.js</span> &{" "}
          <span style={{ color: "var(--accent)" }}>TypeScript</span>
        </div>

        <div
          className="flex items-center gap-6"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
          }}
        >
          {["GitHub", "LinkedIn", "Twitter", "Email"].map((link) => (
            <a
              key={link}
              href="#"
              style={{ color: "var(--muted)", textDecoration: "none" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
              }
            >
              {link}
            </a>
          ))}
        </div>

        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "var(--muted)",
          }}
        >
          <span style={{ color: "var(--accent)" }}>⬡</span> Balikpapan, ID
        </div>
      </div>
    </footer>
  );
}
