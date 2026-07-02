"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiShieldCheck } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); };
  return (
    <>
      <Hero title={<><span className="gradient-text">Get</span> in Touch</>} subtitle="Connect with our team to discuss your signature management requirements. Our experts are ready to support your mission." compact />
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <SectionTitle eyebrow="Contact" title="Let's Connect" description="Reach out to discuss partnership opportunities, technical inquiries, or general information." align="left" />
              <div className="space-y-4">
                {[
                  { icon: HiMail, label: "Email", value: "contact@hyperstealth.tech" },
                  { icon: HiPhone, label: "Phone", value: "+1 (555) 0100-STEALTH" },
                  { icon: HiLocationMarker, label: "Headquarters", value: "Classified Location" },
                  { icon: HiShieldCheck, label: "Security", value: "ITAR Registered" },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-4 bg-white border border-border rounded-xl p-4">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0"><item.icon className="w-5 h-5 text-primary" /></div>
                    <div><div className="text-xs text-muted uppercase tracking-wider mb-1">{item.label}</div><div className="text-heading font-medium">{item.value}</div></div>
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="text-xs text-muted uppercase tracking-wider mb-3">Follow Us</div>
                <div className="flex gap-3">
                  {[FaLinkedin, FaTwitter, FaYoutube].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-gray-50 hover:bg-primary/20 border border-border hover:border-primary/50 rounded-lg flex items-center justify-center text-gray-600 hover:text-heading transition-all" aria-label="Social link"><Icon className="w-4 h-4" /></a>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video bg-white border border-border rounded-2xl overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <HiLocationMarker className="w-12 h-12 text-primary mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Secure Location</div>
                    <div className="text-xs text-muted">Access by appointment only</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-heading placeholder-gray-400 focus:border-primary focus:outline-none transition-colors" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Email</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-heading placeholder-gray-400 focus:border-primary focus:outline-none transition-colors" placeholder="john@organization.mil" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Organization</label>
                    <input type="text" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-heading placeholder-gray-400 focus:border-primary focus:outline-none transition-colors" placeholder="Organization name" />
                  </div>
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Subject</label>
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-heading focus:border-primary focus:outline-none transition-colors">
                      <option value="">Select subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="technical">Technical Question</option>
                      <option value="product">Product Information</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted uppercase tracking-wider mb-2">Message</label>
                  <textarea required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-heading placeholder-gray-400 focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell us about your requirements..." />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-muted"><HiShieldCheck className="inline w-4 h-4 text-secondary mr-1" />Your information is secure and confidential.</div>
                  <Button type="submit" variant="primary" size="lg">{submitted ? "✓ Sent" : "Send Message"}</Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
