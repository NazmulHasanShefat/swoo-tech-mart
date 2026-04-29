import MainLogo from "@/components/ui/MainLogo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const CenterNav = () => {
  return (
    <nav className="px-5 py-3 flex justify-between items-center pb-5">
      <div className="left flex items-center gap-10">
        <Image src={"/logo.png"} width={130} height={50} alt="logo" />
        <ul className="menusList flex items-center gap-3">
          <Link href={"/"} className="font-bold flex items-center">
            HOMES
            <IoIosArrowDown />
          </Link>
          <Link href={"/"} className="font-bold flex items-center">
            PRODUCTS
            <IoIosArrowDown />
          </Link>
          <Link href={"/"} className="font-bold flex items-center">
            PAGES
            <IoIosArrowDown />
          </Link>
          <Link href={"/"} className="font-bold flex items-center">
            CONTACT
            <IoIosArrowDown />
          </Link>
        </ul>
      </div>
      <div className="nav_right flex items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="w-7.5 h-7.5 flex justify-center items-center bg-gray-200/50 cursor-pointer rounded-full">
            <CiHeart />
          </div>
          <div className="w-7.5  h-7.5 flex justify-center items-center bg-gray-200/50 cursor-pointer rounded-full">
            <FaUserCircle />
          </div>
           <div className="">
            <h2 className="text-gray-400">Welcome</h2>
            <div className="flex text-gray-900 font-bold">
              <Link href={"/login"} className="hover:text-green-500">Log in </Link>
              <span className="inline-block px-1">/</span>
              <Link href={"/login"} className="hover:text-green-500">Register </Link>
            </div>
          </div>
          <div className="w-7.5  h-7.5 flex justify-center items-center bg-gray-200/50 cursor-pointer rounded-full">
            <FaCartShopping />
          </div>
          <div className="">
            <h2 className="text-gray-400">Welcome</h2>
            <div className="flex text-gray-900 font-bold">
              <Link href={"/login"} className="hover:text-green-500">Log in </Link>
              <span className="inline-block px-1">/</span>
              <Link href={"/login"} className="hover:text-green-500">Register </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CenterNav;
