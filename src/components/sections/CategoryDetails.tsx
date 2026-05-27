import Image from 'next/image';
import { categories } from '@/data/products';
import { motion } from 'framer-motion';

export function CategoryDetails() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl space-y-20 px-6 sm:px-8 lg:px-10">
        {categories.map((item, index) => (
          <motion.section
            key={item.id}
            id={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: index * 0.1 }}
            className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
          >
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.32em] text-frost/70">{item.tag}</span>
              <h3 className="text-4xl font-serif uppercase tracking-[0.12em] text-alabaster sm:text-5xl">{item.title}</h3>
              <p className="max-w-2xl text-base leading-8 text-frost/85 sm:text-lg">{item.description}</p>
              <div className="space-y-4 text-sm uppercase tracking-[0.22em] text-frost/80">
                <p>Precision molding</p>
                <p>Refined metallic finishes</p>
                <p>Tailored luxury materials</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gunmetal bg-charcoal">
              <div className="relative h-96 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </section>
  );
}
