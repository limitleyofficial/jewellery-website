export default function ShowroomsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="border-t border-neutral-200 pt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Showrooms
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Visit a showroom near you.
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Experience the collection in person with personalized service and
              a premium in-store visit.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Showroom 01
              </p>
              <h3 className="mt-4 text-xl font-medium text-neutral-900">
                City Center
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                A premium location for walk-ins, consultations, and private
                viewing appointments.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Showroom 02
              </p>
              <h3 className="mt-4 text-xl font-medium text-neutral-900">
                Downtown
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                A refined showroom experience designed for comfort and trust.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Showroom 03
              </p>
              <h3 className="mt-4 text-xl font-medium text-neutral-900">
                Premium Mall
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Easy access for customers looking to explore the latest
                collections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
