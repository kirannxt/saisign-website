"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  return (
    <div className="mb-10">
      {/* Category heading row */}
      <div className="flex items-center justify-between mb-4">
        <h3
          className="text-lg font-semibold text-[#091322]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {category.label}
        </h3>
      </div>

      {/* Slider */}
      <div className="flex items-center gap-3">
        {/* Prev */}
        <button
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#0080ba] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#006fa3] transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Cards viewport */}
        <div className="flex-1 overflow-hidden">
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${Math.min(VISIBLE, category.products.length)}, minmax(0, 1fr))`,
            }}
          >
            {category.products.slice(idx, idx + VISIBLE).map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={() => setIdx((i) => Math.min(max, i + 1))}
          disabled={idx >= max}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#0080ba] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#006fa3] transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  const [selected, setSelected] = useState<Product | null>(null);
  const categories = (productsData as unknown as { categories: Category[] })
    .categories;

  return (
    <section id="products" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#091322]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Products
          </h2>
        </motion.div>

        {/* Category sliders */}
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
          >
            <CategorySlider category={cat} onViewDetails={setSelected} />
          </motion.div>
        ))}
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
