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

  interface TechnologyCardProps { tech: Technology; index: number; }

  export default function TechnologyCard({ tech, index }: TechnologyCardProps) {
    const Icon = iconMap[tech.icon] ?? HiSignal;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
        className="group bg-white border border-border rounded-[var(--radius-card)] p-6 shadow-soft hover:shadow-card hover:border-gray-300 transition-all duration-200"
      >
        {/* Icon */}
        <div className="mb-5">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-primary/12 bg-primary/5 group-hover:bg-primary/8 transition-colors duration-200">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-sm font-semibold text-heading mb-1.5 group-hover:text-primary transition-colors duration-150">
          {tech.name}
        </h3>
        <span className="inline-block text-[10px] font-medium text-gray-400 tracking-[0.15em] uppercase bg-surface border border-border px-2 py-0.5 rounded mb-3">
          {tech.band}
        </span>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">{tech.description}</p>
        {tech.wavelength && (
          <p className="text-xs text-muted">{tech.wavelength}</p>
        )}
      </motion.div>
    );
  }
  