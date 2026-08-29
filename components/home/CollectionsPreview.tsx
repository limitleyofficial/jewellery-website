"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
                Discover thoughtfully selected jewellery pieces from श्रृंगार
                by Rakesh Jewellers.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={`${product.title}-${product.image}`}
                  className="group overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-50 transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() =>
                      openImage(product.image, product.title)
                    }
                    className="block w-full cursor-zoom-in text-left"
                    aria-label={`View ${product.title} larger`}
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

                      <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-neutral-900 opacity-0 shadow-sm backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                        View
                      </div>
                    </div>
                  </button>

                  <div className="p-6">
                    <h3 className="text-xl font-medium text-neutral-900">
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
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
              className="absolute right-3 top-3 z-20 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-white"
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