export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "2rem",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          color: "var(--text-dim)",
          letterSpacing: "0.05em",
        }}
      >
        © {year} Condro — Built with Next.js
      </span>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          color: "var(--text-dim)",
          letterSpacing: "0.05em",
        }}
      >
        Designed & built with ♥ in Balikpapan
      </span>
    </footer>
  );
}
