"use client";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "React Enthusiast",
  "UI/UX Craftsman",
  "Next.js Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          35
        );
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6"
      style={{ paddingTop: "100px" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232,255,71,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,255,71,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 animate-fade-in opacity-0-init"
          style={{
            border: "1px solid var(--border)",
            borderRadius: "100px",
            background: "var(--surface)",
            fontSize: "11px",
            fontFamily: "'DM Mono', monospace",
            color: "var(--muted)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }}
          />
          Available for work
        </div>

        {/* Main heading */}
        <h1
          className="font-bold leading-none mb-4 animate-fade-up opacity-0-init delay-100"
          style={{
            fontSize: "clamp(48px, 8vw, 110px)",
            letterSpacing: "-0.03em",
            lineHeight: "0.95",
          }}
        >
          <div>Frontend</div>
          <span style={{ color: "var(--accent)" }}>Developer</span>
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "clamp(40px, 6vw, 80px)",
              background: "var(--accent)",
              marginLeft: "4px",
              verticalAlign: "middle",
              borderRadius: "2px",
              animation: "blink 1s step-end infinite",
            }}
          />
        </h1>

        {/* Subtitle */}
        <p
          className="mb-6 animate-fade-up opacity-0-init delay-200"
          style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "var(--muted)",
            maxWidth: "480px",
            lineHeight: "1.7",
            fontFamily: "'DM Mono', monospace",
            fontWeight: 300,
          }}
        >
          Hi, saya{" "}
          <span style={{ color: "var(--text)", fontWeight: 500 }}>Agung</span>
          . Saya membangun pengalaman web yang{" "}
          <span style={{ color: "var(--accent)" }}>cepat</span>,{" "}
          <span style={{ color: "var(--accent)" }}>aksesibel</span>, dan{" "}
          <span style={{ color: "var(--accent)" }}>indah</span> menggunakan
          teknologi modern.
        </p>

        {/* Role typewriter */}
        <div
          className="mb-10 animate-fade-up opacity-0-init delay-300"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "14px",
            color: "var(--muted)",
          }}
        >
          <span style={{ color: "var(--accent)" }}>$ </span>
          <span style={{ color: "var(--text)" }}>{displayed}</span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "16px",
              background: "var(--accent)",
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-fade-up opacity-0-init delay-400">
          <a
            href="#projects"
            className="px-6 py-3 font-semibold text-sm tracking-widest uppercase transition-all duration-200"
            style={{
              background: "var(--accent)",
              color: "#000",
              borderRadius: "2px",
              fontFamily: "'DM Mono', monospace",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 30px var(--accent-glow)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 font-semibold text-sm tracking-widest uppercase transition-all duration-200"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text)",
              borderRadius: "2px",
              fontFamily: "'DM Mono', monospace",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 pt-10 flex flex-wrap gap-10 animate-fade-up opacity-0-init delay-500"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {[
            { num: "1+", label: "Years Exp." },
            { num: "3+", label: "Projects Built" },
            { num: "3+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="font-bold"
                style={{
                  fontSize: "32px",
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  fontFamily: "'DM Mono', monospace",
                  marginTop: "4px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0-init delay-700"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            color: "var(--muted)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </div>
        <div
          className="animate-float"
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </div>
    </section>
  );
}
