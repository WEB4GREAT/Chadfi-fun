import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CoinCard from "./components/CoinCard";
import Footer from "./components/Footer";
import { generateCoin } from "./lib/randomcoin";
import type { CoinData } from "./lib/types";
import { mintCoin } from "./lib/mint"; // ✅ mint helper
import { useWallet } from "@solana/wallet-adapter-react";

const App: React.FC = () => {
  const [coin, setCoin] = useState<CoinData | null>(null);
  const [loading, setLoading] = useState(false);
  const wallet = useWallet();

  const handleGenerateCoin = () => {
    setLoading(true);
    setTimeout(() => {
      const newCoin = generateCoin();
      setCoin(newCoin);
      setLoading(false);
    }, 5000);
  };

  const handleMint = async () => {
  try {
    setLoading(true);
    const sig = await mintCoin(wallet); // from lib/mint.ts

    alert(
      `Mint successful! 🎉\n\nView transaction:\nhttps://explorer.solana.com/tx/${sig}?cluster=devnet`
    );
  } catch (err) {
    console.error(err);
    alert("Mint failed ❌");
  } finally {
    setLoading(false);
  }
};

  return (
    <div>
      <Navbar />

      <section className="hero-section">
        <h1 className="hero-title">Mint Your Meme Coin</h1>
        <p className="hero-subtitle">
          Connect your wallet, generate a unique meme coin, and mint it!
        </p>

        {/* CoinCard shows above button, only after generation */}
        {coin && <CoinCard coin={coin} />}

        <button
          className="generate-btn"
          onClick={handleGenerateCoin}
          disabled={loading}
        >
          {loading ? "Generating…" : "Generate Coin"}
        </button>

        {/* ✅ Mint button only shows after coin is generated */}
        {coin && (
          <button
            className="mint-btn"
            onClick={handleMint}
            disabled={loading}
          >
            {loading ? "Processing…" : "Mint for 0.03 SOL"}
          </button>
        )}
      </section>

      <section className="info-section">
        <div className="mini-card">
          <h3>Battle Arena</h3>
          <p className="coming-soon">Coming Soon…</p>
        </div>
        <div className="mini-card">
          <h3>DAO Governance</h3>
          <p className="coming-soon">Coming Soon…</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;