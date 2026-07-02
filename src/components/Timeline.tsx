"use client";
import { motion } from "framer-motion";

const MILESTONES = [
  { year: "2008", tag: "FOUNDED",     title: "Established",
    description: "Founded in response to growing multi-spectral detection threats, with a mandate to make allied platforms invisible to modern sensors." },
  { year: "2011", tag: "CONTRACT",    title: "First NATO Contract",
    description: "Landmark multi-national defense contract delivering advanced signature management to NATO forces across three continents." },
  { year: "2015", tag: "BREAKTHROUGH",title: "Materials Science Advance",
    description: "Proprietary nano-composite coating achieved invisibility across 14 electromagnetic bands simultaneously — an industry first." },
  { year: "2018", tag: "EXPANSION",   title: "Global Operations",
    description: "Manufacturing certified in 22 countries with ISO-9001 defense-grade quality assurance at each facility." },
  { year: "2023", tag: "CURRENT",     title: "Gen-7 Platform",
    description: "Next-generation adaptive signature management with real-time AI threat classification and autonomous countermeasure deployment." },
];

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-border" aria-hidden="true" />
      <div className="space-y-0">
        {MILESTONES.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex gap-8 pb-10 last:pb-0"
          >
            {/* Year */}
            <div className="w-20 flex-shrink-0 pt-0.5 text-right">
              <span className="text-xs font-mono font-semibold text-gray-400 tracking-wider">{m.year}</span>
            </div>

            {/* Node */}
            <div className="absolute left-[5.5rem] top-1.5 -translate-x-1/2 z-10">
              <div className="w-2 h-2 rounded-full bg-white border-2 border-secondary" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-[9px] font-mono font-semibold text-secondary tracking-[0.18em] uppercase mb-1">
                {m.tag}
              </p>
              <h4 className="text-sm font-semibold text-heading mb-1">{m.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{m.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}