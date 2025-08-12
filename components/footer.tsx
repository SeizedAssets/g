"use client"

import { Flame, Github, Twitter, DiscIcon as Discord } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white">
              <Flame className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-bold">Sol Incinerator</span>
            </Link>
            <p className="text-gray-400 text-sm">
              The most secure and efficient way to permanently burn your Solana tokens. Reduce supply, increase
              scarcity.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Product</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/burn" className="text-gray-400 hover:text-white transition-colors text-sm">
                Burn Tokens
              </Link>
              <Link href="/stats" className="text-gray-400 hover:text-white transition-colors text-sm">
                Statistics
              </Link>
              <Link href="/history" className="text-gray-400 hover:text-white transition-colors text-sm">
                Burn History
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                FAQ
              </Link>
              <Link href="/docs" className="text-gray-400 hover:text-white transition-colors text-sm">
                Documentation
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-white transition-colors text-sm">
                Security
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Community</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Discord className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 Sol Incinerator. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
