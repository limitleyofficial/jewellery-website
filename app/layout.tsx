import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Limitley Labs | Premium Jewellery Website",
  description:
    "A modern, elegant, and responsive jewellery website built for luxury showroom experiences.",
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