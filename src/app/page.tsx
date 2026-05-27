import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { BrandPhilosophy } from '@/components/sections/BrandPhilosophy';
import { ProductCategories } from '@/components/sections/ProductCategories';
import { CategoryDetails } from '@/components/sections/CategoryDetails';
import { ButtonsShowcase } from '@/components/sections/ButtonsShowcase';
import { ContactSection } from '@/components/sections/ContactSection';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-ink">
      <SiteHeader />

      <main>
        <HeroSection />

        <BrandPhilosophy />

        <section className="bg-charcoal border-t border-gunmetal">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <ProductCategories />
            </motion.div>
          </div>
        </section>

        <CategoryDetails />

        <ButtonsShowcase />

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
