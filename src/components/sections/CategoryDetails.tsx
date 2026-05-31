"use client";

import { motion } from 'framer-motion';
import { AssetImage } from '@/components/ui/AssetImage';
import { assets } from '@/data/assets';
import { categories } from '@/data/products';

const categoryImages: Record<string, string> = {
zippers: assets.categories.zippers,
hangTags: assets.categories.hangTags,
packaging: assets.categories.packaging,
wovenLabels: assets.categories.wovenLabels,
};

export function CategoryDetails() {
return ( 
    <section className="border-t border-gunmetal bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-14 max-w-3xl space-y-4 text-center mx-auto">
          <p className="text-sm uppercase tracking-[0.32em] text-frost/80">
            Beyond Buttons
          </p>

	      <h2 className="font-serif text-4xl uppercase tracking-[0.12em] text-alabaster sm:text-5xl">
		      Luxury Garment Identity Systems
	      </h2>
      
	      <p className="text-frost/80">
		      Explore the next generation of DETAILLOR accessories engineered to
		      elevate every touchpoint of a garment.
	      </p>
	      </div>
      
	      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
	      {categories.map((item, index) => (
		      <motion.article
		      key={item.id}
		      initial={{ opacity: 0, y: 24 }}
		      whileInView={{ opacity: 1, y: 0 }}
		      viewport={{ once: true, amount: 0.25 }}
		      transition={{
			      delay: index * 0.1,
			      duration: 0.7,
			      ease: 'easeOut',
		      }}
		      className="
			      overflow-hidden
			      rounded-[2rem]
			      border
			      border-gunmetal
			      bg-[#111111]
			      shadow-glow
		      "
		      >
		      <div className="group relative h-[360px] overflow-hidden">
			      <AssetImage
			      src={categoryImages[item.id]}
			      alt={item.title}
			      fill
			      className="
				      object-cover
				      transition-transform
				      duration-700
				      group-hover:scale-105
			      "
			      />
		      </div>
      
		      <div className="p-8">
			      <h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-alabaster">
			      {item.title}
			      </h3>
      
			      <p className="mt-3 text-sm leading-7 text-frost/80">
			      {item.description}
			      </p>
		      </div>
		      </motion.article>
	      ))}
	      </div>
      </div>
      </section>


);
}
