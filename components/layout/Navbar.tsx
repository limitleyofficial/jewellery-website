"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Collections", href: "#collections" },
  { label: "Our Story", href: "#about" },
  { label: "Showrooms", href: "#showrooms" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-[#f7f4ee]/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="relative flex h-[86px] items-center justify-between">
          {/* Left navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-600 transition-colors duration-300 hover:text-neutral-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Brand */}
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            aria-label="श्रृंगार by Rakesh Jewellers - Home"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          >
            <Image
              src="/shringar-logo.png"
              alt="श्रृंगार"
              width={300}
              height={125}
              className="h-auto w-[150px] object-contain sm:w-[175px]"
              priority
            />

            <span className="mt-[-3px] text-[8px] font-medium uppercase tracking-[0.32em] text-neutral-500">
              by Rakesh Jewellers
            </span>
          </a>

          {/* Right navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#about"
              className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-600 transition-colors duration-300 hover:text-neutral-950"
            >
              Our Story
            </a>

            <a
              href="#showrooms"
              className="text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-600 transition-colors duration-300 hover:text-neutral-950"
            >
              Showrooms
            </a>

            <a
              href="#contact"
              className="border-l border-neutral-200 pl-8 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-600 transition-colors duration-300 hover:text-neutral-950"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition hover:border-neutral-400 lg:hidden"
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>

            {isOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="border-t border-neutral-200/70 pb-6 pt-3 lg:hidden">
            <nav className="flex flex-col">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-700 transition-colors hover:text-neutral-950 ${
                    index !== navLinks.length - 1
                      ? "border-b border-neutral-200/70"
                      : ""
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-neutral-400">→</span>
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-t border-neutral-200/70 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-700 transition-colors hover:text-neutral-950"
              >
                <span>Contact</span>
                <span className="text-neutral-400">→</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}