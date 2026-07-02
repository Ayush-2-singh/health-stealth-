"use client";
import { motion } from "framer-motion";
import { Technology } from "@/types";
import { IconType } from "react-icons";
import {
  HiSignal, HiFire, HiSun, HiEye, HiBolt,
  HiCpuChip, HiCube, HiGlobeAlt,
} from "react-icons/hi2";

const iconMap: Record<string, IconType> = {
  radar: HiSignal, infrared: HiFire, thermal: HiSun,
  uv: HiBolt, visible: HiEye, swir: HiCpuChip, mwir: HiCube, lwir: HiGlobeAlt,
};

// SVG corner bracket — explicit paths, no template literals
function CornerBracket({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const pathData: Record<string, string> = {
    tl: "M 10 1 L 1 1 L 1 10",
    tr: "M 2 1 L 11 1 L 11 10",
    bl: "M 10 11 L 1 11 L 1 2",
    br: "M 2 11 L 11 11 L 11 2",
  };
  const posStyle: Record<string, React.CSSProperties> = {
    tl: { position: "absolute", top: 5, left: 5 },
    tr: { position: "absolute", top: 5, right: 5 },
    bl: { position: "absolute", bottom: 5, left: 5 },
    br: { position: "absolute", bottom: 5, right: 5 },
  };
  return (
    <svg style={{ ...posStyle[pos], width: 13, height: 13 }} viewBox="0 0 13 13" aria-hidden="true">
      <path d={pathData[pos]} fill="none" stroke="rgba(10,35,66,0.20)" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}

interface TechnologyCardProps { tech: Technology; index: number; }

export default function TechnologyCard({ tech, index }: TechnologyCardProps) {
  const Icon = iconMap[tech.icon] ?? HiSignal;
  const refNum = String(index + 1).padStart(3, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white border border-border rounded-[var(--radius-card)] p-6 shadow-soft hover:shadow-card hover:border-primary/25 transition-all duration-200 overflow-hidden"
    >
      {/* Blueprint corner brackets */}
      <CornerBracket pos="tl" />
      <CornerBracket pos="tr" />
      <CornerBracket pos="bl" />
      <CornerBracket pos="br" />

      {/* Blueprint grid on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: "linear-gradient(rgba(10,35,66,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(10,35,66,0.03) 1px,transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Spec reference */}
      <div className="absolute top-4 right-8 text-[8px] font-mono text-primary/20 tracking-[0.12em] select-none">
        {"REF-" + refNum}
      </div>

      {/* Icon with dimension ticks */}
      <div className="mb-5 mt-1">
        <div className="relative w-11 h-11 flex items-center justify-center rounded-xl border border-primary/12 bg-primary/5 group-hover:bg-primary/8 transition-colors duration-200">
          <Icon className="h-5 w-5 text-primary" />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-px h-1.5 bg-primary/15" />
          <span className="absolute -right-2 top-1/2 -translate-y-1/2 h-px w-1.5 bg-primary/15" />
        </div>
      </div>

      <h3 className="text-sm font-semibold text-heading mb-1.5 group-hover:text-primary transition-colors duration-150">
        {tech.name}
      </h3>
      <span className="inline-block text-[9px] font-mono font-medium text-gray-400 tracking-[0.15em] uppercase bg-surface border border-border px-2 py-0.5 rounded mb-3">
        {tech.band}
      </span>
      <p className="text-sm text-gray-500 leading-relaxed mb-3">{tech.description}</p>
      {tech.wavelength && (
        <div className="flex items-center gap-1.5 text-xs text-muted">
          <span className="w-3 h-px bg-secondary/40 inline-block" />
          <span>{tech.wavelength}</span>
        </div>
      )}
    </motion.div>
  );
}