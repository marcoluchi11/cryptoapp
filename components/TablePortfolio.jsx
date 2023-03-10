"use client";
import { CryptoContext } from "@/context/CryptoContext";
import { nanoid } from "nanoid";
import { useContext } from "react";
import ItemPortfolio from "./ItemPortfolio";

export default function TablePortfolio() {
  const { portfolio } = useContext(CryptoContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>24h Vol</th>
          <th>Last 24h</th>
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
