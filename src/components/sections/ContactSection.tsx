"use client";

// Import React state hook
import { useState } from "react";

// Import helper used to upload files
import { uploadFiles } from "@/lib/uploadFiles";

// Import helper used to create inquiry records
import {
  submitInquiry,
  type InquiryData,
} from "@/lib/submitInquiry";

// Import helper used to save uploaded file references
import { saveInquiryFiles } from "@/lib/saveInquiryFiles";

export function ContactSection() {
  // Store selected finish type
  const [finishType, setFinishType] = useState("");

  // Store selected files
  const [files, setFiles] = useState<FileList | null>(null);

  // Show loading state while submitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Show success or error messages
  const [message, setMessage] = useState("");

  /**
   * Handle form submission
   */
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    // Save form reference before any async operation
    const form = event.currentTarget;
    // Prevent browser refresh
    event.preventDefault();

    try {
      // Enable loading state
      setIsSubmitting(true);

      // Clear previous message
      setMessage("");

      // Read form values
      const formData = new FormData(
        event.currentTarget
      );

      // If user selected "Other",
      // use custom finish field
      const finalFinishType =
        finishType === "Other"
          ? String(
              formData.get("customFinish") || ""
            )
          : finishType;

      // Build inquiry object
      const inquiryPayload: InquiryData = {
        brandName: String(
          formData.get("brandName") || ""
        ),

        email: String(
          formData.get("email") || ""
        ),

        contactNumber: String(
          formData.get("contactNumber") || ""
        ),

        preferredContactMethod: String(
          formData.get(
            "preferredContactMethod"
          ) || ""
        ),

        productType: String(
          formData.get("productType") || ""
        ),

        finishType: finalFinishType,

        quantity: String(
          formData.get("quantity") || ""
        ),

        country: String(
          formData.get("country") || ""
        ),

        notes: String(
          formData.get("notes") || ""
        ),
      };

      // Create inquiry record
      const inquiry =
        await submitInquiry(
          inquiryPayload
        );

      // Upload files if any were selected
      if (
        files &&
        files.length > 0
      ) {
        // Upload files to storage
        const uploadedPaths =
          await uploadFiles(files);

        // Save file references
        await saveInquiryFiles(
          inquiry.id,
          Array.from(files).map(
            (file) => file.name
          ),
          uploadedPaths
        );
      }

      // Show success message
      setMessage(
        "Request submitted successfully. Our team will contact you shortly."
      );
      //TBC: Debug Code should be removed  
      // console.log("Form object:", form);
      // Reset form fields
      form.reset();

      // Clear file selection
      setFiles(null);

      // Reset finish dropdown
      setFinishType("");
    } catch (error: any) {
      console.error("SUBMISSION ERROR:", error);

      setMessage(
        `Error: ${error?.message || "Unknown error"}`
      );
    } finally {
      // Disable loading state
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="request"
      className="scroll-mt-32 border-t border-gunmetal bg-charcoal py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Left content area */}
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
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-[2rem] border border-gunmetal bg-[#121212] p-8 shadow-glow"
          >
            {/* Brand + Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Brand Name</span>

                <input
                  name="brandName"
                  type="text"
                  placeholder="Enter your brand name"
                  required
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>

              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Email Address</span>

                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
            </div>

            {/* Contact + Method */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Contact Number</span>

                <input
                  name="contactNumber"
                  type="tel"
                  placeholder="+20 115 229 6027"
                  required
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>

              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">
                  Preferred Contact Method
                </span>

                <select
                  name="preferredContactMethod"
                  required
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                >
                  <option value="">Select</option>
                  <option value="Email">Email</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Phone Call">Phone Call</option>
                </select>
              </label>
            </div>

            {/* Product + Finish */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Product Type</span>

                <select
                  name="productType"
                  required
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
                  onChange={(e) =>
                    setFinishType(e.target.value)
                  }
                  required
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                >
                  <option value="">Select Finish</option>

                  <option value="Matte">Matte</option>
                  <option value="Glossy">Glossy</option>
                  <option value="Soft Touch">
                    Soft Touch
                  </option>
                  <option value="Laser Engraved">
                    Laser Engraved
                  </option>
                  <option value="Debossed">
                    Debossed
                  </option>
                  <option value="Embossed">
                    Embossed
                  </option>
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
                  <option value="Other">
                    Other
                  </option>
                </select>
              </label>
            </div>

            {/* Custom finish */}
            {finishType === "Other" && (
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">
                  Specify Required Finish
                </span>

                <input
                  name="customFinish"
                  type="text"
                  placeholder="Describe your finish requirement"
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
            )}

            {/* Quantity + Country */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">
                  MOQ / Quantity
                </span>

                <input
                  name="quantity"
                  type="text"
                  placeholder="Estimated quantity"
                  required
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>

              <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
                <span className="mb-2 block">Country</span>

                <input
                  name="country"
                  type="text"
                  placeholder="Country"
                  required
                  className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
                />
              </label>
            </div>

            {/* Upload files */}
            <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
              <span className="mb-2 block">
                Reference Files
              </span>

              <input
                type="file"
                multiple
                accept=".png,.jpg,.jpeg,.pdf,.zip,.ai,.psd"
                onChange={(event) =>
                  setFiles(event.target.files)
                }
                className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
              />

              <p className="mt-2 text-xs normal-case text-frost/60">
                Upload logos, tech packs, artwork, PDFs,
                CAD files, reference images or design
                specifications.
              </p>
            </label>

            {/* Notes */}
            <label className="block text-sm uppercase tracking-[0.18em] text-frost/70">
              <span className="mb-2 block">
                Additional Notes
              </span>

              <textarea
                name="notes"
                rows={5}
                placeholder="Tell us more about your project requirements..."
                className="w-full rounded-2xl border border-gunmetal bg-[#101010] px-4 py-3 text-sm text-alabaster outline-none transition focus:border-primary"
              />
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.18em] text-black transition hover:bg-[#cfb868] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting
                ? "Uploading reference files..."
                : "Request Samples"}
            </button>

            {/* Success / Error Message */}
            {message && (
              <p className="text-center text-sm text-primary">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}