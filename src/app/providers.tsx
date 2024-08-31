"use client"
import { NextUIProvider } from "@nextui-org/system"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

export default function Providers({children}: {children: ReactNode}) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}