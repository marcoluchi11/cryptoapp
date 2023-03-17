"use client";
import { database } from "@/config";
import { CryptoContext } from "@/context/CryptoContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Error from "./Error";
import Spinner from "./Spinner";
import Success from "./Success";

const Coin = ({ coin }) => {
  const {
    user,
    success,
    setSuccess,
    setLoading,
    setError,
    error,
    loading,
    setPortfolio,
    portfolio,
  } = useContext(CryptoContext);
  const addCoin = async (coin) => {
    try {
      if (user) {
        setLoading(true);
        const isListed = portfolio.some((item) => item.id === coin.id);
        if (isListed) {
          setLoading(false);
          setError({
            state: true,
            message: "The coin is already on your portfolio",
          });
          setTimeout(() => {
            setError({ state: false, message: "" });
          }, 3000);
          return;
        }
        const userRef = doc(database, "users", user.email);
        const chosenCoin = {
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          img: coin.image,
        };
        setPortfolio([
          ...portfolio,
          {
            ...chosenCoin,
            usd: coin.current_price,
            usd_market_cap: coin.market_cap,
            usd_24h_change: coin.price_change_percentage_24h,
            usd_24h_vol: coin.total_volume,
          },
        ]);
        localStorage.setItem(
          "portfolio",
          JSON.stringify([
            ...portfolio,
            {
              ...chosenCoin,
              usd: coin.current_price,
              usd_market_cap: coin.market_cap,
              usd_24h_change: coin.price_change_percentage_24h,
              usd_24h_vol: coin.total_volume,
            },
          ])
        );
        const newFields = {
          coins: arrayUnion(chosenCoin),
        };
        await updateDoc(userRef, newFields);
        setLoading(false);
        setSuccess({ state: true, message: "Coin added successfully" });
        setTimeout(() => {
          setSuccess({ state: false, message: "" });
        }, 2500);
      } else {
        setError({
          state: true,
          message: "Login first to add coins to your portfolio",
        });
        setTimeout(() => {
          setError({ state: false, message: "" });
        }, 2500);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
        <td
          className={`text-center ${
            coin.price_change_percentage_24h > 0
              ? "text-green-500"
              : "text-red-500"
          } text-center`}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </td>
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
      {error.state && (
        <tr className="fixed bottom-0 right-0 mx-3 my-3">
          <td>
            <Error message={error.message} />
          </td>
        </tr>
      )}
      {success.state && (
        <tr className="fixed bottom-0 right-0 mx-3 my-3">
          <td>
            <Success message={success.message} />
          </td>
        </tr>
      )}
      {loading && (
        <tr className="fixed bottom-0 right-0 mx-3 my-3">
          <td>
            <Spinner />
          </td>
        </tr>
      )}
    </>
  );
};

export default Coin;
