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
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-surface via-white to-secondary/5 border border-border rounded-3xl p-12 md:p-16 overflow-hidden shadow-navy"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-display-md font-bold tracking-tight mb-6 text-heading">{title}</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">{description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {primaryCTA && <Button href={primaryCTA.href} variant="primary" size="lg">{primaryCTA.label}</Button>}
                {secondaryCTA && <Button href={secondaryCTA.href} variant="ghost" size="lg">{secondaryCTA.label}</Button>}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  