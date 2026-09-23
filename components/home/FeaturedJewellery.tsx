"use client";

import Image from "next/image";
import { useRef } from "react";

const featuredJewellery = [
  {
    title: "Floral Diamond Necklace Set",
    image: "/images/client-jewellery/02-floral-diamond-necklace-set.jpg",
    category: "Necklace Sets",
  },
  {
    title: "Oval Diamond Halo Pendant",
    image: "/images/client-jewellery/03-oval-diamond-halo-pendant.jpg",
    category: "Pendants",
  },
  {
    title: "Oval Halo Necklace Set",
    image: "/images/client-jewellery/04-oval-halo-necklace-set.jpg",
    category: "Necklace Sets",
  },
  {
    title: "Crescent Diamond Necklace Set",
    image: "/images/client-jewellery/05-crescent-diamond-necklace-set.jpg",
    category: "Necklace Sets",
  },
  {
    title: "Round Halo Necklace Set",
    image: "/images/client-jewellery/06-round-halo-necklace-set.jpg",
    category: "Necklace Sets",
  },
  {
    title: "Floral Cluster Earrings",
    image: "/images/client-jewellery/07-floral-cluster-earrings.jpg",
    category: "Earrings",
  },
];

export default function FeaturedJewellery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 380 : -380,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f7f4ee]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-500">
              Featured Jewellery
            </p>

            <h2 className="mt-4 font-serif text-4xl font-medium leading-none tracking-[-0.02em] text-neutral-900 sm:text-5xl lg:text-6xl">
              Pieces worth looking closer at.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
              A selection of pieces from the client&apos;s latest jewellery
              photography.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous jewellery"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition hover:border-neutral-900"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next jewellery"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition hover:border-neutral-900"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredJewellery.map((item, index) => (
            <a
              key={item.image}
              href="#collections"
              className="group min-w-[78vw] snap-start sm:min-w-[330px] lg:min-w-[360px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 78vw, 360px"
                  className="object-cover transition duration-1000 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.28em] text-white/65">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                      {item.title}
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition group-hover:bg-white group-hover:text-neutral-900">
                    →
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
