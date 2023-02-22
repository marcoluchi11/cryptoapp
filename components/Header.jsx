"use client";

import Login from "./Login";

const Header = () => {
  return (
    <header className="flex justify-around items-center">
      <h1 className="text-4xl font-bold text-white  text-center my-10">
        CryptoApp
      </h1>
      <Login />
    </header>
  );
};

export default Header;
