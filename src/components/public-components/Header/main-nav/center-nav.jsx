import MainLogo from "@/components/ui/MainLogo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const CenterNav = () => {
  return (
    <nav className="px-5 flex justify-between items-center">
      <div className="left flex items-center gap-10">
        <Image src={"/logo.png"} width={180} height={50} alt="logo" />
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
          <div className="w-7.5 h-7.5 flex justify-center items-center bg-gray-200 cursor-pointer rounded-full">
            <FaCartShopping />
          </div>
          <div className="w-7.5  h-7.5 flex justify-center items-center bg-gray-200 cursor-pointer rounded-full">
            <CiHeart/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CenterNav;
