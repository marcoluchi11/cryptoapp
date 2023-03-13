"use client";
import { CryptoContext } from "@/context/CryptoContext";
import { nanoid } from "nanoid";
import { useContext } from "react";
import ItemPortfolio from "./ItemPortfolio";

export default function TablePortfolio() {
  const { portfolio } = useContext(CryptoContext);
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr className="w-full">
          <th className=" text-center">Coin</th>
          <th>Price</th>
          <th>Last 24h</th>
          <th className="text-left">Market Cap</th>
          <th className="text-left hidden md:block">24h Vol</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {portfolio.map((item) => (
          <ItemPortfolio key={nanoid()} coin={item} />
        ))}
      </tbody>
    </table>
  );
}
