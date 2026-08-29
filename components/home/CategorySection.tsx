import Image from "next/image";

const categories = [
  {
    title: "Necklaces",
    description: "Elegant statement pieces for every celebration.",
    image: "/images/products/product-01.jpeg",
  },
  {
    title: "Bridal Jewellery",
    description: "Timeless pieces for your most unforgettable day.",
    image: "/images/products/product-02.jpeg",
  },
  {
    title: "Bracelets",
    description: "Refined designs crafted for effortless elegance.",
    image: "/images/products/product-04.jpeg",
  },
  {
    title: "Gold Sets",
    description: "Classic gold jewellery with a timeless appeal.",
    image: "/images/products/product-07.jpeg",
  },
];

export default function CategorySection() {
  return (
    <section className="relative overflow-hidden bg-[#f4eee4]">
      {/* Very subtle Rajasthan-inspired texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.035]"
        style={{
          backgroundImage: "url('/images/rajasthan-jali-bg.png')",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* Section heading */}
        <div className="grid gap-10 border-y border-neutral-300/70 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-neutral-400" />

              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-500">
                Jaipur • Rajasthan
              </p>
            </div>

            <h2 className="mt-6 max-w-xl font-serif text-4xl font-medium leading-[1.02] tracking-[-0.02em] text-neutral-900 sm:text-5xl lg:text-6xl">
              Find something
              <br />
              that feels like you.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-7 text-neutral-600">
              Explore timeless jewellery categories from श्रृंगार by Rakesh
              Jewellers — thoughtfully selected in Jaipur for celebrations,
              traditions, and everyday elegance.
            </p>
          </div>
        </div>

        {/* Category cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <a
              key={`${category.title}-${index}`}
              href="#collections"
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-1000 group-hover:scale-[1.04]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                {/* Category number */}
                <div className="absolute left-5 top-5">
                  <span className="font-serif text-lg text-white/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Category content */}
                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/65">
                    Explore
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    {category.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-5 text-white/75">
                    {category.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/25 pt-3">
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
                      View Collection
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm text-white backdrop-blur-sm transition duration-300 group-hover:bg-white group-hover:text-neutral-900">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Heritage closing line */}
        <div className="mt-12 flex flex-col gap-4 border-b border-neutral-300/70 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl text-neutral-800 sm:text-2xl">
            Inspired by Jaipur. Chosen for you.
          </p>

          <a
            href="#collections"
            className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 transition hover:text-neutral-900"
          >
            Explore all jewellery →
          </a>
        </div>
      </div>
    </section>
  );
}