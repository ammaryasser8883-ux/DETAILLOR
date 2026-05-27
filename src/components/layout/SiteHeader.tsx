import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gunmetal bg-[rgba(17,17,17,0.92)] backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
        <Link href="#hero" className="text-sm font-semibold uppercase tracking-[0.22em] text-alabaster">
          DETAILLOR<span className="text-primary">.</span>
        </Link>

        <a
          href="#request"
          className="rounded-full border border-gunmetal bg-charcoal px-5 py-3 text-[0.78rem] uppercase tracking-[0.18em] text-alabaster transition hover:border-primary hover:text-primary"
        >
          Request Samples
        </a>
      </div>
    </header>
  );
}
