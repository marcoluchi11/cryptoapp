import { nanoid } from "nanoid";
import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
  const res = await data.json();

  return (
    <main className="flex flex-col items-center justify-between h-screen">
      <div className="flex flex-col min-w-full">
        <div className="flex justify-evenly">
          <div className=" flex justify-center w-1/2 mx-5 p-5">
            <p className="text-center">#</p>
            <p>Coin</p>
          </div>
          <div className="flex justify-between w-3/6">
            <p>Price</p>
            <p>Market Cap</p>
          </div>
        </div>
        {res.map((coin, index) => (
          <div key={nanoid()} className="flex">
            <div className="flex w-1/2  justify-center items-center">
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
                <p className=" text-center mx-5 font-semibold">{coin.name}</p>
                <p className="text-center font-light">
                  {coin.symbol.toUpperCase()}
                </p>
              </div>
            </div>
            <div className="flex w-3/6 items-center">
              <div className="flex w-5/6 justify-evenly">
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
        ))}
      </div>
    </main>
  );
}
