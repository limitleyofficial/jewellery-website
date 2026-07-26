export default function ContactSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="border-t border-neutral-200 pt-16">
          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 px-6 py-12 text-center sm:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Ready to explore our collections in person?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              Get in touch with our team to ask questions, book a showroom visit,
              or learn more about our latest pieces.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
              >
                Contact Us
              </a>
              <a
                href="#showrooms"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
              >
                View Showrooms
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}