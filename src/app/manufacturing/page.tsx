"use client";
import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { manufacturingSteps } from "@/lib/data";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiAcademicCap, HiCube, HiShieldCheck, HiCog, HiGlobe } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);
const iconMap: Record<string, any> = { research: HiAcademicCap, selection: HiCube, testing: HiShieldCheck, production: HiCog, quality: HiShieldCheck, deployment: HiGlobe };

export default function Manufacturing() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".manufacturing-step");
      steps.forEach((step) => {
        gsap.fromTo(step, { opacity: 0, y: 50, scale: 0.95 }, {
          opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 80%", end: "top 40%", scrub: 1 },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <Hero title={<><span className="gradient-text">Precision</span> Manufacturing</>} subtitle="State-of-the-art production facilities delivering defense-grade quality with unmatched consistency and scalability." compact />
      <section ref={containerRef} className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Production Process" title="From Research to Deployment" description="Our vertically integrated manufacturing process ensures quality control at every stage, from material selection through global deployment." />
          <div className="relative">
            <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {manufacturingSteps.map((step, i) => {
                const Icon = iconMap[step.icon] || HiCog;
                return (
                  <div key={step.id} className="manufacturing-step relative bg-white border border-border rounded-2xl p-8 hover:border-primary/30 transition-all">
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-heading text-sm font-bold">{i + 1}</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-2xl flex items-center justify-center mb-5"><Icon className="w-8 h-8 text-primary" /></div>
                    <h3 className="text-xl font-bold text-heading mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    <div className="mt-5 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-gray-50 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: i * 0.2 }} className="h-full bg-gradient-to-r from-primary to-secondary" />
                      </div>
                      <span className="text-xs text-muted">{Math.round(((i + 1) / manufacturingSteps.length) * 100)}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Quality Assurance" title="Defense-Grade Standards" description="Every product undergoes rigorous testing to meet or exceed military specifications." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "MIL-STD Compliance", desc: "Full compliance with military standards for environmental, mechanical, and performance requirements." },
              { title: "ISO 9001 Certified", desc: "Internationally recognized quality management system ensuring consistent production excellence." },
              { title: "NADCAP Accredited", desc: "Special processes accreditation for coatings, materials, and advanced manufacturing techniques." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-white border border-border rounded-2xl p-6">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mb-4"><HiShieldCheck className="w-6 h-6 text-secondary" /></div>
                <h3 className="text-lg font-bold text-heading mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
