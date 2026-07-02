"use client";

  import { motion } from "framer-motion";
  import { Technology } from "@/types";
  import { IconType } from "react-icons";

  import {
    HiSignal,
    HiFire,
    HiSun,
    HiEye,
    HiBolt,
    HiCpuChip,
    HiCube,
    HiGlobeAlt,
  } from "react-icons/hi2";

  const iconMap: Record<string, IconType> = {
    radar: HiSignal,
    infrared: HiFire,
    thermal: HiSun,
    uv: HiBolt,
    visible: HiEye,
    swir: HiCpuChip,
    mwir: HiCube,
    lwir: HiGlobeAlt,
  };

  interface TechnologyCardProps {
    tech: Technology;
    index: number;
  }

  export default function TechnologyCard({ tech, index }: TechnologyCardProps) {
    const Icon = iconMap[tech.icon] ?? HiSignal;

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-500 hover:border-primary/20 hover:shadow-navy"
      >
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-secondary/0 blur-3xl transition-all duration-700 group-hover:bg-secondary/8" />

        <div className="relative mb-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/15 bg-gradient-to-br from-primary/8 to-primary/3 transition-all group-hover:from-primary/15 group-hover:to-primary/6">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          <div className="absolute -bottom-1 -right-1 h-3 w-3 animate-pulse rounded-full bg-secondary" />
        </div>

        <div className="relative">
          <h3 className="mb-2 text-lg font-bold text-heading transition-colors group-hover:text-primary">
            {tech.name}
          </h3>

          <div className="mb-3 inline-block rounded border border-border bg-gray-50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gray-500">
            {tech.band}
          </div>

          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            {tech.description}
          </p>

          {tech.wavelength && (
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="h-1 w-1 rounded-full bg-secondary" />
              <span>{tech.wavelength}</span>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </motion.div>
    );
  }
  