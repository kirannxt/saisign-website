"use client";
import { ArrowUpRight } from "lucide-react";
import { Product } from "./ProductModal";

interface Props {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: Props) {
  const handleClick = () => {
    if (product.hasDescription) onViewDetails(product);
  };

  return (
    <div
      className={`group flex flex-col justify-between bg-white/[0.045] border border-white/10 rounded-xl p-3.5 text-center backdrop-blur-sm transition-all duration-300 ${
        product.hasDescription
          ? "cursor-pointer hover:border-[#38BDF8]/50 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-[#2563EB]/20 hover:-translate-y-1"
          : "hover:border-white/20 hover:bg-white/[0.06]"
      }`}
      onClick={handleClick}
      role={product.hasDescription ? "button" : undefined}
      tabIndex={product.hasDescription ? 0 : undefined}
      onKeyDown={(e) =>
        product.hasDescription && e.key === "Enter" && handleClick()
      }
      aria-label={
        product.hasDescription ? `View details for ${product.name}` : undefined
      }
    >
      <div className="w-full rounded-lg bg-white/95 p-3 flex items-center justify-center overflow-hidden shadow-inner">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="mt-3.5 flex flex-col items-center gap-1.5 px-1">
        <p className="text-sm font-medium text-slate-100 leading-snug group-hover:text-white transition-colors">
          {product.name}
        </p>
        {product.hasDescription && (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#38BDF8]/85 group-hover:text-[#38BDF8]">
            View Specs
            <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        )}
      </div>
    </div>
  );
}
