"use client";

"use client";

import Image from 'next/image';
import { materials } from '@/data/products';
import { motion } from 'framer-motion';

export function ButtonsShowcase() {
  return (
    <section id="materials" className="border-t border-gunmetal bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-14 max-w-3xl space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-frost/80">Materials & Finishes</p>
          <h2 className="font-serif text-4xl uppercase tracking-[0.12em] text-alabaster sm:text-5xl">
            Precision finishes designed to elevate garment identity.
          </h2>
          <p className="text-base leading-8 text-frost/85 sm:text-lg">
            Our materials are engineered for durability, tactile refinement, and aesthetic superiority.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="space-y-6"
          >
            <ul className="grid gap-4 text-sm leading-7 text-frost/80">
              {materials.map((material) => (
                <li key={material.id} className="rounded-3xl border border-gunmetal bg-[#131313] p-6">
                  <h3 className="text-lg font-semibold uppercase tracking-[0.08em] text-alabaster">{material.name}</h3>
                  <p className="mt-3 text-frost/80">{material.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
              className="overflow-hidden rounded-[2rem] border border-gunmetal bg-[#141414]"
            >
              <div className="relative h-72 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1974&auto=format&fit=crop"
                  alt="Horn Effect Resin Material"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
              className="overflow-hidden rounded-[2rem] border border-gunmetal bg-[#141414]"
            >
              <div className="relative h-72 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1970&auto=format&fit=crop"
                  alt="Matte Soft Touch Resin Material"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
