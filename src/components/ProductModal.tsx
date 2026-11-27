"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface Product {
  name: string;
  image: string;
  descriptionImage?: string;
  hasDescription: boolean;
}

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  const imgSrc =
    product?.hasDescription && product.descriptionImage
      ? product.descriptionImage
      : product?.image;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#060B17]/85 backdrop-blur-md"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative bg-[#0B1428] border border-white/15 rounded-2xl shadow-2xl shadow-[#2563EB]/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Accent top border */}
            <div className="h-1 w-full bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#38BDF8]" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/10">
              <h2
                className="text-base font-semibold text-white leading-snug pr-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {product.name}
              </h2>
              <button
                ref={closeRef}
                onClick={onClose}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 hover:text-[#38BDF8] hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Image */}
            <div className="p-5 text-center">
              <div className="rounded-xl bg-white p-3">
                <img
                  src={imgSrc}
                  alt={product.name}
                  className="w-full max-w-lg mx-auto rounded-lg object-contain"
                  style={{ maxHeight: "68vh" }}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
