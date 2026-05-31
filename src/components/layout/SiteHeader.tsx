"use client";

// React state hook
import { useState } from "react";

// Next.js navigation
import Link from "next/link";

// Next.js image optimization
import Image from "next/image";

export function SiteHeader() {
  // Mobile menu open/close state
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

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
          max-w-7xl
          px-4
          py-4
          sm:px-6
          lg:px-12
        "
      >
        {/* Main Header Row */}
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          {/* Logo + Brand */}
          <Link
            href="#hero"
            className="
              flex
              items-center
              gap-3
              min-w-0
            "
          >
            <Image
              src="/Logo.png"
              alt="DETAILLOR Logo"
              width={52}
              height={52}
              priority
              className="
                h-8
                w-8
                sm:h-10
                sm:w-10
              "
            />

            <span
              className="
                text-[0.7rem]
                sm:text-sm
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white
                whitespace-nowrap
              "
            >
              DETAILLOR
            </span>
          </Link>

          {/* Desktop Navigation */}
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
            <a
              href="#products"
              className="transition hover:text-white"
            >
              Products
            </a>

            <a
              href="#manufacturing"
              className="transition hover:text-white"
            >
              Manufacturing
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </nav>

          {/* Right Side */}
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            {/* Request Button */}
            <a
              href="#request"
              className="
                inline-flex
                items-center
                justify-center

                rounded-full
                border
                border-[#D4AF37]/40
                bg-[#D4AF37]/5

                px-3
                py-2

                text-[0.55rem]

                uppercase
                tracking-[0.12em]

                text-white
                transition

                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]/10

                sm:px-4
                sm:py-2
                sm:text-[0.65rem]

                lg:px-6
                lg:py-3
                lg:text-[0.78rem]
              "
            >
              Request
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                border
                border-gunmetal

                text-white

                md:hidden
              "
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="
              mt-4

              rounded-2xl

              border
              border-gunmetal

              bg-[#111111]

              p-4

              md:hidden
            "
          >
            <nav
              className="
                flex
                flex-col
                gap-4

                text-sm
                uppercase
                tracking-[0.18em]
              "
            >
              <a
                href="#products"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="
                  text-white/80
                  transition
                  hover:text-white
                "
              >
                Products
              </a>

              <a
                href="#manufacturing"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="
                  text-white/80
                  transition
                  hover:text-white
                "
              >
                Manufacturing
              </a>

              <a
                href="#about"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="
                  text-white/80
                  transition
                  hover:text-white
                "
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="
                  text-white/80
                  transition
                  hover:text-white
                "
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}