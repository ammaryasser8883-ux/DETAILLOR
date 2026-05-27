"use client";

import { motion } from 'framer-motion';
import { processSteps } from '@/data/products';

export function CustomizationProcess() {
  return (
    <section className="border-t border-gunmetal bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-14 max-w-3xl space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-frost/80">Customization Process</p>
          <h2 className="font-serif text-4xl uppercase tracking-[0.12em] text-alabaster sm:text-5xl">
            Our luxury industrial workflow ensures uncompromising precision from initial concept to final production.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: 'easeOut' }}
              className="rounded-[2rem] border border-gunmetal bg-[#141414] p-8 text-center shadow-glow"
            >
              <span className="mb-4 inline-flex rounded-full border border-gunmetal bg-[#101010] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-primary">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              <h3 className="text-2xl font-semibold uppercase tracking-[0.1em] text-alabaster">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-frost/80">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
