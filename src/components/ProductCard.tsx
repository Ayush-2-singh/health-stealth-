"use client";
  import { motion } from "framer-motion";
  import { Product } from "@/types";
  import { HiArrowRight } from "react-icons/hi";
  import Link from "next/link";

  interface ProductCardProps { product: Product; index: number; }

  export default function ProductCard({ product, index }: ProductCardProps) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="group bg-white border border-border rounded-[var(--radius-card)] overflow-hidden hover:border-gray-300 hover:shadow-card transition-all duration-200 shadow-soft"
      >
        {/* Image / visual area */}
        <div className="relative h-48 bg-surface overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border border-primary/15 rounded-full flex items-center justify-center bg-white/80">
              <div className="w-8 h-8 border border-secondary/30 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[11px] font-medium text-gray-600 bg-white border border-border rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-base font-semibold text-heading mb-2 group-hover:text-primary transition-colors duration-150">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">{product.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {product.features.slice(0, 3).map((feature) => (
              <span key={feature} className="px-2 py-0.5 text-[11px] text-gray-500 bg-surface border border-border rounded-md">
                {feature}
              </span>
            ))}
          </div>
          <Link
            href={`/products#${product.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary-dark transition-colors duration-150 group/link"
          >
            Learn More
            <HiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-150" />
          </Link>
        </div>
      </motion.div>
    );
  }
  