import Coin from "@/components/Coin";
import { nanoid } from "nanoid";

export default async function Home() {
  const data = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    { next: { revalidate: 120 } }
  );
  const result = await data.json();

  return (
    <main className="flex flex-col items-center justify-between h-screen">
      <div className="flex flex-col min-w-full">
        {result.map((coin) => (
          <Coin key={nanoid()} coin={coin} />
        ))}
      </div>
    </main>
  );
}
