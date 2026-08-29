"use client";

import Image from "next/image";
import { useRef } from "react";

const featuredJewellery = [
  {
    title: "Green Necklace",
    image: "/images/products/product-01.jpeg",
    category: "Necklaces",
  },
  {
    title: "Bridal Jewellery",
    image: "/images/products/product-02.jpeg",
    category: "Bridal",
  },
  {
    title: "Green Necklace Close-up",
    image: "/images/products/product-03.jpeg",
    category: "Necklaces",
  },
  {
    title: "Silver Bracelet",
    image: "/images/products/product-04.jpeg",
    category: "Bracelets",
  },
  {
    title: "Silver Bracelet",
    image: "/images/products/product-05.jpeg",
    category: "Bracelets",
  },
  {
    title: "Gold Set",
    image: "/images/products/product-07.jpeg",
    category: "Gold",
  },
];

export default function FeaturedJewellery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = 360;

    scrollRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* Header */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
              Featured Jewellery
            </p>

            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-neutral-900 sm:text-5xl lg:text-6xl">
              Pieces worth
              <br />
              looking closer at.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600">
              A closer look at selected pieces from श्रृंगार by Rakesh
              Jewellers, chosen for their character, detail, and elegance.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous jewellery"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 transition hover:border-neutral-900"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next jewellery"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 transition hover:border-neutral-900"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal gallery */}
        <div
          ref={scrollRef}
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredJewellery.map((item, index) => (
            <article
              key={`${item.title}-${item.image}`}
              className="group min-w-[78vw] snap-start sm:min-w-[330px] lg:min-w-[360px]"
            >
              <a href="#collections" className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 78vw, 360px"
                    className="object-cover transition duration-1000 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-white/65">
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
            </article>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-8 border-t border-neutral-200 pt-7">
          <a
            href="#collections"
            className="inline-flex items-center border-b border-neutral-900 pb-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-500 hover:text-neutral-500"
          >
            Explore the full collection
            <span className="ml-3">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}