"use client";
const Login = () => {
  return (
    <ul className="flex gap-10 items-center">
      <li className="cursor-pointer hover:underline">Portfolio</li>
      <li className="cursor-pointer hover:underline">Login</li>
      <li className=" cursor-pointer font-bold bg-green-400 px-3 py-2 transition-colors hover:bg-white hover:text-green-400 rounded-md">
        Sign Up
      </li>
    </ul>
  );
};

export default Login;
