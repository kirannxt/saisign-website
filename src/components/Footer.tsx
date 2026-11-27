"use client";
import { Zap, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Products", href: "#products" },
];

const categoryLinks = [
  { label: "Printing Machines", href: "#printing-machines" },
  { label: "Printer Heads", href: "#printer-heads" },
  { label: "Spare Parts", href: "#spare-parts" },
  { label: "Inks", href: "#inks" },
];

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050914] border-t border-white/10">
      {/* Subtle top ambient glow matching hero & sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-40 max-w-3xl rounded-full bg-gradient-to-r from-[#2563EB]/20 via-[#6366F1]/15 to-[#38BDF8]/20 blur-[90px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2.5 w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#38BDF8] shadow-md shadow-[#2563EB]/30">
                <Zap className="h-4 w-4 text-white" fill="white" />
              </div>
              <span
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Saisign
              </span>
            </a>

            <p className="text-sm text-slate-300/75 leading-relaxed max-w-md">
              Delivering innovative, high-performance industrial printing and
              digital signage solutions engineered for reliability and designed
              for impact.
            </p>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#38BDF8]/25 bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-medium text-[#38BDF8]">
              Innovation • Quality • Reliability
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-semibold text-white mb-4 uppercase tracking-widest"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 hover:text-[#38BDF8] transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4
              className="text-xs font-semibold text-white mb-4 uppercase tracking-widest"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Product Range
            </h4>
            <ul className="flex flex-col gap-2.5">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 hover:text-[#38BDF8] transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400/80">
            © {CURRENT_YEAR} Saisign. All rights reserved.
          </p>
          <p className="text-xs bg-gradient-to-r from-slate-400 via-[#38BDF8]/80 to-[#818CF8]/80 bg-clip-text text-transparent font-medium">
            Innovative Technology for a Smarter Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
