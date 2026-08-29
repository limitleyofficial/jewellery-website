export default function ContactSection() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="border-t border-neutral-200 pt-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Contact information */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                Contact
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                We&apos;d love to hear from you.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                Have a question about our jewellery or want to visit a
                showroom? Get in touch with श्रृंगार by Rakesh Jewellers.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                    Email
                  </p>

                  <a
                    href="mailto:rakeshjewells@gmail.com"
                    className="mt-2 inline-block text-base text-neutral-900 underline underline-offset-4 transition hover:text-neutral-500"
                  >
                    rakeshjewells@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                    Instagram
                  </p>

                  <div className="mt-2 flex flex-col gap-2">
                    <a
                      href="https://www.instagram.com/rakesh_jewels01/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-neutral-900 underline underline-offset-4 transition hover:text-neutral-500"
                    >
                      @rakesh_jewels01
                    </a>

                    <a
                      href="https://www.instagram.com/rakesh_jewellers_jaipur/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-neutral-900 underline underline-offset-4 transition hover:text-neutral-500"
                    >
                      @rakesh_jewellers_jaipur
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Visit Us
              </p>

              <h3 className="mt-4 text-2xl font-medium text-neutral-900">
                Two showroom locations in Jaipur
              </h3>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="font-medium text-neutral-900">
                    Showroom 01
                  </p>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Shop No. 95, Corner, Khatipura Rd, Ambika Vihar Colony,
                    Prem Nagar, Jhotwara, Jaipur, Rajasthan 302012
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Shop+No+95+Corner+Khatipura+Rd+Ambika+Vihar+Colony+Prem+Nagar+Jhotwara+Jaipur+Rajasthan+302012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-500"
                  >
                    Get Directions →
                  </a>
                </div>

                <div className="border-t border-neutral-200 pt-6">
                  <p className="font-medium text-neutral-900">
                    Showroom 02
                  </p>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Shop No. 43, Near Nursery Circle, Amrapali Marg, opposite
                    Tagore Public School, Vaishali Nagar, Jaipur, Rajasthan
                    302021
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Shop+No+43+Near+Nursery+Circle+Amrapali+Marg+opposite+Tagore+Public+School+Vaishali+Nagar+Jaipur+Rajasthan+302021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-500"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}