export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            Premium Jewellery Collection
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Timeless jewellery crafted for life&apos;s most meaningful moments.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
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

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-neutral-200 pt-8">
            <div>
              <p className="text-2xl font-semibold text-neutral-900">10+</p>
              <p className="mt-1 text-sm text-neutral-500">Showrooms</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-neutral-900">100%</p>
              <p className="mt-1 text-sm text-neutral-500">Premium Finish</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-neutral-900">24/7</p>
              <p className="mt-1 text-sm text-neutral-500">Luxury Support</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-neutral-100 via-white to-neutral-200" />
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm">
           <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
  <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-neutral-200/60 blur-3xl" />
  <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-amber-200/50 blur-3xl" />
  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300/70 bg-white shadow-sm" />
  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200 bg-gradient-to-br from-amber-100 to-white shadow-md" />
</div> 
          </div>
        </div>
      </div>
    </section>
  );
}