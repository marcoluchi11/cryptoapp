import Image from "next/image";

const Coin = async ({ params }) => {
  const { coin } = params;
  const url = `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}`;
  const data = await fetch(url);
  console.log(url);
  const result = await data.json();
  console.log(result);
  return (
    <div className="flex flex-col items-center">
      <h1>{result.id}</h1>
      <h1>{result.symbol}</h1>
      <h1>{result.name}</h1>
      <h1>{result.description.en}</h1>
      <Image src={result.image.large} alt="logo" height={100} width={100} />
      <h1>{result.market_cap_rank}</h1>
      <h1>{result.ath}</h1>
      <h1>{result.market_data.current_price.usd.toLocaleString()}</h1>
    </div>
  );
};

export default Coin;
