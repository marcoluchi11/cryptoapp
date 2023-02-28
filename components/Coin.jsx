"use client";
import Image from "next/image";
import Link from "next/link";

const Coin = ({ coin }) => {
  return (
    <tr className="my-5 hover:opacity-50 opacity-100 transition-opacity">
      <td className="text-center"># {coin.market_cap_rank}</td>
      <td className="flex justify-center">
        <Image src={coin.image} alt="logo" width={35} height={35} />
      </td>

      <td>
        <Link href={`/${coin.name}`} className="hover:underline">
          {coin.name} {coin.symbol.toUpperCase()}
        </Link>
      </td>
      <td className="text-center">${coin.current_price.toLocaleString()}</td>
      <td className="text-center hidden md:block">
        ${coin.market_cap.toLocaleString()}
      </td>
      <td className="text-2xl text-center border-2 border-black rounded-lg  bg-white  text-black hover:opacity-50 opacity-100 transition-opacity cursor-pointer ">
        +
      </td>
    </tr>
  );
};

export default Coin;
