"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Products() {
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
  return (
    <>
      <Hero title={<><span className="gradient-text">Our</span> Products</>} subtitle="Comprehensive portfolio of signature management solutions. From individual operator systems to platform-level protection." compact />
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeCategory === cat ? "bg-primary text-heading shadow-glow" : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-heading border border-border"}`}>
                {cat}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Customization" title="Tailored Solutions" description="Every mission is unique. Our engineering team works directly with partners to customize solutions for specific operational requirements." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Mission-Specific", desc: "Solutions engineered for your exact operational environment and threat profile." },
              { title: "Platform Integration", desc: "Seamless integration with existing platforms without compromising performance." },
              { title: "Lifecycle Support", desc: "Comprehensive support from deployment through end-of-life maintenance." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-white border border-border rounded-2xl p-6">
                <h3 className="text-xl font-bold text-heading mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
