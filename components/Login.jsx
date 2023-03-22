"use client";
import auth, { database } from "@/config";
import { CryptoContext } from "@/context/CryptoContext";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
const Login = () => {
  const { user, setUser, getCoins, portfolio } = useContext(CryptoContext);
  const loginGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      const emailRef = doc(database, "users", result.user.email);
      const docSnap = await getDoc(emailRef);

      if (!docSnap.exists()) {
        const docData = { email: result.user.email, coins: [] };
        await setDoc(emailRef, docData);
      }
      getCoins();
    } catch (error) {
      const errorCode = error.code;
      console.error(errorCode);
      const errorMessage = error.message;
      console.error(errorMessage);
    }
  };
  const signOut = async () => {
    try {
      await auth.signOut();
      // localStorage.setItem("portfolio", JSON.stringify([]));
      // setPortfolio([]);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      getCoins(currentUser);
    });
    // eslint-disable-next-line
  }, [setUser]);
  if (user)
    return (
      <ul className="flex gap-10  items-center">
        <Link href="/portfolio">
          <li className="cursor-pointer hover:underline">
            My Portfolio ({portfolio.length})
          </li>
        </Link>
        <li className=" flex items-center text-ellipsis whitespace-nowrap overflow-hidden w-30">
          <Image
            className="rounded-full"
            src={user.photoURL}
            alt="avatar"
            width={40}
            height={40}
          />
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

      <li onClick={() => loginGoogle()}>
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55"
        >
          <svg
            className="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>
      </li>
    </ul>
  );
};

export default Login;
