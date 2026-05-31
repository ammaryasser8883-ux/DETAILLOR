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
        min-h-[700px]
        sm:min-h-[800px]
        lg:min-h-[calc(100vh-80px)]
        overflow-hidden
        bg-ink
        pt-[80px]
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <AssetImage
          src={assets.hero.main}
          alt="DETAILLOR hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          debugLabel="hero-background"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay"></div>

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

          px-6

          pt-8
          lg:pt-0

          py-24

          sm:px-8
          lg:px-10
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
            max-w-4xl

            space-y-6
            sm:space-y-10

            text-center
          "
        >
          {/* Text Block */}
          <div
            className="
              space-y-4
              sm:space-y-6
            "
          >
            <p
              className="
                text-xs
                sm:text-sm

                uppercase
                tracking-[0.35em]

                text-frost/80
              "
            >
              ENGINEERED GARMENT ACCESSORIES
            </p>

            <h1
              className="
                font-serif

                text-[clamp(2.4rem,10vw,7rem)]

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
                max-w-2xl

                text-base
                leading-7

                text-frost/90

                sm:text-lg
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
              sm:gap-4
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

                px-5
                py-3

                text-[0.7rem]

                uppercase
                tracking-[0.18em]

                text-black

                transition

                hover:bg-[#cfb868]

                sm:px-8
                sm:py-4
                sm:text-sm
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

                px-5
                py-3

                text-[0.7rem]

                uppercase
                tracking-[0.18em]

                text-alabaster

                transition

                hover:border-primary
                hover:text-primary

                sm:px-8
                sm:py-4
                sm:text-sm
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