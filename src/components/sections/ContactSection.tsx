"use client";

// Import React state hook
import { useState } from "react";

export function ContactSection() {
  // Store selected finish type
  const [finishType, setFinishType] = useState("");

  return (
    <section
      id="request"
      className="border-t border-gunmetal bg-charcoal py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.32em] text-frost/80">
                Request Samples
              </p>

              <h2 className="text-4xl font-serif uppercase tracking-[0.12em] text-alabaster sm:text-5xl">
                Inquire about our premium materials and engineered accessories
                for your brand.
              </h2>

              <p className="max-w-2xl text-base leading-8 text-frost/85 sm:text-lg">
                Share your design direction and receive a tailored production
                approach from the DETAILLOR studio.
              </p>
            </div>
          </div>

          {/* Request form */}
          <form className="space-y-6 rounded-[2rem] border border-gunmetal bg-[#121212] p-8 shadow-glow">
            {/* Brand + Email */}
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
                <span className="mb-2 block">Email Address</span>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
            </div>

            {/* Contact Number + Preferred Contact Method */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Contact Number</span>

                <input
                  type="tel"
                  placeholder="+20 115 229 6027"
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>

              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Preferred Contact Method</span>

                <select
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                >
                  <option>Email</option>
                  <option>WhatsApp</option>
                  <option>Phone Call</option>
                </select>
              </label>
            </div>

            {/* Product Type + Finish Type */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Product Type</span>

                <select
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                >
                  <option value="">Select Product</option>

                  <option>Premium Resin Buttons</option>
                  <option>Matte Soft Touch Buttons</option>
                  <option>Horn Effect Resin Buttons</option>
                  <option>Marble Effect Resin Buttons</option>
                  <option>Metal Look Resin Buttons</option>
                  <option>Frosted Resin Buttons</option>
                  <option>Custom Engraved Buttons</option>
                  <option>Oversized Fashion Buttons</option>
                  <option>Shank Buttons</option>

                  <option>Zippers</option>
                  <option>Packaging</option>
                  <option>Hang Tags</option>
                  <option>Woven Labels</option>
                </select>
              </label>

              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Finish Type</span>

                <select
                  value={finishType}
                  onChange={(e) => setFinishType(e.target.value)}
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                >
                  <option value="">Select Finish</option>

                  <option value="Matte">Matte</option>

                  <option value="Glossy">Glossy</option>

                  <option value="Soft Touch">Soft Touch</option>

                  <option value="Laser Engraved">
                    Laser Engraved
                  </option>

                  <option value="Debossed">Debossed</option>

                  <option value="Embossed">Embossed</option>

                  <option value="Brushed Metal">
                    Brushed Metal
                  </option>

                  <option value="Polished Metal">
                    Polished Metal
                  </option>

                  <option value="Gold Finish">
                    Gold Finish
                  </option>

                  <option value="Black Finish">
                    Black Finish
                  </option>

                  <option value="Other">Other</option>
                </select>
              </label>
            </div>

            {/* Show only if Other finish selected */}
            {finishType === "Other" && (
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">
                  Specify Required Finish
                </span>

                <input
                  type="text"
                  placeholder="Describe your finish requirement"
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
            )}

            {/* MOQ + Country */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">MOQ / Quantity</span>

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
                  placeholder="Country"
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
            </div>

            {/* Reference files upload */}
            <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
              <span className="mb-2 block">Reference Files</span>

              <input
                type="file"
                multiple
                accept=".png,.jpg,.jpeg,.pdf,.zip,.ai,.psd"
                className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
              />

              <p className="mt-2 text-xs normal-case text-frost/60">
                Upload logos, reference images, tech packs, artwork,
                specifications or design files.
              </p>
            </label>

            {/* Additional Notes */}
            <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
              <span className="mb-2 block">Additional Notes</span>

              <textarea
                rows={5}
                placeholder="Tell us more about your project requirements..."
                className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
              />
            </label>

            {/* Submit button */}
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