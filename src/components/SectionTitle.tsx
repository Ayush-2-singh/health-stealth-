"use client";
  import { motion } from "framer-motion";

  interface SectionTitleProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
  }

  export default function SectionTitle({ eyebrow, title, description, align = "center" }: SectionTitleProps) {
    const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`max-w-3xl mb-16 ${alignClass}`}
      >
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-secondary" />
            <span className="text-xs text-secondary tracking-[0.2em] uppercase font-medium">{eyebrow}</span>
          </div>
        )}
        <h2 className="text-display-md font-bold tracking-tight mb-4 text-heading">{title}</h2>
        {description && <p className="text-lg text-gray-600 leading-relaxed">{description}</p>}
      </motion.div>
    );
  }
  