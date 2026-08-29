import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ee]">
      {/* Subtle Rajasthan-inspired background texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{
          backgroundImage: "url('/images/rajasthan-jali-bg.png')",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f7f4ee]/95 via-[#f7f4ee]/70 to-transparent" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid min-h-[calc(100vh-86px)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
            <div className="w-full max-w-xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
                Rakesh Jewellers • Jaipur
              </p>

              <div className="mt-8">
                <Image
                  src="/shringar-logo.png"
                  alt="श्रृंगार"
                  width={360}
                  height={170}
                  className="h-auto w-52 object-contain object-left sm:w-60"
                  priority
                />
              </div>

              <h1 className="mt-8 max-w-xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.025em] text-neutral-900 sm:text-6xl lg:text-7xl">
                Jewellery for
                <br />
                your most
                <br />
                beautiful moments.
              </h1>

              <p className="mt-7 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg">
                Discover thoughtfully selected jewellery for weddings,
                celebrations, cherished occasions, and everyday elegance.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-6">
                <a
                  href="#collections"
                  className="inline-flex items-center border-b border-neutral-900 pb-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-500 hover:text-neutral-500"
                >
                  Explore the collection
                  <span className="ml-3 transition-transform duration-300 hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#showrooms"
                  className="text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
                >
                  Visit a showroom
                </a>
              </div>

              <div className="mt-14 flex items-center gap-6 border-t border-neutral-200 pt-6">
                <div>
                  <p className="font-serif text-2xl text-neutral-900">02</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Showrooms
                  </p>
                </div>

                <div className="h-8 w-px bg-neutral-200" />

                <div>
                  <p className="font-serif text-2xl text-neutral-900">
                    Jaipur
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Rajasthan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative min-h-[560px] lg:min-h-0">
            <Image
              src="/images/products/product-01.jpeg"
              alt="Green necklace from Rakesh Jewellers"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
                  Featured piece
                </p>

                <p className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                  Green Necklace
                </p>
              </div>

              <div className="hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-md sm:block">
                Discover →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}