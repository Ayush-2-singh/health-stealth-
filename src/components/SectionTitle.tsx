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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl mb-14 ${alignClass}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold text-secondary tracking-[0.22em] uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-display-md font-bold tracking-tight text-heading mb-4">{title}</h2>
      {description && (
        <p className="text-base text-gray-700 leading-relaxed font-normal">{description}</p>
      )}
    </motion.div>
  );
}
