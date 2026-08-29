import Image from "next/image";

const highlights = [
  {
    number: "01",
    title: "Craftsmanship",
    description:
      "Every piece is selected for its detailing, finish, and enduring elegance.",
  },
  {
    number: "02",
    title: "Personal Experience",
    description:
      "A warm, considered showroom experience built around each customer's needs.",
  },
  {
    number: "03",
    title: "Jaipur",
    description:
      "Two showrooms in Jaipur where you can explore the collection in person.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f7f4ee]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          {/* Story */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
              Our Story
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-neutral-900 sm:text-5xl lg:text-6xl">
              Jewellery with meaning,
              <br />
              made for moments.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600">
              At श्रृंगार by Rakesh Jewellers, jewellery is more than an
              adornment. It becomes part of the celebrations, milestones, and
              memories that stay with us.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600">
              With two showrooms in Jaipur, we bring together thoughtfully
              selected jewellery and a personal experience that makes finding
              the right piece feel special.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center border-b border-neutral-900 pb-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-500 hover:text-neutral-500"
            >
              Begin your journey
              <span className="ml-3">→</span>
            </a>
          </div>

          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden bg-neutral-200">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/products/product-03.jpeg"
                  alt="Jewellery detail from Rakesh Jewellers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                    The art of detail
                  </p>

                  <p className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    Made to be remembered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 border-t border-neutral-200 pt-8">
          <div className="grid lg:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.number}
                className={`py-7 lg:px-10 lg:py-4 ${
                  index !== 0
                    ? "border-t border-neutral-200 lg:border-l lg:border-t-0"
                    : ""
                }`}
              >
                <div className="flex gap-5">
                  <span className="font-serif text-sm text-neutral-400">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl font-medium text-neutral-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600">
                      {item.description}
                    </p>
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