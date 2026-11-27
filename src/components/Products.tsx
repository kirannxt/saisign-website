"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import productsData from "@/data/products.json";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import type { Product } from "./ProductModal";

interface Category {
  id: string;
  label: string;
  products: Product[];
}

const VISIBLE = 4;

function CategorySlider({
  category,
  onViewDetails,
}: {
  category: Category;
  onViewDetails: (p: Product) => void;
}) {
  const [idx, setIdx] = useState(0);
  const max = Math.max(0, category.products.length - VISIBLE);
  const start = idx + 1;
  const end = Math.min(idx + VISIBLE, category.products.length);

  return (
    <div
      id={category.id}
      className="scroll-mt-24 mb-12 last:mb-0 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6 backdrop-blur-sm"
    >
      {/* Category heading row */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <span className="h-6 w-1 rounded-full bg-gradient-to-b from-[#38BDF8] via-[#2563EB] to-[#6366F1]" />
          <h3
            className="text-lg sm:text-xl font-semibold text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {category.label}
          </h3>
          <span className="rounded-full border border-[#38BDF8]/25 bg-[#38BDF8]/10 px-2.5 py-0.5 text-xs font-medium text-[#38BDF8]">
            {category.products.length} items
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 hidden sm:inline">
            Showing {start}–{end} of {category.products.length}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
              disabled={idx === 0}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] text-white transition-all duration-200 hover:border-[#38BDF8]/50 hover:bg-gradient-to-br hover:from-[#2563EB] hover:to-[#0EA5E9] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/[0.06] disabled:hover:border-white/15"
              aria-label={`Previous ${category.label}`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIdx((i) => Math.min(max, i + 1))}
              disabled={idx >= max}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] text-white transition-all duration-200 hover:border-[#38BDF8]/50 hover:bg-gradient-to-br hover:from-[#2563EB] hover:to-[#0EA5E9] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/[0.06] disabled:hover:border-white/15"
              aria-label={`Next ${category.label}`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards viewport */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {category.products.slice(idx, idx + VISIBLE).map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  const [selected, setSelected] = useState<Product | null>(null);
  const categories = (productsData as unknown as { categories: Category[] })
    .categories;

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-gradient-to-b from-[#0E1B36] via-[#091325] to-[#060B17] py-20 lg:py-28 border-t border-white/[0.06]"
    >
      {/* Matching ambient cobalt / cyan / indigo lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-16 -right-32 h-96 w-96 rounded-full bg-[#38BDF8]/12 blur-[130px]" />
        <div className="absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-[#2563EB]/15 blur-[130px]" />
        <div className="absolute bottom-12 right-1/3 h-80 w-80 rounded-full bg-[#6366F1]/12 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#38BDF8] mb-4">
              <Layers className="h-3.5 w-3.5 text-[#818CF8]" />
              Product Catalog
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#818CF8] bg-clip-text text-transparent">
                Products
              </span>
            </h2>
          </div>

          {/* Quick category jump pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-all duration-200 hover:border-[#38BDF8]/50 hover:bg-[#2563EB]/20 hover:text-white"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Category sliders */}
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="mb-8 last:mb-0"
          >
            <CategorySlider category={cat} onViewDetails={setSelected} />
          </motion.div>
        ))}
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
