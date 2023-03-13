"use client";
import Spinner from "@/components/Spinner";
import TablePortfolio from "@/components/TablePortfolio";
import { CryptoContext } from "@/context/CryptoContext";
import { useContext, useEffect } from "react";

export default function Portfolio() {
  const { portfolio, getCoins } = useContext(CryptoContext);
  useEffect(() => {
    if (portfolio.length === 0) {
      getCoins();
    }
    //eslint-disable-next-line
  }, []);
  if (portfolio.length === 0)
    return (
      <div className="mt-10 flex items-center justify-center">
        <Spinner />
      </div>
    );
  return (
    <section>
      <TablePortfolio />
    </section>
  );
}
