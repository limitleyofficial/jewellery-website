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
    <section className="relative overflow-hidden bg-[#f7f4ee]">
      {/* Subtle Rajasthan heritage texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/rajasthan-jali-bg.png')",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
            Explore
          </p>

          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-neutral-900 sm:text-5xl lg:text-6xl">
            Find something
            <br />
            that feels like you.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-neutral-600">
            Discover jewellery across timeless categories, thoughtfully
            selected by श्रृंगार by Rakesh Jewellers.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.title}
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
                    Shop
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    {category.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-5 text-white/75">
                    {category.description}
                  </p>

                  <span className="mt-4 inline-flex items-center text-xs font-medium uppercase tracking-[0.18em] text-white">
                    Explore
                    <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}