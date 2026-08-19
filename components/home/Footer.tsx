import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/rakesh-jewellers-logo.png"
              alt="Rakesh Jewellers"
              width={180}
              height={56}
              className="h-12 w-auto"
            />

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              श्रृंगार by Rakesh Jewellers — premium jewellery for life&apos;s
              most meaningful moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/60">
              Quick Links
            </p>

            <nav className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href="#"
                className="text-white/70 transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#collections"
                className="text-white/70 transition hover:text-white"
              >
                Collections
              </a>

              <a
                href="#about"
                className="text-white/70 transition hover:text-white"
              >
                About
              </a>

              <a
                href="#showrooms"
                className="text-white/70 transition hover:text-white"
              >
                Showrooms
              </a>

              <a
                href="#contact"
                className="text-white/70 transition hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & Showrooms */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/60">
              Contact
            </p>

            <div className="mt-4 flex flex-col gap-4 text-sm">
              <a
                href="mailto:rakeshjewells@gmail.com"
                className="text-white/70 transition hover:text-white"
              >
                rakeshjewells@gmail.com
              </a>

              <a
                href="https://www.instagram.com/rakesh_jewels01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition hover:text-white"
              >
                Instagram — Rakesh Jewels
              </a>

              <a
                href="https://www.instagram.com/rakesh_jewellers_jaipur/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition hover:text-white"
              >
                Instagram — Rakesh Jewellers Jaipur
              </a>

              <div className="pt-2">
                <p className="mb-2 font-medium text-white/90">
                  Showroom 01
                </p>
                <p className="leading-6 text-white/60">
                  Shop No. 95, Corner, Khatipura Rd, Ambika Vihar Colony,
                  Prem Nagar, Jhotwara, Jaipur, Rajasthan 302012
                </p>
              </div>

              <div>
                <p className="mb-2 font-medium text-white/90">
                  Showroom 02
                </p>
                <p className="leading-6 text-white/60">
                  Shop No. 43, Near Nursery Circle, Amrapali Marg, opposite
                  Tagore Public School, Vaishali Nagar, Jaipur, Rajasthan
                  302021
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 text-sm text-white/50">
          © 2026 Rakesh Jewellers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}