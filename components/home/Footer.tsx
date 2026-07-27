import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
          <div>
            <Image
              src="/rakesh-jewellers-logo.png"
              alt="Rakesh Jewellers"
              width={180}
              height={56}
              className="h-12 w-auto"
            />
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              Premium jewellery crafted for life&apos;s most meaningful moments.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/60">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Home</li>
              <li>Collections</li>
              <li>About</li>
              <li>Showrooms</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/60">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Multiple showroom locations</li>
              <li>Premium jewellery consultations</li>
              <li>Luxury customer support</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-sm text-white/50">
          © 2026 Rakesh Jewellers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}