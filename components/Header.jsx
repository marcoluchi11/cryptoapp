"use client";

import Link from "next/link";
import Login from "./Login";

const Header = () => {
  return (
    <header className="flex justify-between items-center mr-5 ml-5">
      <Link href="/">
        <h1 className="text-4xl font-bold text-white  text-center my-10 cursor-pointer">
          CryptoApp
        </h1>
      </Link>
      <Login />
    </header>
  );
};

export default Header;