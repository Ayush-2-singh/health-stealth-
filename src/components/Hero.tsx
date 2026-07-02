"use client";
  import { motion } from "framer-motion";
  import RadarBackground from "./RadarBackground";
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
      <section className={`relative flex items-center justify-center overflow-hidden bg-white ${compact ? "min-h-[55vh] pt-20" : "min-h-screen"}`}>
        <RadarBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/70 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-10 text-center pt-28 pb-20 lg:pt-32 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 lg:mb-10 border border-border rounded-full bg-white shadow-soft"
          >
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-xs text-gray-700 tracking-[0.18em] uppercase font-semibold">Defense Technology Leader</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-display-xl font-bold tracking-tight text-heading mb-8 lg:mb-10 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 lg:mb-16 leading-relaxed font-normal"
          >
            {subtitle}
          </motion.p>

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {primaryCTA && (
                <Button href={primaryCTA.href} variant="primary" size="lg" className="shadow-navy hover:shadow-navy text-base font-semibold px-8 py-3.5">
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="ghost" size="lg" className="text-base font-semibold px-8 py-3.5 border-2 hover:bg-gray-50">
                  {secondaryCTA.label}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </section>
    );
  }
  