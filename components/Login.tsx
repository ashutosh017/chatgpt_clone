"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import logo from "../public/logo.svg";

function Login() {
  const session = useSession();
  console.log(session);
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image src={logo} width={200} height={200} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
