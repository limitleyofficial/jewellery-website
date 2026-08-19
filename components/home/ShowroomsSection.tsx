export default function ShowroomsSection() {
  return (
    <section id="showrooms" className="bg-white">
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

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Showroom 01 */}
            <div className="group rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-lg">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Showroom 01
              </p>

              <h3 className="mt-4 text-xl font-medium text-neutral-900">
                श्रृंगार by Rakesh Jewellers
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Shop No. 95, Corner, Khatipura Rd, Ambika Vihar Colony,
                Prem Nagar, Jhotwara, Jaipur, Rajasthan 302012
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+No+95+Corner+Khatipura+Rd+Ambika+Vihar+Colony+Prem+Nagar+Jhotwara+Jaipur+Rajasthan+302012"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-500"
              >
                Get Directions →
              </a>
            </div>

            {/* Showroom 02 */}
            <div className="group rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-lg">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Showroom 02
              </p>

              <h3 className="mt-4 text-xl font-medium text-neutral-900">
                श्रृंगार by Rakesh Jewellers
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Shop No. 43, Near Nursery Circle, Amrapali Marg, opposite
                Tagore Public School, Vaishali Nagar, Jaipur, Rajasthan 302021
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+No+43+Near+Nursery+Circle+Amrapali+Marg+opposite+Tagore+Public+School+Vaishali+Nagar+Jaipur+Rajasthan+302021"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-500"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}