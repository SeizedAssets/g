export default function StatsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Burn Statistics
            </h1>
            <p className="text-gray-400 text-lg">Real-time data from the Sol Incinerator network</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">2.4M</div>
                <div className="text-gray-400">Total Tokens Burned</div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">15,847</div>
                <div className="text-gray-400">Burn Transactions</div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">8,392</div>
                <div className="text-gray-400">Active Users</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Recent Burns</h3>
              <div className="space-y-3">
                {[
                  { amount: "50,000", token: "BONK", time: "2 minutes ago" },
                  { amount: "25,000", token: "SAMO", time: "5 minutes ago" },
                  { amount: "100,000", token: "DUST", time: "8 minutes ago" },
                  { amount: "75,000", token: "COPE", time: "12 minutes ago" },
                ].map((burn, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-800 last:border-b-0"
                  >
                    <div>
                      <span className="font-medium text-white">
                        {burn.amount} {burn.token}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">{burn.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Top Burned Tokens</h3>
              <div className="space-y-3">
                {[
                  { token: "BONK", amount: "847K", percentage: "35%" },
                  { token: "SAMO", amount: "523K", percentage: "22%" },
                  { token: "DUST", amount: "412K", percentage: "17%" },
                  { token: "COPE", amount: "298K", percentage: "12%" },
                  { token: "Others", amount: "340K", percentage: "14%" },
                ].map((token, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium text-white">{token.token}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-medium">{token.amount}</div>
                      <div className="text-sm text-gray-400">{token.percentage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
