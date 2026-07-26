export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            Premium Jewellery Collection
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Timeless jewellery crafted for life&apos;s most meaningful moments.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Discover elegant collections across multiple showrooms, designed to
            bring together luxury, craftsmanship, and lasting beauty.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#collections"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              View Collections
            </a>

            <a
              href="#showrooms"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
            >
              Find a Showroom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}