"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import TechnologyCard from "@/components/TechnologyCard";
import CTA from "@/components/CTA";
import GlassCard from "@/components/GlassCard";
import { stats, technologies, products, applications, researchAreas } from "@/lib/data";
import { HiShieldCheck, HiLightningBolt, HiCube, HiGlobe, HiAcademicCap, HiCog } from "react-icons/hi";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero
        title={<><span className="gradient-text">Engineering</span> the Invisible.</>}
        subtitle="Advanced Multi-Spectral Signature Management for Modern Defense. Reducing detectability across radar, infrared, thermal, and visible spectrums."
        primaryCTA={{ label: "Explore Technology", href: "/technology" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="About Us" title="Redefining Stealth for the Modern Battlefield" description="For over 15 years, Hyper Stealth Technologies has pioneered multi-spectral signature management solutions that keep defense platforms invisible to modern detection systems." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors">
                <div className="text-4xl md:text-5xl font-bold gradient-text-blue mb-2">{stat.value}<span className="text-primary">{stat.suffix}</span></div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: HiShieldCheck, title: "Multi-Spectral", desc: "Complete coverage across radar, IR, thermal, UV, and visible spectrums." },
              { icon: HiLightningBolt, title: "Rapid Deployment", desc: "Field-deployable systems ready for immediate operational use." },
              { icon: HiCube, title: "Modular Design", desc: "Scalable solutions adaptable to any platform or mission profile." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Core Technology" title="Multi-Spectral Signature Management" description="Our proprietary technologies operate across the entire electromagnetic spectrum, providing unmatched protection against modern detection systems." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.slice(0, 4).map((tech, i) => <TechnologyCard key={tech.id} tech={tech} index={i} />)}
          </div>
          <div className="text-center mt-12">
            <Link href="/technology" className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors">View All Technologies <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Our Products" title="Battle-Tested Solutions" description="Comprehensive portfolio of signature management systems designed for the most demanding defense applications." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors">Explore Full Catalog <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Applications" title="Across All Domains" description="Our solutions protect platforms and personnel across land, sea, air, and critical infrastructure." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {applications.map((app, i) => (
              <motion.div key={app.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -4 }} className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <HiGlobe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{app.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Research & Innovation" title="Pushing the Boundaries" description="Our research labs drive continuous innovation in materials science, electromagnetic engineering, and thermal management." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.slice(0, 3).map((area, i) => (
              <GlassCard key={area.id} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiAcademicCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Manufacturing" title="Precision at Scale" description="State-of-the-art manufacturing facilities delivering defense-grade quality with unmatched consistency." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: HiAcademicCap, label: "Research" },
              { icon: HiCube, label: "Materials" },
              { icon: HiShieldCheck, label: "Testing" },
              { icon: HiCog, label: "Production" },
              { icon: HiShieldCheck, label: "Quality" },
              { icon: HiGlobe, label: "Deployment" },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors">
                <step.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-xs text-gray-400 uppercase tracking-wider">{step.label}</div>
                {i < 5 && <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-primary/30" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Ready to Engineer the Invisible?" description="Partner with Hyper Stealth Technologies for next-generation signature management solutions tailored to your mission requirements." primaryCTA={{ label: "Contact Our Team", href: "/contact" }} secondaryCTA={{ label: "View Products", href: "/products" }} />
    </>
  );
}
