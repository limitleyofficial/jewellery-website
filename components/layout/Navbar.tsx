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
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-[#faf9f6]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-[78px] items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="flex items-center"
            aria-label="Rakesh Jewellers - Home"
          >
            <Image
              src="/rakesh-jewellers-logo.png"
              alt="Rakesh Jewellers"
              width={180}
              height={62}
              className="h-12 w-auto object-contain sm:h-14"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center md:flex">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative py-2 text-[13px] font-medium tracking-wide text-neutral-700 transition-colors duration-300 hover:text-neutral-950"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition hover:border-neutral-400 md:hidden"
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
                strokeWidth="1.7"
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
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-neutral-200/70 pb-5 pt-4 md:hidden">
            <nav className="flex flex-col">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between py-4 text-sm font-medium tracking-wide text-neutral-800 transition-colors hover:text-neutral-500 ${
                    index !== navLinks.length - 1
                      ? "border-b border-neutral-200/70"
                      : ""
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-neutral-400">→</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}