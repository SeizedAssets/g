import { TokenIncinerator } from "@/components/token-incinerator"

export default function BurnPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Token Incinerator</h1>
            <p className="text-gray-400 text-lg">
              Permanently burn your Solana tokens to reduce supply and increase scarcity
            </p>
          </div>
          <TokenIncinerator />
        </div>
      </div>
    </div>
  )
}
