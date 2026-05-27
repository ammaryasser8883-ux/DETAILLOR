"use client";

"use client";

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-ink pt-[80px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 hero-overlay"></div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl space-y-10"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-frost/80">Engineered Garment Accessories</p>
            <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.95] tracking-[-0.03em] text-alabaster">
              Every Detail,
              <span className="block">Elevated.</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-frost/90 sm:text-xl">
              Luxury garment accessories engineered for modern fashion brands.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.18em] text-black transition hover:bg-[#cfb868]"
            >
              Request Samples
              <ArrowRight className="ml-3 h-4 w-4" />
            </a>
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-full border border-gunmetal bg-transparent px-8 py-4 text-sm uppercase tracking-[0.18em] text-alabaster transition hover:border-primary hover:text-primary"
            >
              Start A Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
