export default function CollectionsPreview() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="border-t border-neutral-200 pt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Collections
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Explore signature pieces for every occasion.
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              From everyday elegance to statement designs, our collections are
              curated to reflect craftsmanship, beauty, and timeless appeal.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <div className="h-56 rounded-[1.25rem] bg-white shadow-sm" />
              <h3 className="mt-6 text-xl font-medium text-neutral-900">
                Bridal Collection
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Elegant pieces designed for memorable moments.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <div className="h-56 rounded-[1.25rem] bg-white shadow-sm" />
              <h3 className="mt-6 text-xl font-medium text-neutral-900">
                Gold Collection
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Classic luxury with a warm, refined finish.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <div className="h-56 rounded-[1.25rem] bg-white shadow-sm" />
              <h3 className="mt-6 text-xl font-medium text-neutral-900">
                Daily Wear
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Minimal pieces for everyday sophistication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}