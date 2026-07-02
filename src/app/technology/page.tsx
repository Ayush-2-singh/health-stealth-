"use client";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import TechnologyCard from "@/components/TechnologyCard";
import { technologies } from "@/lib/data";
import { motion } from "framer-motion";
import { HiLightningBolt } from "react-icons/hi";

export default function Technology() {
  return (
    <>
      <Hero title={<><span className="gradient-text">Our</span> Technology</>} subtitle="Multi-spectral signature management across the entire electromagnetic spectrum. From radar to thermal, we engineer invisibility." compact />
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Spectral Coverage" title="Complete Electromagnetic Protection" description="Our technologies operate across eight distinct spectral bands, providing comprehensive protection against all modern detection systems." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => <TechnologyCard key={tech.id} tech={tech} index={i} />)}
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Technical Excellence" title="Engineering at the Frontier" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5"><HiLightningBolt className="w-6 h-6 text-primary" /><h3 className="text-2xl font-bold text-white">Metamaterial Innovation</h3></div>
              <p className="text-gray-400 leading-relaxed mb-6">Our proprietary metamaterial structures manipulate electromagnetic waves at the sub-wavelength scale, achieving absorption and scattering characteristics impossible with conventional materials.</p>
              <div className="space-y-3">
                {["Sub-wavelength resonance", "Tunable absorption bands", "Wide-angle performance", "Lightweight construction"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-primary rounded-full" />{item}</div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5"><HiLightningBolt className="w-6 h-6 text-secondary" /><h3 className="text-2xl font-bold text-white">Adaptive Systems</h3></div>
              <p className="text-gray-400 leading-relaxed mb-6">AI-driven adaptive camouflage systems that respond in real-time to changing environments, threat vectors, and operational requirements.</p>
              <div className="space-y-3">
                {["Real-time environmental sensing", "Dynamic signature adjustment", "Multi-threat response", "Autonomous operation"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-secondary rounded-full" />{item}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Performance" title="Proven Results" description="Our technologies deliver measurable, repeatable performance across all operational scenarios." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "99.7%", label: "Radar Signature Reduction" },
              { value: "95%", label: "IR Signature Suppression" },
              { value: "0.01m²", label: "Residual RCS" },
              { value: "< 3dB", label: "Detection Threshold" },
            ].map((metric, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text-blue mb-2">{metric.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
