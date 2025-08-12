import type React from "react"
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { Providers } from "./providers"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
})

export const metadata = {
  title: "Sol Incinerator - Burn Solana Tokens Safely",
  description:
    "The most secure and efficient way to permanently burn your Solana tokens. Reduce supply, increase scarcity.",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <body
        className={`min-h-svh max-w-[100vw] bg-black text-white ${geistMono.variable} ${geist.variable} font-sans antialiased`}
      >
        <Providers>
          <Header />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
