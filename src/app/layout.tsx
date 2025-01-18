import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justine Ivan Gueco | Portfolio",
  description: "A passionate and self-taught software developer from the Philippines. Specializing in building mobile and web applications from scratch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased lg:h-screen scroll-smooth`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
