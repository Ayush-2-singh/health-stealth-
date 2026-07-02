"use client";
  import { motion } from "framer-motion";
  import Button from "./Button";

  interface CTAProps {
    title: string;
    description: string;
    primaryCTA?: { label: string; href: string };
    secondaryCTA?: { label: string; href: string };
  }

  export default function CTA({ title, description, primaryCTA, secondaryCTA }: CTAProps) {
    return (
      <section className="py-32 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-surface border border-border rounded-[var(--radius-card-lg)] p-12 md:p-16 overflow-hidden"
          >
            {/* Subtle grid background */}
            <div className="absolute inset-0 grid-bg opacity-60 rounded-[var(--radius-card-lg)]" />
            {/* Top accent line */}
            <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />

            <div className="relative text-center max-w-2xl mx-auto">
              <p className="text-xs font-semibold text-secondary tracking-[0.22em] uppercase mb-5">Partner With Us</p>
              <h2 className="text-display-md font-bold tracking-tight text-heading mb-4">{title}</h2>
              <p className="text-base text-gray-500 mb-10 leading-relaxed">{description}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {primaryCTA && <Button href={primaryCTA.href} variant="primary" size="lg">{primaryCTA.label}</Button>}
                {secondaryCTA && <Button href={secondaryCTA.href} variant="ghost" size="lg">{secondaryCTA.label}</Button>}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  