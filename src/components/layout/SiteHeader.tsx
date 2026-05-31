import Link from 'next/link';
import Image from 'next/image';

export function SiteHeader() {
  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-white/5
        bg-[#0F0F0F]
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-8
          py-6
          lg:px-12
        "
      >
        {/* Brand */}
        <Link
          href="#hero"
          className="flex items-center gap-4"
        >
          <Image
            src="/logo.png"
            alt="DETAILLOR Logo"
            width={52}
            height={52}
            priority
          />

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.28em]
              text-white
            "
          >
            DETAILLOR
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-[0.8rem]
            uppercase
            tracking-[0.18em]
            text-white/80
          "
        >
          <a href="#products" className="hover:text-white transition">
            Products
          </a>

          <a href="#manufacturing" className="hover:text-white transition">
            Manufacturing
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#request"
          className="
            rounded-full
            border
            border-[#D4AF37]/40
            bg-[#D4AF37]/5
            px-6
            py-3
            text-[0.78rem]
            uppercase
            tracking-[0.18em]
            text-white
            transition
            hover:border-[#D4AF37]
            hover:bg-[#D4AF37]/10
          "
        >
          Request Samples
        </a>
      </div>
    </header>
  );
}