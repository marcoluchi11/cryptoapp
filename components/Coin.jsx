"use client";
import Image from "next/image";
import Link from "next/link";

const Coin = ({ coin }) => {
  return (
    <div className="flex">
      <div
        className="flex w-1/2  justify-end mr-5
       items-center"
      >
        <div className="m-5 p-5">
          <p className="text-center">{coin.market_cap_rank}</p>
        </div>
        <div className="flex justify-between items-center w-1/3">
          <Image
            src={coin.image}
            alt="logo"
            width={35}
            height={35}
            className="mx-5"
          />
          <Link href={`/${coin.name}`} className="cursor-pointer">
            <p className=" text-center mx-5 font-semibold">{coin.name}</p>
            <p className="text-center font-light">
              {coin.symbol.toUpperCase()}
            </p>
          </Link>
        </div>
      </div>
      <div className="flex w-1/2 items-center">
        <div className="flex w-1/2 justify-evenly items-center">
          <p className="mx-5 font-semibold">
            ${coin.current_price.toLocaleString()}
          </p>
          <p className="mx-5">${coin.market_cap.toLocaleString()}</p>
          <button className="text-3xl mx-5 bg-white text-black px-3 rounded-md hover:opacity-50 opacity-100 transition-opacity  ">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coin;
