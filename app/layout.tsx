import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "श्रृंगार by Rakesh Jewellers",
  description:
    "A modern, elegant, and responsive jewellery website built for श्रृंगार by Rakesh Jewellers.",
  openGraph: {
    title: "श्रृंगार by Rakesh Jewellers",
    description:
      "A modern, elegant, and responsive jewellery website built for श्रृंगार by Rakesh Jewellers.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "श्रृंगार by Rakesh Jewellers",
    description:
      "A modern, elegant, and responsive jewellery website built for श्रृंगार by Rakesh Jewellers.",
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