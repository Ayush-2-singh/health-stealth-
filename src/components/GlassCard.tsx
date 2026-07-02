import { ReactNode } from "react";
  import { motion } from "framer-motion";

  interface GlassCardProps { children: ReactNode; className?: string; delay?: number; }

  export default function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`bg-white border border-border rounded-[var(--radius-card)] p-6 shadow-soft hover:shadow-card hover:border-gray-300 transition-all duration-200 ${className}`}
      >
        {children}
      </motion.div>
    );
  }
  