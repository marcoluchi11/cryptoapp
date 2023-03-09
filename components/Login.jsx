"use client";

import auth from "@/config";
import { CryptoContext } from "@/context/CryptoContext";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
const Login = () => {
  const { user, setUser, getCoins, portfolio } = useContext(CryptoContext);
  const signOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out successfully");
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    const getData = async () => {
      getCoins();
      console.log(portfolio.toString());
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${portfolio.toString()}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=false`;
    };
    getData();
    //eslint-disable-next-line
  }, [setUser, user]);
  if (user)
    return (
      <ul className="flex gap-10 items-center">
        <Link href="/portfolio">
          <li className="cursor-pointer hover:underline">My Portfolio</li>
        </Link>
        <li className=" flex items-center text-ellipsis whitespace-nowrap overflow-hidden w-30">
          <RxAvatar className="mx-3 cursor-text" size={30} />

          <span className="hidden md:block">{user.email}</span>
        </li>
        <li
          onClick={signOut}
          className=" cursor-pointer font-bold bg-red-400 px-3 py-2 transition-colors hover:bg-white hover:text-red-400 rounded-md"
        >
          Sign Out
        </li>
      </ul>
    );

  return (
    <ul className="flex gap-10 items-center">
      <li className="cursor-pointer hover:underline">Portfolio</li>
      <Link href="/login">
        <li className="cursor-pointer hover:underline">Login</li>
      </Link>
      <Link href="/signup">
        <li className=" cursor-pointer font-bold bg-green-400 px-3 py-2 transition-colors hover:bg-white hover:text-green-400 rounded-md">
          Sign Up
        </li>
      </Link>
    </ul>
  );
};

export default Login;
