"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import { TooltipProvider } from "@/components/ui/tooltip"
import { WalletProvider } from "@/components/wallet-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="dark">
      <WalletProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </WalletProvider>
    </ThemeProvider>
  )
}
