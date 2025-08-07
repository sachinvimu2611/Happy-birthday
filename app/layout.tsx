import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ThemeHydrationWrapper from "@/components/ThemeHydrationWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Happy Birthday Vimu!",
  description: "A special birthday surprise website for Vimu",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeHydrationWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ThemeHydrationWrapper>
      </body>
    </html>
  )
}
