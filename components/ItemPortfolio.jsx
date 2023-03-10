import Image from "next/image";

export default function ItemPortfolio({ coin }) {
  return (
    <tr>
      <td className="flex items-center">
        <Image
          className="mx-2"
          src={coin.img}
          alt="logo"
          height={30}
          width={30}
        />
        {coin.name}
      </td>
      <td>${coin.usd.toLocaleString()}</td>
      <td>${coin.usd_market_cap.toLocaleString()}</td>
      <td>{coin.usd_24h_vol.toLocaleString()}</td>
      <td>{coin.usd_24h_change.toFixed(2)}</td>
    </tr>
  );
}
