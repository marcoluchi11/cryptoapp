"use client";

import Link from "next/link";

const Login = () => {
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
