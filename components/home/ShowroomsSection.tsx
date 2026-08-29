export default function ShowroomsSection() {
  const showrooms = [
    {
      number: "01",
      area: "Jhotwara",
      address:
        "Shop No. 95, Corner, Khatipura Rd, Ambika Vihar Colony, Prem Nagar, Jhotwara, Jaipur, Rajasthan 302012",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Shop+No+95+Corner+Khatipura+Rd+Ambika+Vihar+Colony+Prem+Nagar+Jhotwara+Jaipur+Rajasthan+302012",
    },
    {
      number: "02",
      area: "Vaishali Nagar",
      address:
        "Shop No. 43, Near Nursery Circle, Amrapali Marg, opposite Tagore Public School, Vaishali Nagar, Jaipur, Rajasthan 302021",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Shop+No+43+Near+Nursery+Circle+Amrapali+Marg+opposite+Tagore+Public+School+Vaishali+Nagar+Jaipur+Rajasthan+302021",
    },
  ];

  return (
    <section id="showrooms" className="bg-[#f7f4ee]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
              Visit Us
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-neutral-900 sm:text-5xl lg:text-6xl">
              Experience the
              <br />
              collection in person.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-neutral-600 lg:justify-self-end">
            Step into a welcoming showroom experience where you can explore
            our jewellery up close and receive personal assistance in choosing
            the right piece.
          </p>
        </div>

        <div className="mt-16 border-t border-neutral-200">
          {showrooms.map((showroom) => (
            <div
              key={showroom.number}
              className="group grid gap-8 border-b border-neutral-200 py-10 lg:grid-cols-[100px_1fr_auto] lg:items-center lg:py-12"
            >
              <div>
                <span className="font-serif text-3xl text-neutral-300">
                  {showroom.number}
                </span>
              </div>

              <div className="max-w-2xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-400">
                  श्रृंगार by Rakesh Jewellers
                </p>

                <h3 className="mt-3 font-serif text-3xl font-medium text-neutral-900 sm:text-4xl">
                  {showroom.area}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-600">
                  {showroom.address}
                </p>
              </div>

              <a
                href={showroom.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center border-b border-neutral-900 pb-2 text-sm font-medium text-neutral-900 transition group-hover:border-neutral-500 group-hover:text-neutral-500"
              >
                Get Directions
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-2xl text-neutral-800 sm:text-3xl">
            Two destinations. One jewellery experience.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center border-b border-neutral-900 pb-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-500 hover:text-neutral-500"
          >
            Plan your visit
            <span className="ml-3">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}