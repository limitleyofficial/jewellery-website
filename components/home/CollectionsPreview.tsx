export default function CollectionsPreview() {
  return (
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
              Discover thoughtfully presented jewellery designed to bring
              elegance, beauty, and timeless appeal to every occasion.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <div className="h-56 rounded-[1.25rem] bg-white shadow-sm" />

              <h3 className="mt-6 text-xl font-medium text-neutral-900">
                Collection 01
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Jewellery collection coming soon.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <div className="h-56 rounded-[1.25rem] bg-white shadow-sm" />

              <h3 className="mt-6 text-xl font-medium text-neutral-900">
                Collection 02
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Jewellery collection coming soon.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <div className="h-56 rounded-[1.25rem] bg-white shadow-sm" />

              <h3 className="mt-6 text-xl font-medium text-neutral-900">
                Collection 03
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Jewellery collection coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}