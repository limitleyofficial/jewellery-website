export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="border-t border-neutral-200 pt-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                About Rakesh Jewellers
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                Jewellery that makes every meaningful moment feel special.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600">
                Rakesh Jewellers brings together elegant jewellery, a refined
                showroom experience, and personal customer service. With two
                showrooms in Jaipur, customers can explore the collection in
                person and receive a comfortable, personalized buying
                experience.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                Our goal is to make discovering the right piece feel as
                memorable as the occasion it celebrates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-2xl font-semibold text-neutral-900">01</p>

                <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Craftsmanship
                </p>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Thoughtfully presented jewellery with attention to detail.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-2xl font-semibold text-neutral-900">02</p>

                <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Experience
                </p>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  A welcoming showroom experience designed around every
                  customer.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-2xl font-semibold text-neutral-900">03</p>

                <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Jaipur
                </p>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Two convenient showroom locations across Jaipur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}