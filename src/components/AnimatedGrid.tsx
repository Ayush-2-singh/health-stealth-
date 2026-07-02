"use client";
  export default function AnimatedGrid() {
    return (
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,35,66,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,35,66,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 70% at center, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, black 0%, transparent 100%)",
          opacity: 0.6,
        }}
      />
    );
  }
  