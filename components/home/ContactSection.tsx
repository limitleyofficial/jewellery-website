"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send enquiry.");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Unable to send your enquiry right now. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="border-t border-neutral-200 pt-16">
          <div className="grid gap-12 lg:grid-cols-2">
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

            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Enquiry
              </p>

              <h3 className="mt-4 text-2xl font-medium text-neutral-900">
                Tell us what you&apos;re looking for.
              </h3>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
                  <p className="text-lg font-medium text-neutral-900">
                    Thank you for your enquiry.
                  </p>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Your enquiry has been sent successfully. We&apos;ll get
                    back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-5 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-neutral-900"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-neutral-900"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-neutral-900"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-neutral-900"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us what jewellery you're interested in..."
                      className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-700"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-200 pt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Visit Us
            </p>

            <h3 className="mt-4 text-2xl font-medium text-neutral-900 sm:text-3xl">
              Two showroom locations in Jaipur
            </h3>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Showroom 01
              </p>

              <p className="mt-4 text-sm leading-6 text-neutral-600">
                Shop No. 95, Corner, Khatipura Rd, Ambika Vihar Colony,
                Prem Nagar, Jhotwara, Jaipur, Rajasthan 302012
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+No+95+Corner+Khatipura+Rd+Ambika+Vihar+Colony+Prem+Nagar+Jhotwara+Jaipur+Rajasthan+302012"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-500"
              >
                Get Directions →
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Showroom 02
              </p>

              <p className="mt-4 text-sm leading-6 text-neutral-600">
                Shop No. 43, Near Nursery Circle, Amrapali Marg, opposite
                Tagore Public School, Vaishali Nagar, Jaipur, Rajasthan 302021
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+No+43+Near+Nursery+Circle+Amrapali+Marg+opposite+Tagore+Public+School+Vaishali+Nagar+Jaipur+Rajasthan+302021"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-500"
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