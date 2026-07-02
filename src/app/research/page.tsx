"use client";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";
import { researchAreas } from "@/lib/data";
import { motion } from "framer-motion";
import { HiAcademicCap, HiLightningBolt, HiCube, HiChip, HiGlobe } from "react-icons/hi";

const iconMap: Record<string, any> = { labs: HiAcademicCap, innovation: HiLightningBolt, materials: HiCube, electromagnetic: HiChip, thermal: HiGlobe };

export default function Research() {
  return (
    <>
      <Hero title={<><span className="gradient-text">Research</span> & Innovation</>} subtitle="Pushing the boundaries of signature management through breakthrough research in materials science, electromagnetic engineering, and thermal systems." compact />
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Research Divisions" title="Five Pillars of Innovation" description="Our research organization spans five core disciplines, each driving advancement in signature management technology." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, i) => {
              const Icon = iconMap[area.icon] || HiAcademicCap;
              return (
                <GlassCard key={area.id} delay={i * 0.1}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-xl flex items-center justify-center"><Icon className="w-6 h-6 text-primary" /></div>
                    <h3 className="text-xl font-bold text-white">{area.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{area.description}</p>
                  <div className="space-y-2">
                    {area.focus.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-primary rounded-full" />{item}</div>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="By the Numbers" title="Research Impact" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "120+", label: "Patents Filed" },
              { value: "85", label: "Research Scientists" },
              { value: "$45M", label: "Annual R&D Investment" },
              { value: "30+", label: "University Partners" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text-blue mb-2">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Publications" title="Recent Research" description="Selected publications from our research teams in peer-reviewed journals and conferences." />
          <div className="space-y-4">
            {[
              { title: "Wideband Metamaterial Absorbers for Multi-Spectral Signature Management", journal: "Journal of Defense Materials", year: "2025" },
              { title: "Adaptive Thermal Camouflage Using Phase-Change Materials", journal: "Advanced Materials Today", year: "2025" },
              { title: "AI-Driven Real-Time Signature Optimization", journal: "IEEE Transactions on Defense Systems", year: "2024" },
              { title: "Nanostructured Coatings for UV Signature Suppression", journal: "Defense Technology Review", year: "2024" },
            ].map((pub, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <h4 className="text-white font-medium mb-1">{pub.title}</h4>
                  <div className="text-sm text-gray-400">{pub.journal}</div>
                </div>
                <div className="text-sm text-primary font-mono">{pub.year}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
