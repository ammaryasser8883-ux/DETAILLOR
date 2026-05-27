import { HeroSection } from '@/components/sections/HeroSection';
import { BrandPhilosophy } from '@/components/sections/BrandPhilosophy';
import { ProductCategories } from '@/components/sections/ProductCategories';
import { CategoryDetails } from '@/components/sections/CategoryDetails';
import { ButtonsShowcase } from '@/components/sections/ButtonsShowcase';
import { CustomizationProcess } from '@/components/sections/CustomizationProcess';
import { ManufacturingPrecision } from '@/components/sections/ManufacturingPrecision';
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

        <ProductCategories />

        <CategoryDetails />

        <ButtonsShowcase />

        <CustomizationProcess />

        <ManufacturingPrecision />

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
