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
    console.log(user.email);
    const docRef = doc(database, "users", user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setPortfolio(docSnap.data().coins);
    } else {
      // doc.data() will be undefined in this case
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
