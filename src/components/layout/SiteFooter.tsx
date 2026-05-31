export function SiteFooter() {
  return (
    <footer className="border-t border-gunmetal bg-[#0d0d0d] py-16 text-frost">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-frost/70">
              DETAILLOR
            </p>

            <p className="max-w-2xl text-sm leading-7 text-frost/80">
              Premium garment accessories with an engineered luxury approach
              for brands that demand exacting standards.
            </p>
          </div>

          <div id="contact" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.22em] text-frost/70">
                Follow
              </p>

              <a
                href="https://www.instagram.com/detaillor.brand?igsh=MTZtbjA2eG9jdGw3eA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/share/1akyum1r45/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                Facebook
              </a>

              <a
                href="https://wa.me/201152296027"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                WhatsApp
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.22em] text-frost/70">
                Contact
              </p>

              <a
                href="mailto:info@detaillor.com"
                className="block hover:text-white"
              >
                info@detaillor.com
              </a>

              <a
                href="tel:+201152296027"
                className="block hover:text-white"
              >
                +20 115 229 6027
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.22em] text-frost/70">
                Location
              </p>

              <p className="text-sm leading-7 text-frost/80">
                Giza, Sheikh Zayed City, Egypt
              </p>

              <p className="text-sm leading-7 text-frost/80">
                © DETAILLOR ACCESSORIES.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}