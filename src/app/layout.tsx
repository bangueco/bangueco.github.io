import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Providers from "./providers";
import {Manrope} from "next/font/google"

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Justine Ivan Gueco | Full Stack Developer Portfolio",
  description: "Hello! I am Justine Ivan Gueco, a motivated full-stack developer. I specialize in web and mobile development, a skill set I’ve honed through a combination of hands-on project experience and continuous learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${manrope.className} h-full bg-light dark:bg-dark relative`}>
        <Providers>
            <Navigation />
            {children}
            <footer className="p-5 text-center bg-stone-100 dark:bg-neutral-900">
              <p>
                © All Rights Reserved By <span className="text-light-primary dark:text-dark-primary"><a href="#">Justine Ivan Gueco</a></span>
              </p>
            </footer>
        </Providers>
      </body>
    </html>
  );
}
