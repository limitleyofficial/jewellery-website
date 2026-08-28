import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-neutral-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6">
            <Image
              src="/shringar-logo.png"
              alt="श्रृंगार"
              width={320}
              height={150}
              className="h-auto w-64 object-contain object-left sm:w-72"
              priority
            />

            <p className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
              by Rakesh Jewellers
            </p>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Discover jewellery made for life&apos;s most meaningful moments.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
            Explore Rakesh Jewellers in Jaipur and discover jewellery for
            celebrations, special occasions, and everyday moments.
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

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-100/40 via-transparent to-neutral-200/50 blur-2xl" />

          <div className="relative rounded-[2rem] border border-neutral-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-6">
            <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
              <div className="absolute left-0 top-0 h-48 w-48 -translate-x-1/3 -translate-y-1/3 rounded-full bg-amber-100/50 blur-3xl" />

              <div className="absolute bottom-0 right-0 h-56 w-56 translate-x-1/3 translate-y-1/3 rounded-full bg-neutral-200/60 blur-3xl" />

              <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <div className="h-56 w-56 rounded-full border border-neutral-200" />

                <div className="absolute h-36 w-36 rounded-full border border-amber-200 bg-gradient-to-br from-amber-100/80 to-white shadow-sm" />

                <div className="absolute h-16 w-16 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}