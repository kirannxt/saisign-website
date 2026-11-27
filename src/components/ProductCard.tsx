"use client";
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
      className={`flex flex-col items-center bg-[#f8f8f8] border border-[#ddd] rounded-md shadow-sm p-4 text-center ${
        product.hasDescription
          ? "cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          : ""
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
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto object-contain rounded"
        style={{ minHeight: "120px", maxHeight: "180px" }}
        loading="lazy"
      />
      <p className="mt-4 text-sm font-medium text-[#091322] leading-snug">
        {product.name}
      </p>
    </div>
  );
}
