export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="border-t border-neutral-200 pt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              A more personal way to discover jewellery.
            </h2>

            <p className="mt-4 text-base leading-7 text-neutral-600">
              Explore Rakesh Jewellers through our Jaipur showrooms and connect
              with our team for a more personal jewellery-buying experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-2xl font-semibold text-neutral-900">01</p>

              <h3 className="mt-4 text-xl font-medium text-neutral-900">
                Personal Service
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Speak with our team and explore jewellery with personal
                attention.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-2xl font-semibold text-neutral-900">02</p>

              <h3 className="mt-4 text-xl font-medium text-neutral-900">
                Two Jaipur Showrooms
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Visit either of our two convenient showroom locations in Jaipur.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-2xl font-semibold text-neutral-900">03</p>

              <h3 className="mt-4 text-xl font-medium text-neutral-900">
                Explore in Person
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                See the jewellery in person and get help finding the right
                piece for your occasion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}