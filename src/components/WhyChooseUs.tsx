"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Gauge, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Every product is built to the highest standards, rigorously tested to ensure long-lasting reliability.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Technology",
    description:
      "We leverage cutting-edge technology to deliver solutions that keep your business ahead of the curve.",
  },
  {
    icon: Gauge,
    title: "Reliable Performance",
    description:
      "Engineered for 24/7 operation, our products deliver consistent, high-performance results you can count on.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description:
      "We are committed to your success — from pre-sales consultation to after-sales support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-gradient-to-b from-[#060B17] via-[#0B1428] to-[#0E1B36] py-20 lg:py-28 border-t border-white/[0.06]"
    >
      {/* Matching ambient cobalt / cyan / indigo accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#2563EB]/15 blur-[110px]" />
        <div className="absolute bottom-0 right-1/5 h-72 w-72 rounded-full bg-[#6366F1]/15 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#38BDF8] mb-4">
            Why Saisign
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 hover:border-[#38BDF8]/40 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-[#2563EB]/15 transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#38BDF8] shadow-lg shadow-[#2563EB]/30 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3
                className="text-base font-semibold text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="text-sm text-slate-300/80 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
