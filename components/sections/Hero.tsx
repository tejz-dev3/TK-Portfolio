"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 px-4 py-1.5 rounded-full glass border-accent/20 text-[10px] font-black uppercase tracking-[0.3em] text-accent"
      >
        Available for New Opportunities
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-8 max-w-4xl"
      >
        Frontend <br />
        <span className="text-accent underline decoration-accent/30 underline-offset-8">Developer</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
      >
        Frontend Developer | Building Scalable & High-Performance Web Applications
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-6"
      >
        <a href="#projects" className="px-10 py-4 bg-accent text-white font-black uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all glow-accent">
          View Projects
        </a>
        <a
          href="/Tejaswini_Kanike.pdf"
          download="Tejaswini_Kanike.pdf"
          className="px-10 py-4 border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-colors inline-block text-center"
        >
          Download CV
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
