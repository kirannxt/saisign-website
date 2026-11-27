"use client";
import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import HeroWallpaper from "@/components/HeroWallpaper";

const easeOut: Easing = "easeOut";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: easeOut },
  }),
};

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#060B17]"
    >
      <HeroWallpaper />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 pt-32 w-full">
        <div className="max-w-3xl flex flex-col gap-7">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/35 bg-[#0B1428]/70 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-widest text-[#38BDF8] uppercase shadow-lg shadow-[#2563EB]/10">
              <Sparkles className="h-3.5 w-3.5 text-[#818CF8]" />
              Innovation | Quality | Reliability
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(6,11,23,0.65)]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Innovative Technology for a{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#818CF8] bg-clip-text text-transparent">
              Smarter Tomorrow.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg sm:text-xl text-slate-200/85 leading-relaxed max-w-xl"
          >
            Delivering reliable, high-performance printing and digital signage
            solutions engineered for your evolving business needs.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <button
              onClick={scrollToProducts}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#0EA5E9] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/35 transition-all duration-300 hover:shadow-[#38BDF8]/40 hover:scale-105 active:scale-100"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="#why-us"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] backdrop-blur-md px-6 py-3.5 text-sm font-semibold text-white/90 transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-white/[0.12] hover:text-white"
            >
              Why Choose Us
            </a>
          </motion.div>

          {/* Glassmorphic highlight strip over wallpaper */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 max-w-xl"
          >
            <div className="rounded-xl border border-white/15 bg-[#0B1428]/65 backdrop-blur-md px-4 py-3">
              <p className="text-xs text-slate-300/75">Product Categories</p>
              <p
                className="text-lg font-bold text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                6+ Solutions
              </p>
            </div>
            <div className="rounded-xl border border-[#38BDF8]/25 bg-[#2563EB]/20 backdrop-blur-md px-4 py-3">
              <p className="text-xs text-sky-200/85">Trusted By</p>
              <p
                className="text-lg font-bold text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                500+ Clients
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-xl border border-[#818CF8]/25 bg-[#6366F1]/15 backdrop-blur-md px-4 py-3">
              <p className="text-xs text-indigo-200/85">Engineered For</p>
              <p
                className="text-lg font-bold text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                24/7 Reliability
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
