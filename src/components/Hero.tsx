"use client";
import { motion } from "framer-motion";
import RadarBackground from "./RadarBackground";
import AnimatedGrid from "./AnimatedGrid";
import Button from "./Button";

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  compact?: boolean;
}

export default function Hero({ title, subtitle, primaryCTA, secondaryCTA, compact = false }: HeroProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${compact ? "min-h-[60vh]" : ""}`}>
      <div className="absolute inset-0">
        <AnimatedGrid />
        <RadarBackground />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-border rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span className="text-xs text-gray-300 tracking-wider uppercase">Defense Technology Leader</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-display-xl font-bold tracking-tight mb-6">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </motion.p>
        {(primaryCTA || secondaryCTA) && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && <Button href={primaryCTA.href} variant="primary" size="lg">{primaryCTA.label}</Button>}
            {secondaryCTA && <Button href={secondaryCTA.href} variant="ghost" size="lg">{secondaryCTA.label}</Button>}
          </motion.div>
        )}
      </div>
      {!compact && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-2 bg-primary rounded-full mt-2" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
