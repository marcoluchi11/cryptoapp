import Coin from "@/components/Coin";
import { nanoid } from "nanoid";

export default async function Home() {
  const data = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    { next: { revalidate: 120 } }
  );
  const result = await data.json();

  return (
    <main>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="text-center">Rank</th>
            <th className="text-center">Logo</th>
            <th className="text-left">Name</th>
            <th className="text-center">Current Price</th>
            <th className="text-center">Last 24h</th>
            <th className="text-center hidden md:block">Market Cap Total</th>
            <th className="text-center">Add</th>
          </tr>
        </thead>
        <tbody>
          {result ? (
            result.map((coin) => <Coin key={nanoid()} coin={coin} />)
          ) : (
            <p>There was an server external error</p>
          )}
        </tbody>
      </table>
    </main>
  );
}
