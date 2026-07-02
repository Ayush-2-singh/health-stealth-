import { ReactNode } from "react";
  import { motion } from "framer-motion";

  interface GlassCardProps { children: ReactNode; className?: string; delay?: number; }

  export default function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className={`relative bg-white border border-border rounded-2xl p-6 shadow-card hover:border-primary/20 hover:shadow-navy transition-all duration-500 ${className}`}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        {children}
      </motion.div>
    );
  }
  