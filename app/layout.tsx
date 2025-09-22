

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kambaz App",
  description: "Learning Next.js Labs and Kambaz UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}