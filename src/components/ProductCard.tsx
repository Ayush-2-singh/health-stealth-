"use client";
  import { motion } from "framer-motion";
  import { Product } from "@/types";
  import { HiArrowRight } from "react-icons/hi";
  import Link from "next/link";

  interface ProductCardProps { product: Product; index: number; }

  export default function ProductCard({ product, index }: ProductCardProps) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8 }}
        className="group relative bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-navy transition-all duration-500 shadow-card"
      >
        <div className="relative h-56 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-20 h-20 border-2 border-primary/20 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 border border-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                </div>
              </div>
              <div className="absolute inset-0 animate-radar-sweep">
                <div className="w-20 h-20" style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(37, 99, 235, 0.2) 30deg, transparent 60deg)", borderRadius: "50%" }} />
              </div>
            </div>
          </div>
          <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm border border-border rounded-full">
            <span className="text-xs text-gray-600 font-medium">{product.category}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">{product.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">{product.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {product.features.slice(0, 3).map((feature) => (
              <span key={feature} className="px-2.5 py-1 text-xs bg-gray-50 border border-border rounded-md text-gray-600">{feature}</span>
            ))}
          </div>
          <Link href={`/products#${product.id}`} className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary-dark font-medium group/link">
            Learn More <HiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    );
  }
  