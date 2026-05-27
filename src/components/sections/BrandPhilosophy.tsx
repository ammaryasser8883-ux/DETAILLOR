"use client";

"use client";

import { motion } from 'framer-motion';

export function BrandPhilosophy() {
  return (
    <section className="border-t border-gunmetal bg-charcoal py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-frost/80">About Detaillor</p>
          <h2 className="mt-6 text-4xl font-serif uppercase tracking-[0.12em] text-alabaster sm:text-5xl">
            Detaillor develops premium garment identity systems for modern fashion brands.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-frost/85 sm:text-lg">
            Tailored Solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
