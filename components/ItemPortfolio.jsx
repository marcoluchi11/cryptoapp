"use client";
import { database } from "@/config";
import { CryptoContext } from "@/context/CryptoContext";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { useContext } from "react";

export default function ItemPortfolio({ coin }) {
  const { user, setPortfolio, portfolio } = useContext(CryptoContext);
  const removeCoin = async (coin) => {
    try {
      const filteredPortfolio = portfolio.filter((item) => item.id !== coin.id);
      setPortfolio(filteredPortfolio);
      const userRef = doc(database, "users", user.email);

      const newFields = {
        coins: filteredPortfolio,
      };
      await updateDoc(userRef, newFields);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr>
      <td className="flex items-center sm:justify-center justify-start ">
        <Image src={coin.img} alt="logoToken" height={20} width={20} />
        <p className="">
          {coin.name} {coin.symbol.toUpperCase()}
        </p>
      </td>

      <td className="text-center">
        <p>${coin.usd.toLocaleString()}</p>
      </td>
      <td
        className={`${
          coin.usd_24h_change > 0 ? "text-green-500" : "text-red-500"
        } text-center`}
      >
        {coin.usd_24h_change.toFixed(2)}%
      </td>
      <td className="">
        <p>${coin.usd_market_cap.toLocaleString()}</p>
      </td>

      <td className="hidden md:block">
        <p>{coin.usd_24h_vol.toLocaleString()}</p>
      </td>
      <td
        onClick={() => removeCoin(coin)}
        className="text-lg font-light text-center  bg-red-600  text-white hover:opacity-50 opacity-100 transition-opacity cursor-pointer rounded-full "
      >
        Remove
      </td>
    </tr>
  );
}
