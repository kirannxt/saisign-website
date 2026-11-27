"use client";
import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
];

export default function Footer() {
  const [year, setYear] = useState(2025);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="bg-[#091322] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#38BDF8]">
                <Zap className="h-4 w-4 text-white" fill="white" />
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Saisign
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Delivering innovative, high-performance display and signage
              solutions engineered for reliability and designed for impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold text-white mb-4 uppercase tracking-wider"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#38BDF8] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {year} Saisign. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Innovative Technology for a Smarter Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
