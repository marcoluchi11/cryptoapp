"use client";
const { createContext, useState, useContext } = require("react");

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [error, setError] = useState({ state: false, message: "" });
  const [success, setSuccess] = useState({ state: false, message: "holu" });
  const [loading, setLoading] = useState(false);
  return (
    <CryptoContext.Provider
      value={{ loading, error, success, setLoading, setError, setSuccess }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
export const useCryptoContext = () => useContext(CryptoContext);
