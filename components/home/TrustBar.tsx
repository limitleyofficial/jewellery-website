export default function TrustBar() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Crafted with Precision
            </p>
            <p className="mt-3 text-base leading-7 text-neutral-600">
              Elegant designs made to reflect quality, detail, and timeless appeal.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Multiple Showrooms
            </p>
            <p className="mt-3 text-base leading-7 text-neutral-600">
              Visit a showroom near you for a personal viewing and guided consultation.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Built for Trust
            </p>
            <p className="mt-3 text-base leading-7 text-neutral-600">
              A premium online presence designed to feel secure, polished, and professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}