"use client";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Timeline from "@/components/Timeline";
import GlassCard from "@/components/GlassCard";

import { motion } from "framer-motion";
import { HiShieldCheck, HiEye, HiLightningBolt, HiUserGroup, HiAcademicCap, HiGlobe } from "react-icons/hi";

export default function About() {
  const values = [
    { icon: HiShieldCheck, title: "Excellence", desc: "Uncompromising quality in every solution we deliver." },
    { icon: HiEye, title: "Innovation", desc: "Pioneering breakthroughs in signature management technology." },
    { icon: HiLightningBolt, title: "Integrity", desc: "Transparent partnerships built on trust and reliability." },
    { icon: HiUserGroup, title: "Collaboration", desc: "Working closely with defense partners to solve complex challenges." },
  ];
  const leaders = [
    { name: "Dr. Alexander Mercer", role: "Chief Executive Officer", bio: "30+ years in defense technology leadership." },
    { name: "Dr. Sarah Chen", role: "Chief Technology Officer", bio: "Pioneer in metamaterial research and applications." },
    { name: "Marcus Thompson", role: "Chief Operating Officer", bio: "Expert in defense manufacturing and operations." },
    { name: "Dr. Elena Rodriguez", role: "VP of Research", bio: "Leading multi-spectral signature research initiatives." },
  ];
  return (
    <>
      <Hero title={<><span className="gradient-text">About</span> Hyper Stealth</>} subtitle="Pioneering multi-spectral signature management for over 15 years. Our mission is to keep defense platforms invisible in an increasingly observable world." compact />
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center"><HiShieldCheck className="w-6 h-6 text-primary" /></div>
                <h3 className="text-2xl font-bold text-heading">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">To engineer undetectable defense solutions that protect our partners' most critical assets. Through relentless innovation in multi-spectral signature management, we ensure operational superiority in contested environments worldwide.</p>
            </GlassCard>
            <GlassCard delay={0.1}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center"><HiEye className="w-6 h-6 text-secondary" /></div>
                <h3 className="text-2xl font-bold text-heading">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">To be the global leader in signature management technology, setting the standard for stealth solutions that keep defense platforms invisible to current and emerging detection systems across all spectral bands.</p>
            </GlassCard>
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Core Values" title="What Drives Us" description="Our values guide every decision, from research priorities to customer partnerships." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ y: -6 }} className="bg-white border border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-xl flex items-center justify-center mb-4"><value.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="text-lg font-bold text-heading mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Our Journey" title="15 Years of Innovation" description="From founding to global leader in signature management technology." />
          <Timeline />
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Leadership" title="Guided by Experts" description="Our leadership team brings decades of combined experience in defense technology, research, and operations." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-white border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full flex items-center justify-center"><HiUserGroup className="w-10 h-10 text-primary" /></div>
                <h3 className="text-lg font-bold text-heading mb-1">{leader.name}</h3>
                <div className="text-xs text-primary uppercase tracking-wider mb-3">{leader.role}</div>
                <p className="text-sm text-gray-600">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Why Choose Us" title="The Hyper Stealth Advantage" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: HiAcademicCap, title: "Proven Expertise", desc: "15+ years pioneering signature management with 200+ defense partners globally." },
              { icon: HiGlobe, title: "Global Reach", desc: "Deployed across 47 countries with comprehensive support and lifecycle management." },
              { icon: HiLightningBolt, title: "Rapid Innovation", desc: "Continuous R&D investment ensuring cutting-edge solutions for emerging threats." },
            ].map((item, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-heading mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
