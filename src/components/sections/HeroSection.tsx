"use client";

// Arrow icon
import { ArrowRight } from "lucide-react";

// Animation library
import { motion } from "framer-motion";

// Asset image component
import { AssetImage } from "@/components/ui/AssetImage";

// Assets data
import { assets } from "@/data/assets";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[650px]
        sm:min-h-[800px]
        lg:min-h-[calc(100vh-80px)]
        overflow-hidden
        bg-ink
        pt-[80px]
      "
    >
      {/* Background Images */}
	    <div className="absolute inset-0 overflow-hidden">
	      {/* Mobile Hero Image */}
	      <div className="block md:hidden absolute inset-0">
	  	    <AssetImage
	  	      src={assets.hero.mobile}
	  	      alt="DETAILLOR mobile hero background"
	  	      fill
	  	      priority
	  	      sizes="100vw"
	  	      debugLabel="hero-mobile-background"
	  	      className="object-cover"
	  	    />
	      </div>
	  
	      {/* Desktop / Tablet Hero Image */}
	      <div className="hidden md:block absolute inset-0">
	  	    <AssetImage
	  	      src={assets.hero.main}
	  	      alt="DETAILLOR hero background"
	  	      fill
	  	      priority
	  	      sizes="100vw"
	  	      debugLabel="hero-desktop-background"
	  	      className="object-cover"
	  	    />
	      </div>
	    </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content Container */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          max-w-7xl

          items-center

          justify-start
          lg:justify-center

          px-5
          sm:px-8
          lg:px-10

          pt-2
          lg:pt-0

          py-12
          sm:py-20
          lg:py-24
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            mx-auto
            max-w-4xl

            space-y-5
            sm:space-y-10

            text-center
          "
        >
          {/* Text Block */}
          <div
            className="
              space-y-3
              sm:space-y-6
            "
          >
            <p
              className="
                text-[0.65rem]
                sm:text-sm

                uppercase

                tracking-[0.28em]
                sm:tracking-[0.35em]

                text-frost/80
              "
            >
              ENGINEERED GARMENT ACCESSORIES
            </p>

            <h1
              className="
                font-serif

                text-[2.8rem]
                sm:text-[4rem]
                lg:text-[7rem]

                leading-[0.95]

                tracking-[-0.03em]

                text-alabaster
              "
            >
              Every Detail,
              <span className="block">
                Elevated.
              </span>
            </h1>

            <p
              className="
                mx-auto
                max-w-xl

                text-sm
                leading-6

                text-frost/90

                sm:max-w-2xl
                sm:text-base
                sm:leading-7

                lg:text-xl
              "
            >
              Luxury garment accessories engineered
              <br />
              for modern fashion brands.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="
              flex
              flex-wrap

              justify-center

              gap-3
            "
          >
            <a
              href="#request"
              className="
                inline-flex
                items-center
                justify-center

                rounded-full

                bg-primary

                px-4
                py-2.5

                text-[0.6rem]

                uppercase
                tracking-[0.15em]

                text-black

                transition

                hover:bg-[#cfb868]

                sm:px-6
                sm:py-3
                sm:text-[0.7rem]

                lg:px-8
                lg:py-4
                lg:text-sm
              "
            >
              Request Samples

              <ArrowRight
                className="
                  ml-2
                  h-4
                  w-4
                "
              />
            </a>

            <a
              href="#request"
              className="
                inline-flex
                items-center
                justify-center

                rounded-full

                border
                border-gunmetal

                bg-transparent

                px-4
                py-2.5

                text-[0.6rem]

                uppercase
                tracking-[0.15em]

                text-alabaster

                transition

                hover:border-primary
                hover:text-primary

                sm:px-6
                sm:py-3
                sm:text-[0.7rem]

                lg:px-8
                lg:py-4
                lg:text-sm
              "
            >
              Start A Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}