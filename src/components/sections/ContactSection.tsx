import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-gunmetal bg-charcoal py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="rounded-[2rem] border border-gunmetal bg-[#121212] p-10 text-center shadow-glow"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-frost/70">Start your next collection</p>
          <h2 className="mt-6 text-4xl font-serif uppercase tracking-[0.12em] text-alabaster sm:text-5xl">
            Request samples and design direction.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-frost/85 sm:text-lg">
            Connect with the DETAILLOR studio for precision engineering, material consultation, and premium production support.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@detaillor.com"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.18em] text-black transition hover:bg-[#cfb868]"
            >
              Email the studio
            </a>
            <a
              href="mailto:hello@detaillor.com"
              className="inline-flex items-center justify-center rounded-full border border-gunmetal bg-transparent px-8 py-4 text-sm uppercase tracking-[0.18em] text-alabaster transition hover:border-primary hover:text-primary"
            >
              Request Samples
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
