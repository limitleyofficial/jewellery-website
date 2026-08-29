export default function TrustBar() {
  const trustPoints = [
    {
      number: "01",
      title: "Thoughtful Craftsmanship",
      description:
        "Jewellery selected with an eye for detail, finish, and timeless elegance.",
    },
    {
      number: "02",
      title: "Personal Experience",
      description:
        "Visit our Jaipur showrooms for personalised viewing and one-to-one assistance.",
    },
    {
      number: "03",
      title: "A Name You Can Trust",
      description:
        "A refined jewellery experience built around quality, care, and lasting relationships.",
    },
  ];

  return (
    <section className="border-b border-neutral-200 bg-[#f7f4ee]">
      <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-10 lg:px-16 lg:py-12">
        <div className="grid gap-0 lg:grid-cols-3">
          {trustPoints.map((point, index) => (
            <div
              key={point.number}
              className={`py-6 lg:px-10 lg:py-3 ${
                index !== 0
                  ? "border-t border-neutral-200 lg:border-l lg:border-t-0"
                  : ""
              }`}
            >
              <div className="flex gap-5">
                <span className="font-serif text-sm text-neutral-400">
                  {point.number}
                </span>

                <div>
                  <h3 className="font-serif text-xl font-medium text-neutral-900">
                    {point.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}