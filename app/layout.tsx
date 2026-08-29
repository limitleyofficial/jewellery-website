import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "श्रृंगार by Rakesh Jewellers",
  description:
    "Discover timeless jewellery at श्रृंगार by Rakesh Jewellers in Jaipur.",
  openGraph: {
    title: "श्रृंगार by Rakesh Jewellers",
    description:
      "Discover timeless jewellery at श्रृंगार by Rakesh Jewellers in Jaipur.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "श्रृंगार by Rakesh Jewellers",
    description:
      "Discover timeless jewellery at श्रृंगार by Rakesh Jewellers in Jaipur.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} bg-[#faf9f6] font-sans text-neutral-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}