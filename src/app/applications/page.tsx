"use client";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { applications } from "@/lib/data";
import { motion } from "framer-motion";
import { HiShieldCheck, HiLightningBolt, HiCube, HiUserGroup, HiGlobe } from "react-icons/hi";

const iconMap: Record<string, any> = { land: HiCube, air: HiLightningBolt, navy: HiGlobe, special: HiUserGroup, infrastructure: HiShieldCheck };

export default function Applications() {
  return (
    <>
      <Hero title={<><span className="gradient-text">Defense</span> Applications</>} subtitle="Comprehensive signature management across all operational domains. Protecting platforms, personnel, and critical infrastructure." compact />
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Operational Domains" title="Multi-Domain Protection" description="Our solutions adapt to the unique requirements of each operational environment while maintaining consistent performance." />
          <div className="space-y-8">
            {applications.map((app, i) => {
              const Icon = iconMap[app.icon] || HiShieldCheck;
              return (
                <motion.div key={app.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="group relative bg-white border border-border rounded-3xl p-8 md:p-12 hover:border-primary/30 transition-all overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                  <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="relative aspect-square bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-2xl overflow-hidden border border-border">
                        <div className="absolute inset-0 grid-bg opacity-30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="w-32 h-32 border-2 border-primary/30 rounded-full flex items-center justify-center">
                              <div className="w-20 h-20 border border-primary/50 rounded-full flex items-center justify-center"><Icon className="w-10 h-10 text-primary" /></div>
                            </div>
                            <div className="absolute inset-0 animate-radar-sweep">
                              <div className="w-32 h-32" style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(59, 130, 246, 0.2) 30deg, transparent 60deg)", borderRadius: "50%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-8 h-px bg-primary" />
                        <span className="text-xs text-primary tracking-[0.2em] uppercase font-medium">Domain {String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-heading mb-4 group-hover:text-primary transition-colors">{app.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6 text-lg">{app.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {app.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 border border-border rounded-lg px-3 py-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />{feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
