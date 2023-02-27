"use client";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => setEmail(e.target.value);
  const handleSubmit = (data, e) => {
    // e.preventDefault();
    console.log(data);
  };
  return (
    <form
      onSubmit={() => handleSubmit(email)}
      className="flex flex-col items-center min-w-fit"
    >
      <label htmlFor="email" className="">
        Email
      </label>
      <input
        placeholder="Email"
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
        value={email}
      />
      <input
        type="submit"
        value="Log In"
        className=" cursor-pointer px-4 py-2 m-5 font-bold bg-gray-500 rounded "
      />
    </form>
  );
};

export default Login;
