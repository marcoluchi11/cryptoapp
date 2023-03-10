"use client";
import auth from "@/config";
import { CryptoContext } from "@/context/CryptoContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useContext, useState } from "react";
import Error from "./Error";
import Spinner from "./Spinner";
import Success from "./Success";
export default function Form() {
  const { setSuccess, success, error, setError, setLoading, loading, setUser } =
    useContext(CryptoContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setError({ state: true, message: "Don't leave any input empty" });
      return;
    }
    try {
      setError({ state: false, message: "" });
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setSuccess({
        state: true,
        message: " Signed in Succesfully.",
      });
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setSuccess({ state: false, message: "" });
      }, 3000);
      setUser(userCredential.user);
    } catch (err) {
      setError({ state: true, message: err.code });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center mt-10"
    >
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
        className="text-black my-4 px-1 rounded py-1"
        placeholder="Email"
      />
      <input
        className="text-black px-1 rounded py-1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <input
        type="submit"
        value="Login"
        className="cursor-pointer bg-white text-black m-5 rounded px-3 py-2 w-40 transition-colors hover:bg-slate-700 hover:text-white"
      />
      <Link className="hover:underline" href="/login">
        <p>Forgot your password?</p>
      </Link>
      <section className="mt-5">
        {loading && <Spinner />}
        {success.state && <Success message={success.message} />}
        {error.state && <Error message={error.message} />}
      </section>
    </form>
  );
}
