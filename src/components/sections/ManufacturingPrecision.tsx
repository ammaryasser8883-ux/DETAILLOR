"use client";

import { AssetImage } from '@/components/ui/AssetImage';
import { motion } from 'framer-motion';
import { manufacturingImages } from '@/data/products';

export function ManufacturingPrecision() {
  return (
    <section id="manufacturing" className="border-t border-gunmetal bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-14 max-w-3xl space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-frost/80">Manufacturing</p>
          <h2 className="font-serif text-4xl uppercase tracking-[0.12em] text-alabaster sm:text-5xl">
            Manufacturing Precision
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {manufacturingImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
              className="overflow-hidden rounded-[2rem] border border-gunmetal bg-[#141414]"
            >
              <div className="relative h-96 w-full">
                <AssetImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  debugLabel={`manufacturing-${item.id}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
