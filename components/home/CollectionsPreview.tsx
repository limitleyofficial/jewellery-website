"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const products = [
  {
    title: "Green Necklace",
    description: "Elegant green-stone jewellery with a timeless finish.",
    image: "/images/products/product-01.jpeg",
  },
  {
    title: "Bridal Jewellery",
    description: "Traditional jewellery created for memorable occasions.",
    image: "/images/products/product-02.jpeg",
  },
  {
    title: "Green Necklace Close-up",
    description: "Intricate detailing and refined stonework.",
    image: "/images/products/product-03.jpeg",
  },
  {
    title: "Silver Bracelet",
    description: "A refined bracelet design with a polished finish.",
    image: "/images/products/product-04.jpeg",
  },
  {
    title: "Silver Bracelet",
    description: "Elegant detailing with a clean, modern style.",
    image: "/images/products/product-05.jpeg",
  },
  {
    title: "Silver Bracelet",
    description: "A sophisticated silver design for effortless elegance.",
    image: "/images/products/product-06.jpeg",
  },
  {
    title: "Gold Set",
    description: "A classic gold set with traditional appeal.",
    image: "/images/products/product-07.jpeg",
  },
];

export default function CollectionsPreview() {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
  } | null>(null);

  const [zoom, setZoom] = useState(1);

  const openImage = (image: string, title: string) => {
    setSelectedImage({ image, title });
    setZoom(1);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  const handleWheelZoom = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    setZoom((currentZoom) => {
      const change = event.deltaY < 0 ? 0.2 : -0.2;
      const nextZoom = currentZoom + change;

      return Math.min(Math.max(nextZoom, 1), 4);
    });
  };

  const handleDoubleClick = () => {
    setZoom((currentZoom) => (currentZoom === 1 ? 2 : 1));
  };

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <section id="collections" className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          {/* Section intro */}
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
                The Collection
              </p>

              <h2 className="mt-5 max-w-xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-neutral-900 sm:text-5xl lg:text-6xl">
                Pieces made to
                <br />
                become memories.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 lg:justify-self-end lg:pb-1">
              Discover a curated selection from श्रृंगार by Rakesh Jewellers,
              where timeless forms meet the beauty of modern celebrations.
            </p>
          </div>

          {/* Editorial gallery */}
          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            {/* Featured piece */}
            <article className="group lg:col-span-7">
              <button
                type="button"
                onClick={() =>
                  openImage(products[0].image, products[0].title)
                }
                className="block w-full cursor-zoom-in text-left"
                aria-label={`View ${products[0].title} larger`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200 sm:aspect-[5/6]">
                  <Image
                    src={products[0].image}
                    alt={products[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition duration-1000 group-hover:scale-[1.03]"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                        Featured piece
                      </p>

                      <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                        {products[0].title}
                      </h3>
                    </div>

                    <span className="hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-md sm:block">
                      View →
                    </span>
                  </div>
                </div>
              </button>
            </article>

            {/* Right column */}
            <div className="grid gap-6 lg:col-span-5">
              {products.slice(1, 3).map((product) => (
                <article key={product.image} className="group">
                  <button
                    type="button"
                    onClick={() => openImage(product.image, product.title)}
                    className="block w-full cursor-zoom-in text-left"
                    aria-label={`View ${product.title} larger`}
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-neutral-200">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition duration-1000 group-hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                        <h3 className="font-serif text-2xl text-white sm:text-3xl">
                          {product.title}
                        </h3>

                        <span className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-md">
                          →
                        </span>
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* Remaining pieces */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(3).map((product) => (
              <article key={product.image} className="group">
                <button
                  type="button"
                  onClick={() => openImage(product.image, product.title)}
                  className="block w-full cursor-zoom-in text-left"
                  aria-label={`View ${product.title} larger`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-1000 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                        Rakesh Jewellers
                      </p>

                      <h3 className="mt-2 font-serif text-2xl text-white">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>

          {/* Closing line */}
          <div className="mt-20 border-t border-neutral-200 pt-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg font-serif text-2xl leading-tight text-neutral-800 sm:text-3xl">
                Designed for celebrations, crafted for generations.
              </p>

              <a
                href="#contact"
                className="inline-flex w-fit items-center border-b border-neutral-900 pb-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-500 hover:text-neutral-500"
              >
                Enquire about a piece
                <span className="ml-3">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} enlarged view`}
          onClick={closeImage}
          onWheel={handleWheelZoom}
        >
          <div
            className="relative flex h-full w-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
            onWheel={handleWheelZoom}
          >
            <button
              type="button"
              onClick={closeImage}
              className="absolute right-3 top-3 z-20 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-sm font-medium text-neutral-900 shadow-lg transition hover:bg-white"
              aria-label="Close image viewer"
            >
              Close
            </button>

            <div
              className="relative flex h-[75vh] w-full items-center justify-center overflow-hidden bg-neutral-950"
              onDoubleClick={handleDoubleClick}
              style={{
                cursor: zoom > 1 ? "zoom-out" : "zoom-in",
              }}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="100vw"
                className="object-contain transition-transform duration-200"
                style={{
                  transform: `scale(${zoom})`,
                }}
              />

              <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-sm">
                Scroll to zoom • Double-click to zoom
              </div>
            </div>

            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center font-serif text-lg text-white/90">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}