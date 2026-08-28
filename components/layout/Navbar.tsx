"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Showrooms", href: "#showrooms" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="flex shrink-0 items-center"
          >
            <Image
              src="/rakesh-jewellers-logo.png"
              alt="Rakesh Jewellers"
              width={200}
              height={62}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:border-neutral-900 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isOpen && (
          <div className="pb-4 md:hidden">
            <nav className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-white hover:text-neutral-950"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}