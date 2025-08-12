import { type Connection, PublicKey, Transaction } from "@solana/web3.js"
import { getAssociatedTokenAddress, createBurnInstruction } from "@solana/spl-token"

export const BURN_ADDRESS = new PublicKey("1nc1nerator11111111111111111111111111111111")

export async function createBurnTransaction(
  connection: Connection,
  payer: PublicKey,
  tokenMint: PublicKey,
  amount: number,
): Promise<Transaction> {
  const transaction = new Transaction()

  // Get the associated token account
  const tokenAccount = await getAssociatedTokenAddress(tokenMint, payer)

  // Create burn instruction
  const burnInstruction = createBurnInstruction(tokenAccount, tokenMint, payer, amount)

  transaction.add(burnInstruction)

  return transaction
}

export async function getTokenBalance(connection: Connection, tokenAccount: PublicKey): Promise<number> {
  try {
    const balance = await connection.getTokenAccountBalance(tokenAccount)
    return balance.value.uiAmount || 0
  } catch (error) {
    console.error("Error fetching token balance:", error)
    return 0
  }
}

export function formatTokenAmount(amount: number, decimals = 9): string {
  return (amount / Math.pow(10, decimals)).toLocaleString()
}

export function validateSolanaAddress(address: string): boolean {
  try {
    new PublicKey(address)
    return true
  } catch {
    return false
  }
}
