"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import TechnologyCard from "@/components/TechnologyCard";
import CTA from "@/components/CTA";
import GlassCard from "@/components/GlassCard";
import WorldMap from "@/components/WorldMap";
import Timeline from "@/components/Timeline";
import BlueprintGrid from "@/components/BlueprintGrid";
import { stats, technologies, products, applications, researchAreas } from "@/lib/data";
import { HiShieldCheck, HiLightningBolt, HiCube, HiGlobe, HiAcademicCap, HiCog } from "react-icons/hi";
import Link from "next/link";

function StatCard({ value, suffix, label, index }: { value: string; suffix?: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white border border-border rounded-[var(--radius-card)] p-8 text-center hover:border-gray-300 hover:shadow-soft transition-all duration-200"
    >
      <div className="text-3xl lg:text-4xl font-bold gradient-text-blue mb-1 tabular-nums">
        {value}{suffix && <span className="text-secondary">{suffix}</span>}
      </div>
      <div className="text-xs text-gray-400 uppercase tracking-[0.15em] font-medium">{label}</div>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, desc, index }: { icon: React.ElementType; title: string; desc: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white border border-border rounded-[var(--radius-card)] p-7 hover:border-gray-300 hover:shadow-soft transition-all duration-200 group"
    >
      <div className="w-10 h-10 bg-primary/6 border border-primary/12 rounded-xl flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-base font-semibold text-heading mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Hero
        title={<><span className="gradient-text">Engineering</span> the Invisible.</>}
        subtitle="Advanced Multi-Spectral Signature Management for Modern Defense. Reducing detectability across radar, infrared, thermal, and visible spectrums."
        primaryCTA={{ label: "Explore Technology", href: "/technology" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />

      {/* ── About / Stats ── */}
      <section className="relative py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="About Us"
            title="Redefining Stealth for the Modern Battlefield"
            description="For over 15 years, Hyper Stealth Technologies has pioneered multi-spectral signature management solutions that keep defense platforms invisible to modern detection systems."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, i) => (
              <StatCard key={i} value={stat.value} suffix={stat.suffix} label={stat.label} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: HiShieldCheck, title: "Multi-Spectral", desc: "Complete coverage across radar, IR, thermal, UV, and visible spectrums." },
              { icon: HiLightningBolt, title: "Rapid Deployment", desc: "Field-deployable systems ready for immediate operational use." },
              { icon: HiCube, title: "Modular Design", desc: "Scalable solutions adaptable to any platform or mission profile." },
            ].map((item, i) => <FeatureCard key={i} icon={item.icon} title={item.title} desc={item.desc} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── Company History Timeline ── */}
      <section className="relative py-32 px-6 lg:px-10 bg-surface overflow-hidden">
        <BlueprintGrid />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionTitle
              eyebrow="Company History"
              title="Two Decades of Invisible Engineering"
              description="From a small research team to a globally trusted defense technology partner — a relentless pursuit of operational invisibility."
              align="left"
            />
            <Timeline />
          </div>
        </div>
      </section>

      {/* ── Core Technology ── */}
      <section className="relative py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Core Technology"
            title="Multi-Spectral Signature Management"
            description="Our proprietary technologies operate across the entire electromagnetic spectrum, providing unmatched protection against modern detection systems."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {technologies.slice(0, 4).map((tech, i) => <TechnologyCard key={tech.id} tech={tech} index={i} />)}
          </div>
          <div className="mt-10 text-center">
            <Link href="/technology" className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary-dark transition-colors duration-150">
              View All Technologies
            </Link>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="relative py-32 px-6 lg:px-10 bg-surface overflow-hidden">
        <BlueprintGrid />
        <div className="relative max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Our Products"
            title="Battle-Tested Solutions"
            description="Comprehensive portfolio of signature management systems designed for the most demanding defense applications."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.slice(0, 3).map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary-dark transition-colors duration-150">
              Explore Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ── Applications ── */}
      <section className="relative py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Applications"
            title="Across All Domains"
            description="Our solutions protect platforms and personnel across land, sea, air, and critical infrastructure."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {applications.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-white border border-border rounded-[var(--radius-card)] p-5 hover:border-gray-300 hover:shadow-soft transition-all duration-200"
              >
                <div className="w-10 h-10 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <HiGlobe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-heading mb-1.5 group-hover:text-primary transition-colors duration-150">{app.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research ── */}
      <section className="relative py-32 px-6 lg:px-10 bg-surface overflow-hidden">
        <BlueprintGrid />
        <div className="relative max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Research & Innovation"
            title="Pushing the Boundaries"
            description="Our research labs drive continuous innovation in materials science, electromagnetic engineering, and thermal management."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchAreas.slice(0, 3).map((area, i) => (
              <GlassCard key={area.id} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiAcademicCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-heading mb-1.5">{area.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Operations (World Map) ── */}
      <section className="relative py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Global Operations"
            title="Worldwide Mission Coverage"
            description="Active deployments across six continents, protecting allied platforms in every operational theater."
          />
          <WorldMap />
        </div>
      </section>

      {/* ── Manufacturing ── */}
      <section className="relative py-32 px-6 lg:px-10 bg-surface overflow-hidden">
        <BlueprintGrid />
        <div className="relative max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Manufacturing"
            title="Precision at Scale"
            description="State-of-the-art facilities delivering defense-grade quality with unmatched consistency."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { icon: HiAcademicCap, label: "Research" },
              { icon: HiCube, label: "Materials" },
              { icon: HiShieldCheck, label: "Testing" },
              { icon: HiCog, label: "Production" },
              { icon: HiShieldCheck, label: "Quality" },
              { icon: HiGlobe, label: "Deployment" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-border rounded-[var(--radius-card)] p-5 text-center hover:border-gray-300 transition-all duration-200"
              >
                <step.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-xs font-medium text-gray-500 uppercase tracking-[0.12em]">{step.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Engineer the Invisible?"
        description="Partner with Hyper Stealth Technologies for next-generation signature management solutions tailored to your mission requirements."
        primaryCTA={{ label: "Contact Our Team", href: "/contact" }}
        secondaryCTA={{ label: "View Products", href: "/products" }}
      />
    </>
  );
}