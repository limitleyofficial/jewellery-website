import Image from "next/image";

const products = [
  {
    title: "Green Necklace",
    description:
      "Elegant jewellery featuring a refined green-stone design.",
    image: "/images/products/product-01.jpeg",
  },
  {
    title: "Bridal Jewellery",
    description:
      "A traditional jewellery piece designed for memorable occasions.",
    image: "/images/products/product-02.jpeg",
  },
  {
    title: "Green Necklace Close-up",
    description:
      "A closer look at the detailing and stonework of the necklace.",
    image: "/images/products/product-03.jpeg",
  },
  {
    title: "Silver Bracelet",
    description:
      "A refined silver bracelet presented in a premium setting.",
    image: "/images/products/product-04.jpeg",
  },
  {
    title: "Silver Bracelet",
    description:
      "A detailed silver bracelet with a clean, elegant finish.",
    image: "/images/products/product-05.jpeg",
  },
  {
    title: "Silver Bracelet",
    description:
      "Another silver bracelet design from the collection.",
    image: "/images/products/product-06.jpeg",
  },
  {
    title: "Gold Set",
    description:
      "A classic gold jewellery set with an elegant traditional finish.",
    image: "/images/products/product-07.jpeg",
  },
];

export default function CollectionsPreview() {
  return (
    <section id="collections" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="border-t border-neutral-200 pt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Collections
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Explore our jewellery collections.
            </h2>

            <p className="mt-4 text-base leading-7 text-neutral-600">
              Discover thoughtfully selected jewellery pieces from श्रृंगार by
              Rakesh Jewellers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={`${product.title}-${product.image}`}
                className="group overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-50 transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                    Featured
                  </p>

                  <h3 className="mt-3 text-xl font-medium text-neutral-900">
                    {product.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}