export default function ContactSection() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="border-t border-neutral-200 pt-16">
          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 px-6 py-12 text-center sm:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Visit us or get in touch with our team.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              Explore the collections at our Jaipur showrooms or contact
              Rakesh Jewellers for more information.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:rakeshjewells@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
              >
                Email Us
              </a>

              <a
                href="https://www.instagram.com/rakesh_jewels01/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
              >
                Instagram 01
              </a>

              <a
                href="https://www.instagram.com/rakesh_jewellers_jaipur/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
              >
                Instagram 02
              </a>
            </div>

            <div className="mt-8 space-y-2 text-sm text-neutral-500">
              <p>
                <a
                  href="mailto:rakeshjewells@gmail.com"
                  className="transition hover:text-neutral-900"
                >
                  rakeshjewells@gmail.com
                </a>
              </p>

              <p>Rakesh Jewellers · Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}