"use client";
  import { useEffect, useRef } from "react";

  interface Blip { angle: number; radius: number; alpha: number; life: number; speed: number; }

  export default function RadarBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      let frameId = 0;
      let visible = true;
      let sweepAngle = 0;
      let lastTime = 0;
      const blips: Blip[] = [];
      const ROTATION_MS = 12000; // Increased speed: 12s instead of 25s for clearly visible rotation
      const MAX_BLIPS = 15; // More blips for busier radar
      let targetPX = 0, targetPY = 0;
      let currentPX = 0, currentPY = 0;
      const PARALLAX = 30; // Increased from 18 for more responsive parallax

      // rAF-throttled resize
      let resizeTicking = false;
      const resize = () => {
        if (resizeTicking) return;
        resizeTicking = true;
        requestAnimationFrame(() => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          resizeTicking = false;
        });
      };
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      window.addEventListener("resize", resize, { passive: true });

      const onMouseMove = (e: MouseEvent) => {
        targetPX = (e.clientX / window.innerWidth - 0.5) * PARALLAX;
        targetPY = (e.clientY / window.innerHeight - 0.5) * PARALLAX;
      };
      window.addEventListener("mousemove", onMouseMove, { passive: true });

      const spawnBlip = (nearAngle: number) => {
        if (blips.length >= MAX_BLIPS) return;
        blips.push({
          angle: nearAngle + (Math.random() - 0.5) * 0.6,
          radius: 0.12 + Math.random() * 0.78,
          alpha: 0, life: 0,
          speed: 0.0022 + Math.random() * 0.003,
        });
      };

      const draw = (timestamp: number) => {
        if (!visible) return;

        const dt = lastTime === 0 ? 16 : Math.min(timestamp - lastTime, 50);
        lastTime = timestamp;
        sweepAngle += (Math.PI * 2 * dt) / ROTATION_MS;

        // Increased blip spawn chance from 0.7% to 2.0% for every 2-4 seconds
        if (!prefersReduced && Math.random() < 0.020 && blips.length < MAX_BLIPS) {
          spawnBlip(sweepAngle);
        }

        for (let i = blips.length - 1; i >= 0; i--) {
          const b = blips[i];
          b.life += b.speed;
          if (b.life >= 1) { blips.splice(i, 1); continue; }
          b.alpha = b.life < 0.15 ? b.life / 0.15 : b.life < 0.65 ? 1 : 1 - (b.life - 0.65) / 0.35;
        }

        currentPX += (targetPX - currentPX) * 0.04;
        currentPY += (targetPY - currentPY) * 0.04;

        const W = canvas.width;
        const H = canvas.height;
        const cx = W / 2 + currentPX;
        const cy = H / 2 + currentPY;
        const R = Math.min(W, H) * 0.46;

        ctx.clearRect(0, 0, W, H);

        // Range rings - increased opacity for better visibility
        for (let i = 1; i <= 5; i++) {
          ctx.beginPath();
          ctx.arc(cx, cy, R * (i / 5), 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(10,35,66," + (0.50 - i * 0.05) + ")"; // Increased from 0.38
          ctx.lineWidth = i === 5 ? 1.2 : 0.8; // Slightly thicker
          ctx.stroke();
        }

        // Crosshairs - improved contrast
        ctx.strokeStyle = "rgba(10,35,66,0.35)"; // Increased from 0.22
        ctx.lineWidth = 0.8; // Slightly thicker
        ctx.beginPath(); ctx.moveTo(cx - R * 1.1, cy); ctx.lineTo(cx + R * 1.1, cy); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx, cy - R * 1.1); ctx.lineTo(cx, cy + R * 1.1); ctx.stroke();
        ctx.strokeStyle = "rgba(10,35,66,0.15)"; // Increased from 0.10
        ctx.setLineDash([3, 9]);
        const d = R * 0.707 * 1.05;
        ctx.beginPath(); ctx.moveTo(cx - d, cy - d); ctx.lineTo(cx + d, cy + d); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx + d, cy - d); ctx.lineTo(cx - d, cy + d); ctx.stroke();
        ctx.setLineDash([]);

        // Degree ticks - improved visibility
        for (let deg = 0; deg < 360; deg += 10) {
          const rad = (deg * Math.PI) / 180;
          const isMajor = deg % 30 === 0;
          const inner = isMajor ? R * 0.93 : R * 0.97;
          ctx.beginPath();
          ctx.moveTo(cx + inner * Math.cos(rad), cy + inner * Math.sin(rad));
          ctx.lineTo(cx + R * Math.cos(rad), cy + R * Math.sin(rad));
          ctx.strokeStyle = isMajor ? "rgba(10,35,66,0.42)" : "rgba(10,35,66,0.20)"; // Increased visibility
          ctx.lineWidth = isMajor ? 1.1 : 0.6;
          ctx.stroke();
        }

        if (!prefersReduced) {
          // Sweep arc - improved visibility and gradient
          const SWEEP_ARC = Math.PI / 9;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.arc(cx, cy, R, sweepAngle - SWEEP_ARC, sweepAngle);
          ctx.closePath();
          const sg = ctx.createLinearGradient(
            cx, cy,
            cx + R * Math.cos(sweepAngle - SWEEP_ARC / 2),
            cy + R * Math.sin(sweepAngle - SWEEP_ARC / 2)
          );
          sg.addColorStop(0, "rgba(37,99,235,0)");
          sg.addColorStop(0.5, "rgba(37,99,235,0.12)"); // Increased from 0.05
          sg.addColorStop(1, "rgba(37,99,235,0.28)"); // Increased from 0.14
          ctx.fillStyle = sg;
          ctx.fill();

          // Sweep line — improved visibility
          const sx = cx + R * Math.cos(sweepAngle);
          const sy = cy + R * Math.sin(sweepAngle);
          ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(sx, sy);
          ctx.strokeStyle = "rgba(37,99,235,0.25)"; // Increased from 0.18
          ctx.lineWidth = 6; // Slightly thicker
          ctx.stroke();
          ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(sx, sy);
          ctx.strokeStyle = "rgba(37,99,235,1)"; // Full opacity for core line
          ctx.lineWidth = 2; // Increased from 1.5
          ctx.stroke();

          // Center dot — manual glow ring
          ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(37,99,235,0.20)"; // Increased from 0.12
          ctx.fill();
          ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(37,99,235,1)"; // Full opacity core
          ctx.fill();

          // Blips — improved visibility
          for (const b of blips) {
            const bx = cx + R * b.radius * Math.cos(b.angle);
            const by = cy + R * b.radius * Math.sin(b.angle);
            // Outer halo
            ctx.beginPath(); ctx.arc(bx, by, 10, 0, Math.PI * 2); // Slightly larger
            ctx.fillStyle = "rgba(37,99,235," + (b.alpha * 0.18) + ")"; // Increased from 0.10
            ctx.fill();
            // Mid ring
            ctx.beginPath(); ctx.arc(bx, by, 5.5, 0, Math.PI * 2); // Adjusted
            ctx.fillStyle = "rgba(37,99,235," + (b.alpha * 0.40) + ")"; // Increased from 0.28
            ctx.fill();
            // Core dot
            ctx.beginPath(); ctx.arc(bx, by, 3, 0, Math.PI * 2); // Slightly larger
            ctx.fillStyle = "rgba(37,99,235," + b.alpha + ")"; // Full opacity core
            ctx.fill();
          }

          frameId = requestAnimationFrame(draw);
        }
        // If prefersReduced: drew one static frame, do not re-schedule
      };

      // IntersectionObserver: pause rAF loop when hero is off-screen
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visible = entry.isIntersecting;
            if (visible && !prefersReduced) {
              lastTime = 0;
              frameId = requestAnimationFrame(draw);
            } else {
              cancelAnimationFrame(frameId);
            }
          });
        },
        { threshold: 0 }
      );
      observer.observe(canvas);
      frameId = requestAnimationFrame(draw);

      return () => {
        visible = false;
        cancelAnimationFrame(frameId);
        observer.disconnect();
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", onMouseMove);
      };
    }, []);

    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.70 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(10,35,66,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(10,35,66,0.5) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.22,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52'%3E%3Cpolygon points='30,1 59,17 59,35 30,51 1,35 1,17' fill='none' stroke='rgba(10,35,66,0.4)' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 52px",
            opacity: 0.32,
          }}
        />
        {/* GPU-promoted canvas: translateZ(0) forces a separate compositor layer */}
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />
      </div>
    );
  }
  