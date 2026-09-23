import Image from "next/image";

const stories = [
  {
    title: "Signature Necklace Set",
    image: "/images/client-jewellery/05-crescent-diamond-necklace-set.jpg",
    label: "Signature Edit",
  },
  {
    title: "Floral Cluster Earrings",
    image: "/images/client-jewellery/07-floral-cluster-earrings.jpg",
    label: "Earrings",
  },
  {
    title: "Emerald-Cut Diamond Earrings",
    image: "/images/client-jewellery/08-emerald-cut-earrings-alt.jpg",
    label: "Earrings",
  },
  {
    title: "Linear Diamond Necklace Set",
    image: "/images/client-jewellery/09-linear-diamond-necklace-set.jpg",
    label: "Necklace Set",
  },
];

export default function ShringarWorld() {
  const [featured, ...rest] = stories;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-500">
            श्रृंगार World
          </p>

          <h2 className="mt-4 font-serif text-4xl font-medium leading-none tracking-[-0.02em] text-neutral-900 sm:text-5xl lg:text-6xl">
            A closer look at the art of adornment.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
            Explore selected jewellery stories through the craftsmanship and
            details of our current collection.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <a
            href="#collections"
            className="group relative min-h-[560px] overflow-hidden lg:col-span-6 lg:min-h-[720px]"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-1000 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                {featured.label}
              </p>
              <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                {featured.title}
              </h3>
              <span className="mt-4 inline-flex items-center text-xs uppercase tracking-[0.18em] text-white">
                Discover
                <span className="ml-3">→</span>
              </span>
            </div>
          </a>

          <div className="grid gap-4 lg:col-span-6">
            {rest.map((story) => (
              <a
                key={story.image}
                href="#collections"
                className="group relative min-h-[320px] overflow-hidden sm:min-h-[360px]"
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                    {story.label}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    {story.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
