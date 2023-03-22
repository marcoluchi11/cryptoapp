"use client";
import { database } from "@/config";
import { doc, getDoc } from "firebase/firestore";

import { createContext, useState, useContext } from "react";

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [error, setError] = useState({ state: false, message: "" });
  const [success, setSuccess] = useState({ state: false, message: "" });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [coins, setCoins] = useState([]);

  const getCoins = async (current) => {
    try {
      const docRef = doc(database, "users", current.email);
      const docSnap = await getDoc(docRef);
      const dbCoins = docSnap.data().coins;
      const idString = dbCoins.map((item) => item.id);

      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${idString.toString()}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=false`;
      const data = await fetch(url);
      const result = await data.json();
      const addData = dbCoins.map((item) => {
        return {
          ...item,
          ...result[item.id],
        };
      });
      setPortfolio(addData.sort((a, b) => b.usd - a.usd));
    } catch (err) {
      setPortfolio([]);
      console.log("No such document!", err);
    }
  };
  return (
    <CryptoContext.Provider
      value={{
        loading,
        error,
        getCoins,
        success,
        setLoading,
        setError,
        coins,
        setCoins,
        portfolio,
        setPortfolio,
        setSuccess,
        user,
        setUser,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
export const useCryptoContext = () => useContext(CryptoContext);
