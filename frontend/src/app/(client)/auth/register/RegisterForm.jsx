"use client";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import Link from "next/link";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rangeVal, setRangeVal]= useState(8);
  const [currentPassword, setCurrentPassword] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  // const generatePassword = () => {
  //   const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   const LOWER = "abcdefghijklmnopqrstuvwxyz";
  //   const NUMS = "0123456789";
  //   const SYMS = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  //   const ALL = UPPER + LOWER + NUMS + SYMS;

  //   // required characters
  //   const required = [
  //     UPPER[Math.floor(Math.random() * UPPER.length)],
  //     LOWER[Math.floor(Math.random() * LOWER.length)],
  //     NUMS[Math.floor(Math.random() * NUMS.length)],
  //     SYMS[Math.floor(Math.random() * SYMS.length)],
  //   ];

  //   const arr = new Uint32Array(5);
  //   crypto.getRandomValues(arr);
  //   const pw = Array.from(arr, (value) => ALL[value % ALL.length]);
  //    required.forEach((ch) => {
  //     pw[Math.floor(Math.random() * length)] = ch;
  //    });
  //   console.log(pw.join(""));
  // };
// length = 8     default value if not provided
  const generatePassword = (length = 8) => {
    const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LOWER = "abcdefghijklmnopqrstuvwxyz";
    const NUMS = "0123456789";
    const SYMS = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    const ALL = UPPER + LOWER + NUMS + SYMS;

    // 1. Required characters (must include all types)
    const required = [
      UPPER[Math.floor(Math.random() * UPPER.length)],
      LOWER[Math.floor(Math.random() * LOWER.length)],
      NUMS[Math.floor(Math.random() * NUMS.length)],
      SYMS[Math.floor(Math.random() * SYMS.length)],
    ];

    // 2. Fill remaining characters randomly
    const pw = [...required];

    while (pw.length < length) {
      const randomIndex = Math.floor(Math.random() * ALL.length);
      pw.push(ALL[randomIndex]);
    }

    // 3. Shuffle (important so required chars don't stay in front)
    for (let i = pw.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pw[i], pw[j]] = [pw[j], pw[i]];
    }

     console.log(pw.join(""));
     setCurrentPassword(pw.join(""));
  };

  // Example
  // console.log(generatePassword(10));

  const handleRange = (e)=>{
    setRangeVal(e.target.value);
    generatePassword(e.target.value);
  }

  
  return (
    <div className="w-full">
      <form onSubmit={HandleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="input px-4 py-2 border border-gray-400 w-full rounded-md focus:ring-2 focus:border-transparent transition-all duration-200 focus:ring-green-200 outline-0"
            required
          />
        </div>
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
            defaultValue={currentPassword}
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
         <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            className="py-2 px-4 rounded-2xl bg-green-600 text-white w-max text-sm mt-3 hover:opacity-80 cursor-pointer"
            onClick={() => generatePassword(rangeVal)}
          >
            Generate password
          </button>

          <div className="flex items-center gap-2 mt-[12px]">
            <span>Length:</span>
          <input type="range" defaultValue={8} onChange={handleRange} min={8} max={50} className=" h-5 bg-green-600 rounded-lg appearance-none cursor-pointer accent-white hover:accent-green-200"/>
          <span> {rangeVal} </span>
          </div>
         </div>
         
        </div>

        <ButtonPrimary
          type="submit"
          color={`green`}
          className="w-max cursor-pointer mt-5"
        >
          Register
        </ButtonPrimary>
        <p className="mt-3">
          {"I have an account "}{" "}
          <Link href="/auth/login" className="text-green-500 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
