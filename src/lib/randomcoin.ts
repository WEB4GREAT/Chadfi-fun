// src/lib/randomCoin.ts
import type { CoinData } from "./types";

const adjectives = [
  "Crazy", "Epic", "Lucky", "Wild", "Funky", "Chad", "Meme", "Turbo",
  "Hyper", "Ultra", "Mega", "Mini", "Quantum", "Galactic", "Crypto", "Neo"
];
const nouns = [
  "Coin", "Token", "Cash", "Buck", "Chip", "Dollar", "Loot", "Gem",
  "Bit", "Stack", "Nugget", "Shard", "Orb"
];

const usedNames = new Set<string>();

function generateUniqueName(): string {
  let name: string;
  do {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const num = Math.floor(Math.random() * 100000); // uniqueness
    name = `${adj}${noun}${num}`;
  } while (usedNames.has(name));
  usedNames.add(name);
  return name;
}

export function generateCoin(): CoinData {
  const name = generateUniqueName();
  const symbol = name
    .replace(/[^A-Za-z]/g, "")
    .substring(0, 5)
    .toUpperCase();

  const description = `The legendary ${name}, a one-of-a-kind meme coin!`;

  return {
    name,
    symbol,
    description,
    image: "", // no logo
  };
}
