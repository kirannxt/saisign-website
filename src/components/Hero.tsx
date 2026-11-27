"use client";
import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#091322]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#2563EB]/20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-[#38BDF8]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#38BDF8] uppercase">
                Innovation | Quality | Reliability
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Innovative Technology for a{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                Smarter Tomorrow.
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-lg text-white/70 leading-relaxed max-w-lg"
            >
              Delivering reliable, high-performance products designed for your
              evolving business needs.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <button
                onClick={scrollToProducts}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/30 transition-all duration-300 hover:shadow-[#2563EB]/50 hover:scale-105 active:scale-100"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2563EB]/30 to-[#38BDF8]/20 blur-2xl scale-105" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85"
                  alt="Advanced technology display solutions"
                  className="w-full h-72 lg:h-96 object-cover"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091322]/60 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2">
                    <p className="text-xs text-white/60">Products Available</p>
                    <p className="text-lg font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                      6+ Solutions
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#2563EB]/80 backdrop-blur-md border border-[#38BDF8]/30 px-4 py-2">
                    <p className="text-xs text-white/80">Trusted by</p>
                    <p className="text-lg font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                      500+ Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
