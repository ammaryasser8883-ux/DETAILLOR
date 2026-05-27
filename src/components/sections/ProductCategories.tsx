"use client";

"use client";

import Image from 'next/image';
import { productHighlights } from '@/data/products';
import { motion } from 'framer-motion';

export function ProductCategories() {
  return (
    <section id="buttons" className="border-t border-gunmetal bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-14 max-w-3xl space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-frost/80">Buttons</p>
          <h2 className="font-serif text-4xl uppercase tracking-[0.12em] text-alabaster sm:text-5xl">
            Our current specialization and expertise.
          </h2>
          <p className="text-base leading-8 text-frost/85 sm:text-lg">
            Luxury garment accessories engineered for exact precision with a tactile refinement. Designed for dark fashion fabrics and premium garment applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {productHighlights.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: 'easeOut' }}
              className="group overflow-hidden rounded-[2rem] border border-gunmetal bg-[#141414] shadow-glow"
            >
              <div className="relative h-72 overflow-hidden bg-[#0f0f0f]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <span className="text-[0.72rem] uppercase tracking-[0.32em] text-frost/70">{product.category}</span>
                <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[0.1em] text-alabaster">{product.name}</h3>
                <p className="mt-4 text-sm leading-7 text-frost/85">{product.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-frost/80">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
