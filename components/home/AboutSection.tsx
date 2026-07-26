export default function AboutSection() {
  return (
    <section id="about"className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="border-t border-neutral-200 pt-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                About Us
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                A jewellery brand built around elegance, quality, and trust.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600">
                We help customers find jewellery that feels timeless, refined,
                and meaningful. With multiple showrooms and a premium approach
                to service, our goal is to make every visit feel personal and
                memorable.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-2xl font-semibold text-neutral-900">01</p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Craftsmanship
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Carefully presented designs with attention to detail.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-2xl font-semibold text-neutral-900">02</p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Experience
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  A showroom journey designed to feel calm and premium.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-2xl font-semibold text-neutral-900">03</p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Trust
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  A professional online presence that feels secure and reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}