"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.style.width = "100%";
    }
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 2rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Decorative grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* Top label */}
      <div
        className="animate-fade-up opacity-0 delay-1"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--green)",
            boxShadow: "0 0 8px var(--green)",
          }}
        />
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Available for work
        </span>
      </div>

      {/* Main heading */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          className="animate-fade-up opacity-0 delay-2"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "0.1em",
          }}
        >
          Frontend
        </h1>
        <h1
          className="animate-fade-up opacity-0 delay-3"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "transparent",
            WebkitTextStroke: "1px var(--accent)",
            marginBottom: "0.2em",
          }}
        >
          Developer.
        </h1>

        {/* Animated line */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, var(--accent), transparent)",
            width: "0%",
            transition: "width 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
            marginBottom: "2rem",
          }}
          ref={lineRef}
        />

        {/* Subtitle */}
        <p
          className="animate-fade-up opacity-0 delay-5"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--text-muted)",
            maxWidth: "520px",
            lineHeight: 1.7,
            marginBottom: "3rem",
          }}
        >
          Halo, saya{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>Condro</span>
          . Saya membangun antarmuka web yang cepat, bersih, dan berkesan menggunakan
          React, Next.js, dan TypeScript.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-up opacity-0 delay-6"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              padding: "0.75rem 2rem",
              background: "var(--accent)",
              color: "var(--bg)",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              borderRadius: "2px",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(232,213,163,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            style={{
              padding: "0.75rem 2rem",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              borderRadius: "2px",
              transition: "border-color 0.2s, color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--text-muted)";
              e.currentTarget.style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            Hubungi Saya
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in opacity-0 delay-7"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            color: "var(--text-dim)",
            letterSpacing: "0.1em",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(var(--border), transparent)",
          }}
        />
      </div>
    </section>
  );
}
