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
              Premium jewellery crafted for life&apos;s most meaningful moments.
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

          {/* Contact */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/60">
              Contact
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm">
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

              <a
                href="#showrooms"
                className="text-white/70 transition hover:text-white"
              >
                View Showrooms
              </a>
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