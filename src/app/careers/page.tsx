"use client";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { careers } from "@/lib/data";
import { motion } from "framer-motion";
import { HiLocationMarker, HiBriefcase, HiClock, HiArrowRight } from "react-icons/hi";

export default function Careers() {
  const benefits = [
    { title: "Competitive Compensation", desc: "Industry-leading salary and performance bonuses." },
    { title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage." },
    { title: "Retirement Planning", desc: "401(k) matching and financial planning support." },
    { title: "Professional Development", desc: "Continuous learning and career advancement opportunities." },
    { title: "Flexible Work", desc: "Hybrid work arrangements and flexible schedules." },
    { title: "Mission Impact", desc: "Contribute to critical national defense capabilities." },
  ];
  return (
    <>
      <Hero title={<><span className="gradient-text">Join</span> Our Team</>} subtitle="Build the future of defense technology with world-class engineers, scientists, and innovators. Your expertise shapes national security." compact />
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Our Culture" title="Where Innovation Thrives" description="We foster a culture of excellence, collaboration, and continuous learning. Our teams tackle the most challenging problems in defense technology." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Innovation First", desc: "We encourage bold ideas and calculated risk-taking to drive breakthrough solutions." },
              { title: "Collaborative Spirit", desc: "Cross-functional teams working together to solve complex multi-disciplinary challenges." },
              { title: "Growth Mindset", desc: "Continuous learning through mentorship, training, and challenging assignments." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-4"><span className="text-2xl font-bold gradient-text-blue">{String(i + 1).padStart(2, "0")}</span></div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Open Positions" title="Current Opportunities" description="Explore our open roles and find your place in shaping the future of defense technology." />
          <div className="space-y-4">
            {careers.map((job, i) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} whileHover={{ x: 4 }} className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400"><HiBriefcase className="w-4 h-4 text-primary" />{job.department}</div>
                      <div className="flex items-center gap-2 text-gray-400"><HiLocationMarker className="w-4 h-4 text-primary" />{job.location}</div>
                      <div className="flex items-center gap-2 text-gray-400"><HiClock className="w-4 h-4 text-primary" />{job.type}</div>
                    </div>
                  </div>
                  <Button href={`/careers#${job.id}`} variant="ghost" size="sm">Apply Now <HiArrowRight className="w-4 h-4" /></Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Benefits" title="What We Offer" description="Comprehensive benefits package designed to support your professional and personal well-being." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-lg flex items-center justify-center mb-4"><span className="text-primary font-bold">{String(i + 1).padStart(2, "0")}</span></div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
