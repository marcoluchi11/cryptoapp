"use client";
import { database } from "@/config";
import { doc, getDoc } from "firebase/firestore";

import { createContext, useState, useContext } from "react";

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [error, setError] = useState({ state: false, message: "" });
  const [success, setSuccess] = useState({ state: false, message: "holu" });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [coins, setCoins] = useState([]);
  // const usersRef = collection(database, "users", "marq@gmail.com");

  const getCoins = async () => {
    const docRef = doc(database, "users", user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
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
      setPortfolio(addData);
    } else {
      setPortfolio([]);
      console.log("No such document!");
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
