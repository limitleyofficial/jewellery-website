const values = [
  {
    number: "01",
    title: "Personal Attention",
    description:
      "Take your time, explore the details, and receive thoughtful guidance from our team.",
  },
  {
    number: "02",
    title: "A Jaipur Presence",
    description:
      "Visit us at either of our two Jaipur showrooms and experience the collection in person.",
  },
  {
    number: "03",
    title: "Made for Your Moment",
    description:
      "From celebrations to everyday elegance, discover pieces that feel right for you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f7f4ee]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
              The Experience
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-neutral-900 sm:text-5xl lg:text-6xl">
              More than jewellery.
              <br />
              A personal experience.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-neutral-600 lg:justify-self-end">
            Choosing jewellery is personal. We believe the experience should be
            too — thoughtful, relaxed, and centred around finding something
            that feels uniquely yours.
          </p>
        </div>

        <div className="mt-16 border-t border-neutral-200">
          {values.map((value) => (
            <div
              key={value.number}
              className="grid gap-6 border-b border-neutral-200 py-10 lg:grid-cols-[100px_1fr_1fr] lg:items-center lg:py-12"
            >
              <span className="font-serif text-3xl text-neutral-300">
                {value.number}
              </span>

              <h3 className="font-serif text-3xl font-medium text-neutral-900 sm:text-4xl">
                {value.title}
              </h3>

              <p className="max-w-lg text-sm leading-6 text-neutral-600 lg:justify-self-end">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center border-b border-neutral-900 pb-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-500 hover:text-neutral-500"
          >
            Start a conversation
            <span className="ml-3">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}