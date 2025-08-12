"use client"

import { useState, useCallback } from "react"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { PublicKey, Transaction } from "@solana/web3.js"
import { getAssociatedTokenAddress, createBurnInstruction, TOKEN_PROGRAM_ID } from "@solana/spl-token"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Flame, Loader2, AlertTriangle, CheckCircle } from "lucide-react"
import { validateSolanaAddress } from "@/lib/solana/utils"
import { toast } from "sonner"

export function TokenIncinerator() {
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()
  const [tokenMint, setTokenMint] = useState("")
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [burnHistory, setBurnHistory] = useState<
    Array<{ mint: string; amount: string; signature: string; timestamp: Date }>
  >([])

  const handleBurn = useCallback(async () => {
    if (!publicKey || !connection) {
      toast.error("Please connect your wallet first")
      return
    }

    if (!tokenMint || !amount) {
      toast.error("Please enter token mint address and amount")
      return
    }

    if (!validateSolanaAddress(tokenMint)) {
      toast.error("Invalid token mint address")
      return
    }

    const burnAmount = Number.parseFloat(amount)
    if (isNaN(burnAmount) || burnAmount <= 0) {
      toast.error("Please enter a valid amount")
      return
    }

    setIsLoading(true)

    try {
      const mintPublicKey = new PublicKey(tokenMint)

      // Get the associated token account
      const tokenAccount = await getAssociatedTokenAddress(mintPublicKey, publicKey)

      // Check if token account exists and has sufficient balance
      const tokenAccountInfo = await connection.getAccountInfo(tokenAccount)
      if (!tokenAccountInfo) {
        throw new Error("Token account not found. You don't own any of these tokens.")
      }

      // Get token account balance
      const balance = await connection.getTokenAccountBalance(tokenAccount)
      const currentBalance = balance.value.uiAmount || 0

      if (currentBalance < burnAmount) {
        throw new Error(`Insufficient balance. You have ${currentBalance} tokens.`)
      }

      // Create burn transaction
      const transaction = new Transaction()

      // Convert amount to smallest unit (considering decimals)
      const decimals = balance.value.decimals
      const burnAmountLamports = burnAmount * Math.pow(10, decimals)

      const burnInstruction = createBurnInstruction(
        tokenAccount,
        mintPublicKey,
        publicKey,
        burnAmountLamports,
        [],
        TOKEN_PROGRAM_ID,
      )

      transaction.add(burnInstruction)

      // Send transaction
      const signature = await sendTransaction(transaction, connection)

      // Wait for confirmation
      await connection.confirmTransaction(signature, "confirmed")

      // Add to burn history
      setBurnHistory((prev) => [
        {
          mint: tokenMint,
          amount: amount,
          signature,
          timestamp: new Date(),
        },
        ...prev,
      ])

      toast.success(`Successfully burned ${amount} tokens!`)
      setTokenMint("")
      setAmount("")
    } catch (error) {
      console.error("Burn failed:", error)
      toast.error(error instanceof Error ? error.message : "Failed to burn tokens")
    } finally {
      setIsLoading(false)
    }
  }, [publicKey, connection, tokenMint, amount, sendTransaction])

  return (
    <Card className="border-orange-500/20 bg-gray-900/50 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Flame className="h-6 w-6 text-orange-500" />
          Burn Tokens
        </CardTitle>
        <CardDescription className="text-gray-400">
          Permanently destroy tokens to reduce supply and increase scarcity
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!publicKey && (
          <Alert className="border-orange-500/20 bg-orange-500/10">
            <AlertTriangle className="h-4 w-4 text-orange-500" />
            <AlertDescription className="text-orange-200">
              Please connect your wallet to start burning tokens.
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="token-mint" className="text-white">
              Token Mint Address
            </Label>
            <Input
              id="token-mint"
              placeholder="Enter token mint address..."
              value={tokenMint}
              onChange={(e) => setTokenMint(e.target.value)}
              disabled={!publicKey || isLoading}
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount" className="text-white">
              Amount to Burn
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount to burn..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={!publicKey || isLoading}
              min="0"
              step="any"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>

          <Button
            onClick={handleBurn}
            disabled={!publicKey || isLoading || !tokenMint || !amount}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Burning Tokens...
              </>
            ) : (
              <>
                <Flame className="mr-2 h-5 w-5" />
                Burn Tokens
              </>
            )}
          </Button>
        </div>

        {burnHistory.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-gray-700">
            <h3 className="text-lg font-semibold text-white">Recent Burns</h3>
            <div className="space-y-2">
              {burnHistory.slice(0, 3).map((burn, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-300">Burned {burn.amount} tokens</span>
                  </div>
                  <a
                    href={`https://solscan.io/tx/${burn.signature}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    View Transaction
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
