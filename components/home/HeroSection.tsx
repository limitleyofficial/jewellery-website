import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-neutral-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
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
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900 hover:bg-white"
            >
              Find a Showroom
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-100/50 via-transparent to-neutral-200/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white/80 p-3 shadow-sm backdrop-blur-sm sm:p-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-neutral-100">
              <Image
                src="/images/products/product-01.jpeg"
                alt="Green necklace from Rakesh Jewellers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
                priority
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                Featured Jewellery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}