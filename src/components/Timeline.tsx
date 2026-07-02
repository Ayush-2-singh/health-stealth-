"use client";
import { motion } from "framer-motion";

interface TimelineItem { year: string; title: string; description: string; }
interface TimelineProps { items: TimelineItem[]; horizontal?: boolean; }

export default function Timeline({ items, horizontal = false }: TimelineProps) {
  if (horizontal) {
    return (
      <div className="relative overflow-x-auto no-scrollbar">
        <div className="flex gap-6 min-w-max px-4 pb-4">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="relative w-80 flex-shrink-0">
              {i < items.length - 1 && <div className="absolute top-6 left-full w-6 h-px bg-gradient-to-r from-primary/50 to-transparent" />}
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white font-bold">{String(i + 1).padStart(2, "0")}</div>
                  <span className="text-primary font-mono text-sm">{item.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />
      <div className="space-y-12">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className={`relative flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background z-10" />
            <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <div className="text-primary font-mono text-sm mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
