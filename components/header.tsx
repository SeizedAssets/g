"use client"

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Flame } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky left-0 top-0 z-[110] flex w-full flex-col border-b border-gray-800 bg-black">
      <div className="flex h-16 bg-black">
        <div className="container mx-auto flex w-full items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors">
            <Flame className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold">Sol Incinerator</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/burn" className="text-gray-300 hover:text-white transition-colors">
              Burn Tokens
            </Link>
            <Link href="/stats" className="text-gray-300 hover:text-white transition-colors">
              Statistics
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <WalletMultiButton className="!bg-orange-600 hover:!bg-orange-700 !rounded-lg !text-sm !font-medium !px-4 !py-2" />
          </div>
        </div>
      </div>
    </header>
  )
}
