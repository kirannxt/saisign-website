"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
  phase: number;
}

const PARTICLE_COLORS = [
  "56, 189, 248",  // #38BDF8 cyan
  "37, 99, 235",   // #2563EB cobalt
  "129, 140, 248", // #818CF8 indigo-violet
  "224, 242, 254", // crisp light highlight
];

export default function HeroWallpaper() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let particles: Particle[] = [];

    const createParticles = (w: number, h: number): Particle[] => {
      const count = Math.min(60, Math.max(26, Math.floor((w * h) / 28000)));
      return Array.from({ length: count }, (_, idx) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.06,
        radius: Math.random() * 1.8 + 0.7,
        alpha: Math.random() * 0.45 + 0.2,
        color: PARTICLE_COLORS[idx % PARTICLE_COLORS.length],
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles(width, height);
    };

    const drawFrame = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const pointer = pointerRef.current;
      if (pointer.active) {
        const glow = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          220
        );
        glow.addColorStop(0, "rgba(56, 189, 248, 0.14)");
        glow.addColorStop(0.5, "rgba(99, 102, 241, 0.07)");
        glow.addColorStop(1, "rgba(6, 11, 23, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      const maxLinkDistance = 125;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          p.x += p.vx + Math.sin(time * 0.0005 + p.phase) * 0.14;
          p.y += p.vy + Math.cos(time * 0.0004 + p.phase) * 0.11;

          if (pointer.active) {
            const dx = pointer.x - p.x;
            const dy = pointer.y - p.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 1 && dist < 170) {
              const force = (1 - dist / 170) * 0.018;
              p.x += dx * force;
              p.y += dy * force;
            }
          }

          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }

        const pulse = reducedMotion
          ? 1
          : 0.78 + 0.22 * Math.sin(time * 0.002 + p.phase);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${(p.alpha * pulse).toFixed(3)})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxLinkDistance) {
            const lineAlpha = (1 - dist / maxLinkDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha.toFixed(3)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      if (!reducedMotion) {
        animationId = window.requestAnimationFrame(drawFrame);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: inside,
      };
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    resize();
    if (reducedMotion) {
      drawFrame(0);
    } else {
      animationId = window.requestAnimationFrame(drawFrame);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#060B17]"
    >
      {/* Animated full-bleed custom wallpaper */}
      <motion.div
        animate={{
          scale: [1.02, 1.08, 1.02],
          x: [0, -14, 8, 0],
          y: [0, -8, 6, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-wallpaper.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-90"
        />
      </motion.div>

      {/* Ambient animated aurora glow matching wallpaper palette */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 30, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 right-1/4 h-[28rem] w-[28rem] rounded-full bg-[#38BDF8]/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -30, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 right-10 h-[26rem] w-[26rem] rounded-full bg-[#6366F1]/25 blur-[120px]"
      />

      {/* Interactive particle constellation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Left/bottom scrim for crisp text legibility over wallpaper */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(6, 11, 23, 0.88) 0%, rgba(6, 11, 23, 0.62) 48%, rgba(6, 11, 23, 0.2) 100%), linear-gradient(180deg, rgba(6, 11, 23, 0.4) 0%, transparent 25%, transparent 72%, rgba(6, 11, 23, 0.96) 100%)",
        }}
      />
    </div>
  );
}
