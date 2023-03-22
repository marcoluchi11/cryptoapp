"use client";
import Link from "next/link";
import Login from "./Login";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row  sm:justify-between items-center mr-5 ml-5 ">
      <Link href="/">
        <h1 className="text-4xl font-bold text-white  text-center my-5 cursor-pointer">
          Crypto<span className="text-gray-500">Crate</span>
        </h1>
      </Link>
      <section className="mb-5 sm:mb-0">
        <Login />
      </section>
    </header>
  );
};

export default Header;
