"use client";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import Link from "next/link";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const HandleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };
  return (
    <div className="w-full">
      <form onSubmit={HandleSubmit}>
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="name">Email Address</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your email address"
            className="input px-4 py-2 border border-gray-400 w-full rounded-md focus:ring-2 focus:border-transparent transition-all duration-200 focus:ring-green-200 outline-0"
            required
          />
        </div>

        <div className="flex flex-col gap-1 mt-3 relative">
          <label htmlFor="name">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="name"
            id="name"
            placeholder="Enter your email Password"
            className="input relative px-4 py-2 border border-gray-400 w-full rounded-md focus:ring-2 focus:border-transparent transition-all duration-200 focus:ring-green-200 outline-0"
            required
          />
          <div
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="absolute right-4 top-10 cursor-pointer"
          >
            {" "}
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </div>

        <ButtonPrimary type="submit" color={`green`} className="w-max cursor-pointer mt-5">
          Login Now
        </ButtonPrimary>
      </form>
        <p className="mt-3">{"I don't have an account "} <Link href="/auth/register" className="text-green-500 hover:underline">Register here</Link></p>
    </div>
  );
};

export default LoginForm;
