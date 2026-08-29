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
    description: "A closer look at the intricate detailing and stonework.",
    image: "/images/products/product-03.jpeg",
  },
  {
    title: "Silver Bracelet",
    description: "A refined bracelet design with a polished finish.",
    image: "/images/products/product-04.jpeg",
  },
  {
    title: "Silver Bracelet",
    description: "Elegant detailing presented in a clean, modern style.",
    image: "/images/products/product-05.jpeg",
  },
  {
    title: "Silver Bracelet",
    description: "A sophisticated silver design for effortless elegance.",
    image: "/images/products/product-06.jpeg",
  },
  {
    title: "Gold Set",
    description: "A classic gold set with a refined traditional appeal.",
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
    if (!selectedImage) return;

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
      <section id="collections" className="bg-[#faf9f6]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
              The Collection
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Jewellery that speaks for itself.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Explore selected pieces from श्रृंगार by Rakesh Jewellers,
              thoughtfully presented for every special moment.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={`${product.title}-${product.image}`}
                className={`group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  index === 0 || index === 1 || index === 6
                    ? "lg:shadow-md"
                    : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => openImage(product.image, product.title)}
                  className="block w-full cursor-zoom-in text-left"
                  aria-label={`View ${product.title} larger`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-full border border-white/30 bg-black/30 px-4 py-2.5 text-xs font-medium text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                      <span>View Jewellery</span>
                      <span>↗</span>
                    </div>
                  </div>
                </button>

                <div className="p-6 sm:p-7">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-400">
                    Rakesh Jewellers
                  </p>

                  <h3 className="mt-3 text-xl font-medium tracking-tight text-neutral-900">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {product.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => openImage(product.image, product.title)}
                    className="mt-5 inline-flex items-center text-sm font-medium text-neutral-900 transition hover:text-neutral-500"
                  >
                    View details
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
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
              className="relative flex h-[75vh] w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-neutral-950"
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

              <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-sm">
                Scroll to zoom • Double-click to zoom
              </div>
            </div>

            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-sm text-white/80">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
