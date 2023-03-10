"use client";
import Spinner from "@/components/Spinner";
import TablePortfolio from "@/components/TablePortfolio";
import { CryptoContext } from "@/context/CryptoContext";
import { useContext } from "react";

export default function Portfolio() {
  const { portfolio } = useContext(CryptoContext);

  if (portfolio.length === 0)
    return (
      <div>
        <Spinner />
      </div>
    );
  return (
    <div>
      <h1>My portfolio</h1>
      <TablePortfolio />
    </div>
  );
}
