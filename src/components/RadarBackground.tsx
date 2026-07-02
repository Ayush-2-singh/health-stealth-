"use client";
export default function RadarBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-[800px] h-[800px] max-w-[90vw] max-h-[90vh] opacity-40">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="absolute inset-0 border border-primary/20 rounded-full" style={{ transform: `scale(${i * 0.25})` }} />
        ))}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        </div>
        <div className="absolute inset-0 animate-radar-sweep origin-center">
          <div className="absolute inset-0" style={{
            background: `conic-gradient(from 0deg, transparent 0deg, rgba(59, 130, 246, 0.15) 30deg, transparent 60deg)`,
            borderRadius: "50%",
          }} />
        </div>
        {[
          { top: "20%", left: "30%", delay: "0s" },
          { top: "60%", left: "70%", delay: "1s" },
          { top: "40%", left: "50%", delay: "2s" },
          { top: "75%", left: "25%", delay: "3s" },
        ].map((blip, i) => (
          <div key={i} className="absolute w-2 h-2 bg-primary rounded-full animate-pulse" style={{
            top: blip.top, left: blip.left, animationDelay: blip.delay,
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          }} />
        ))}
      </div>
    </div>
  );
}
