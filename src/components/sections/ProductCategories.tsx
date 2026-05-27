import Image from 'next/image';
import { categories } from '@/data/products';
import { motion } from 'framer-motion';

export function ProductCategories() {
  return (
    <section id="categories" className="space-y-16">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-frost/80">Product Categories</p>
        <h2 className="font-serif text-4xl uppercase tracking-[0.12em] text-alabaster sm:text-5xl">
          Crafted components for every garment.
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
            className="group overflow-hidden rounded-3xl border border-gunmetal bg-[#141414]"
          >
            <div className="relative h-72 overflow-hidden bg-charcoal">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="space-y-4 p-8">
              <span className="inline-flex rounded-full border border-gunmetal px-4 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-frost/70">
                {item.tag}
              </span>
              <h3 className="text-2xl font-semibold uppercase tracking-[0.1em] text-alabaster">{item.title}</h3>
              <p className="text-sm leading-7 text-frost/85">{item.description}</p>
              <a
                href={`#${item.id}`}
                className="inline-flex items-center text-sm uppercase tracking-[0.18em] text-primary transition hover:text-white"
              >
                Explore {item.title}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
