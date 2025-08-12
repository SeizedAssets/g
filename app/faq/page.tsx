"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What is Sol Incinerator?",
      answer:
        "Sol Incinerator is a secure platform for permanently burning unwanted Solana tokens. When you burn tokens, they are sent to a null address and removed from circulation forever.",
    },
    {
      question: "Is it safe to burn my tokens?",
      answer:
        "Yes, Sol Incinerator uses verified smart contracts and secure wallet connections. All transactions are transparent and can be verified on the Solana blockchain. However, remember that burning tokens is irreversible.",
    },
    {
      question: "What tokens can I burn?",
      answer:
        "You can burn any SPL token on the Solana network. This includes meme coins, utility tokens, and any other tokens in your wallet. SOL itself cannot be burned through this interface.",
    },
    {
      question: "Are there any fees?",
      answer:
        "The only fees are standard Solana network transaction fees (typically less than $0.01). Sol Incinerator does not charge any additional fees for burning tokens.",
    },
    {
      question: "Can I recover burned tokens?",
      answer:
        "No, burning tokens is permanent and irreversible. Once tokens are burned, they are removed from circulation forever and cannot be recovered.",
    },
    {
      question: "Why would I want to burn tokens?",
      answer:
        "Common reasons include: cleaning up your wallet from unwanted airdrops, reducing token supply for deflationary purposes, or permanently removing tokens from circulation.",
    },
    {
      question: "How do I connect my wallet?",
      answer:
        "Click the wallet button in the top right corner and select your preferred wallet (Phantom, Solflare, etc.). Make sure you have a Solana wallet installed and funded with SOL for transaction fees.",
    },
    {
      question: "What happens after I burn tokens?",
      answer:
        "After burning, the tokens are permanently removed from your wallet and sent to a burn address. The transaction will be recorded on the Solana blockchain and visible in our statistics.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-400 text-lg">Everything you need to know about burning tokens safely</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">Still have questions?</h3>
            <p className="text-gray-300 mb-4">
              If you can't find the answer you're looking for, feel free to reach out to our community or check the
              documentation.
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
                Join Discord
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
                View Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
