import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Collections", href: "#collections" },
  { label: "Our Story", href: "#about" },
  { label: "Showrooms", href: "#showrooms" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram — Rakesh Jewels",
    href: "https://www.instagram.com/rakesh_jewels01/",
  },
  {
    label: "Instagram — Rakesh Jewellers Jaipur",
    href: "https://www.instagram.com/rakesh_jewellers_jaipur/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        {/* Main footer */}
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          {/* Brand */}
          <div>
            <Image
              src="/rakesh-jewellers-logo.png"
              alt="Rakesh Jewellers"
              width={220}
              height={70}
              className="h-14 w-auto object-contain object-left brightness-0 invert"
            />

            <p className="mt-7 max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl">
              Jewellery made for the moments you never forget.
            </p>

            <p className="mt-6 max-w-md text-sm leading-6 text-white/55">
              श्रृंगार by Rakesh Jewellers brings together thoughtfully
              selected jewellery and a personal showroom experience in Jaipur.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
              Connect
            </p>

            <div className="mt-6 flex flex-col gap-5">
              <a
                href="mailto:rakeshjewells@gmail.com"
                className="w-fit text-sm text-white/75 transition hover:text-white"
              >
                rakeshjewells@gmail.com
              </a>

              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm text-white/60 transition hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Showrooms */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
                Showroom 01
              </p>

              <h3 className="mt-4 font-serif text-2xl text-white">
                Jhotwara
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                Shop No. 95, Corner, Khatipura Rd, Ambika Vihar Colony,
                Prem Nagar, Jhotwara, Jaipur, Rajasthan 302012
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+No+95+Corner+Khatipura+Rd+Ambika+Vihar+Colony+Prem+Nagar+Jhotwara+Jaipur+Rajasthan+302012"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm text-white underline underline-offset-4 transition hover:text-white/60"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
                Showroom 02
              </p>

              <h3 className="mt-4 font-serif text-2xl text-white">
                Vaishali Nagar
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                Shop No. 43, Near Nursery Circle, Amrapali Marg, opposite
                Tagore Public School, Vaishali Nagar, Jaipur, Rajasthan 302021
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+No+43+Near+Nursery+Circle+Amrapali+Marg+opposite+Tagore+Public+School+Vaishali+Nagar+Jaipur+Rajasthan+302021"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm text-white underline underline-offset-4 transition hover:text-white/60"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © 2026 Rakesh Jewellers. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-white/35">
            Jaipur • Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
}