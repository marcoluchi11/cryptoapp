"use client";
import { CryptoContext } from "@/context/CryptoContext";
import { useContext } from "react";

export default function Portfolio() {
  const { portfolio } = useContext(CryptoContext);
  if (portfolio.length === 0)
    return <h2>Add some coins into your portfolio querido</h2>;
  return <h1>My portfolio</h1>;
}
