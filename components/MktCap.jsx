export default function MktCap({ data }) {
  return (
    <div className="flex flex-col md:flex-row mt-3 bg-slate-600 text-white rounded px-3 justify-around items-center">
      <p className=" flex flex-col  mb-3 md:mb-0 py-2 items-center">
        <span className="font-bold">Market Cap</span> $
        {data.market_data.market_cap.usd.toLocaleString()}
      </p>
      <p className=" flex flex-col mb-3 md:mb-0 items-center">
        <span className="font-bold">Fully Dilute Valuation</span> $
        {data.market_data.fully_diluted_valuation.usd.toLocaleString()}
      </p>
      <p className="flex flex-col mb-3 md:mb-0 items-center">
        <span className="font-bold">Total Supply</span>{" "}
        {data.market_data.total_supply.toLocaleString()}
      </p>
      <p className="flex flex-col mb-3 md:mb-0 items-center">
        <span className="font-bold">Max Supply</span>{" "}
        {data.market_data.max_supply === null
          ? "Infinite"
          : data.market_data.max_supply.toLocaleString()}
      </p>
      <p className="flex flex-col mb-3 md:mb-0 items-center">
        <span className="font-bold">Circulating Supply</span>
        {data.market_data.circulating_supply.toLocaleString()}
      </p>
    </div>
  );
}
