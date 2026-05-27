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
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.32em] text-frost/80">Luxury garment accessories</p>
          <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.95] tracking-[-0.03em] text-alabaster">
            Every Detail,
            <span className="block">Elevated.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-frost/90 sm:text-xl">
            Engineered identity systems for modern fashion brands. Premium hardware, refined finishings, and cinematic product composition.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.18em] text-black transition hover:bg-[#cfb868]"
            >
              Request Samples
              <ArrowRight className="ml-3 h-4 w-4" />
            </a>
            <a
              href="#buttons"
              className="inline-flex items-center justify-center rounded-full border border-gunmetal bg-transparent px-8 py-4 text-sm uppercase tracking-[0.18em] text-alabaster transition hover:border-primary hover:text-primary"
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
