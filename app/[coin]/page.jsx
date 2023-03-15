import Info from "@/components/Info";
import MktCap from "@/components/MktCap";
import Image from "next/image";

export default async function Coin({ params }) {
  const { coin } = params;
  const url = `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}`;
  const data = await fetch(url, { cache: "no-store" });
  const result = await data.json();
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center">
      <section className="w-full sm:w-2/3 md:1/2 mx-3">
        <h1 className="">Rank #{result.market_cap_rank}</h1>
        <div className="flex items-center ">
          <h1 className="font-bold text-2xl">{result.name}</h1>
          <h1 className="uppercase text-xl text-gray-500 mx-2">
            {result.symbol}
          </h1>
          <Image
            src={result.image.large || result.image.small || result.image.thumb}
            alt="logo"
            height={35}
            width={35}
          />
          <h3 className="text-red-500 ml-2 font-bold">
            {result.market_data.price_change_percentage_24h.toFixed(2)}%
          </h3>
        </div>
        <h1 className="font-bold text-3xl ">
          ${result.market_data.current_price.usd.toLocaleString()}
        </h1>
        <MktCap data={result} />
      </section>
      <Info data={result} />
    </div>
  );
}
