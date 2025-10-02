// src/components/CoinCard.tsx
import React from "react";
import type { CoinData } from "../lib/types";

interface CoinCardProps {
  coin: CoinData | null;
}

const TOTAL_SUPPLY = 1_000_000_000; // 1 billion coins

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  if (!coin) return null; // only show when generated

  return (
    <div className="coin-card">
      <div className="coin-info">
        <h2 className="coin-name">{coin.name}</h2>
        <p className="coin-symbol">{coin.symbol}</p>
        <p className="coin-description">{coin.description}</p>
        <p style={{ fontSize: "0.9rem", color: "#80ff80", marginTop: "0.3rem" }}>
          Total Supply: {TOTAL_SUPPLY.toLocaleString()} {coin.symbol}
        </p>
        <p style={{ fontSize: "0.8rem", color: "#80ff80", marginTop: "0.5rem" }}>
          This is an AI-generated meme coin.
        </p>
      </div>
    </div>
  );
};

export default CoinCard;
