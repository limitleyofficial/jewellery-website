import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakesh Jewellers | Premium Jewellery Website",
  description:
    "A modern, elegant, and responsive jewellery website built for Rakesh Jewellers' luxury showroom experience.",
  openGraph: {
    title: "Rakesh Jewellers | Premium Jewellery Website",
    description:
      "A modern, elegant, and responsive jewellery website built for Rakesh Jewellers' luxury showroom experience.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rakesh Jewellers | Premium Jewellery Website",
    description:
      "A modern, elegant, and responsive jewellery website built for Rakesh Jewellers' luxury showroom experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}