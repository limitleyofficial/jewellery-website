import Image from "next/image";

type Category = {
  title: string;
  image?: string;
};

const categories: Category[] = [
  { title: "Earrings", image: "/images/client-jewellery/01-diamond-drop-earrings.jpg" },
  { title: "Finger Rings" },
  { title: "Pendants", image: "/images/client-jewellery/03-oval-diamond-halo-pendant.jpg" },
  { title: "Mangalsutras" },
  { title: "Bracelets" },
  { title: "Bangles" },
  { title: "Chains" },
  { title: "Nose Pins" },
  { title: "Necklaces", image: "/images/client-jewellery/04-oval-halo-necklace-set.jpg" },
  { title: "Necklace Sets", image: "/images/client-jewellery/02-floral-diamond-necklace-set.jpg" },
];

export default function CategorySection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f0e7]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.035]"
        style={{
          backgroundImage: "url('/images/rajasthan-jali-bg.png')",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-500">
            Find Your Perfect Match
          </p>

          <h2 className="mt-4 font-serif text-4xl font-medium leading-none tracking-[-0.02em] text-neutral-900 sm:text-5xl lg:text-6xl">
            Shop by Categories
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
            Explore the jewellery styles at श्रृंगार by Rakesh Jewellers.
            More category imagery can be added as the collection grows.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max justify-center gap-3 lg:min-w-0 lg:grid lg:grid-cols-5 lg:gap-4">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="group w-[170px] shrink-0 sm:w-[200px] lg:w-auto"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe3d8]">
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 1024px) 200px, 20vw"
                      className="object-cover transition duration-1000 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('/images/rajasthan-jali-bg.png')",
                        }}
                      />
                      <div className="absolute inset-0 bg-[#f0e8dd]/85" />
                    </>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="font-serif text-lg text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute inset-x-4 bottom-4">
                    <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-white/65">
                      {category.image ? "Explore" : "Coming Soon"}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-white sm:text-[27px]">
                      {category.title}
                    </h3>

                    {!category.image && (
                      <p className="mt-2 text-xs leading-5 text-white/65">
                        Dedicated imagery will be added from the collection.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
