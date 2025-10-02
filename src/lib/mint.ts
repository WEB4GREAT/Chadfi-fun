import { Connection, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import type { WalletContextState } from "@solana/wallet-adapter-react";

// Treasury wallet (your wallet that collects 0.03 SOL)
const TREASURY_WALLET = new PublicKey("CsFUNNsBz9M8XR2aM2HcWNJcnQyNujAPdFkJiunWo5wD");

// Solana Devnet endpoint
const connection = new Connection("https://api.devnet.solana.com");

export async function mintCoin(wallet: WalletContextState): Promise<string> {
  if (!wallet.publicKey || !wallet.signTransaction) {
    throw new Error("Wallet not connected");
  }

  // Transaction: send 0.03 SOL to treasury
  const tx = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: TREASURY_WALLET,
      lamports: 0.03 * 1e9, // 0.03 SOL in lamports
    })
  );

  // Get a recent blockhash
  tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
  tx.feePayer = wallet.publicKey;

  // Sign with connected wallet
  const signedTx = await wallet.signTransaction(tx);

  // Send transaction to the network
  const sig = await connection.sendRawTransaction(signedTx.serialize());
  await connection.confirmTransaction(sig, "confirmed");

  return sig; // return signature for explorer
}