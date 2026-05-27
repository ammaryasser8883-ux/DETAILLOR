"use client";

"use client";

import { motion } from 'framer-motion';
import { categories } from '@/data/products';

export function CategoryDetails() {
  return (
    <section className="border-t border-gunmetal bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-14 max-w-3xl space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-frost/80">Coming Soon</p>
          <h2 className="font-serif text-4xl uppercase tracking-[0.12em] text-alabaster sm:text-5xl">
            Expanded luxury systems in development.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
              className="overflow-hidden rounded-[2rem] border border-gunmetal bg-[#131313] p-8 shadow-glow"
            >
              <span className="text-xs uppercase tracking-[0.32em] text-primary">Coming Soon</span>
              <h3 className="mt-5 text-2xl font-semibold uppercase tracking-[0.1em] text-alabaster">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-frost/80">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
