"use client";

export function ContactSection() {
  return (
    <section id="request" className="border-t border-gunmetal bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.32em] text-frost/80">Request Samples</p>
              <h2 className="text-4xl font-serif uppercase tracking-[0.12em] text-alabaster sm:text-5xl">
                Inquire about our premium materials and engineered accessories for your brand.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-frost/85 sm:text-lg">
                Share your design direction and receive a tailored production approach from the DETAILLOR studio.
              </p>
            </div>
          </div>

          <form className="space-y-6 rounded-[2rem] border border-gunmetal bg-[#121212] p-8 shadow-glow">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Brand Name</span>
                <input
                  type="text"
                  placeholder="Enter your brand name"
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Contact Information</span>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Product Type</span>
                <input
                  type="text"
                  placeholder="e.g. Matte Resin Buttons"
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Finish Type</span>
                <input
                  type="text"
                  placeholder="e.g. Laser Engraved"
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">MOQ</span>
                <input
                  type="text"
                  placeholder="Estimated quantity"
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Country</span>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
            </div>

            <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
              <span className="mb-2 block">Reference Upload (URL)</span>
              <input
                type="url"
                placeholder="Link to references or tech packs"
                className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.18em] text-black transition hover:bg-[#cfb868]"
            >
              Request Samples
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
