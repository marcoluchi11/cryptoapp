"use client";
import Spinner from "@/components/Spinner";
import { CryptoContext } from "@/context/CryptoContext";
import { nanoid } from "nanoid";
import { useContext } from "react";

export default function Portfolio() {
  const { portfolio, getCoins, user } = useContext(CryptoContext);

  if (portfolio.length === 0)
    return (
      <div>
        <Spinner />
      </div>
    );
  return (
    <div>
      <h1>My portfolio</h1>
      {portfolio.map((item) => (
        <h1 key={nanoid()}>{item}</h1>
      ))}
    </div>
  );
}
