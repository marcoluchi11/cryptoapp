"use client";

import auth from "@/config";
import { CryptoContext } from "@/context/CryptoContext";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
const Login = () => {
  const { user, setUser, getCoins, portfolio, setPortfolio } =
    useContext(CryptoContext);
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
    getCoins();
    // eslint-disable-next-line
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
