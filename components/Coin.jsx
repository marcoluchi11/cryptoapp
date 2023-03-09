"use client";
import { database } from "@/config";
import { CryptoContext } from "@/context/CryptoContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Coin = ({ coin }) => {
  const { user } = useContext(CryptoContext);
  // const usersCollectionRef = collection(database, "users");
  const addCoin = async (coin) => {
    try {
      if (user) {
        const userRef = doc(database, "users", user.email);
        const newFields = {
          coins: arrayUnion(coin.id),
        };
        await updateDoc(userRef, newFields);
        console.log("Coin added succesfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr className="my-5 hover:opacity-50 opacity-100 transition-opacity">
      <td className="text-center"># {coin.market_cap_rank}</td>
      <td className="flex justify-center">
        <Image src={coin.image} alt="logo" width={35} height={35} />
      </td>

      <td>
        <Link href={`/${coin.id}`} className="hover:underline">
          {coin.name} {coin.symbol.toUpperCase()}
        </Link>
      </td>
      <td className="text-center">${coin.current_price.toLocaleString()}</td>
      <td className="text-center hidden md:block">
        ${coin.market_cap.toLocaleString()}
      </td>
      <td
        onClick={() => addCoin(coin)}
        className="text-2xl text-center border-2 border-black rounded-lg  bg-white  text-black hover:opacity-50 opacity-100 transition-opacity cursor-pointer "
      >
        +
      </td>
    </tr>
  );
};

export default Coin;
