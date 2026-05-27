export function SiteFooter() {
  return (
    <footer className="border-t border-gunmetal bg-[#0d0d0d] py-16 text-frost">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:px-10 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-frost/70">DETAILLOR</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-frost/80">
            Premium garment accessories with an engineered luxury approach for brands that demand exacting standards.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-frost/70">
          <span>Contact</span>
          <a href="mailto:hello@detaillor.com" className="hover:text-white">
            hello@detaillor.com
          </a>
          <span> © 2026 DETAILLOR</span>
        </div>
      </div>
    </footer>
  );
}
