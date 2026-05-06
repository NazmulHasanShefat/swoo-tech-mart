import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const menuList = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "cart", link: "/cart" },
  { name: "checkout", link: "/checkout" },
];

const CenterNav = () => {
  return (
    <nav className="px-5 py-2 flex justify-between items-center pb-5 w-full max-w-325 mx-auto">
      <div className="left flex items-center gap-10">
        <Link href={"/"}>
        <Image src={"/logo.png"} width={130} height={50} alt="logo" />
        </Link>
        <ul className="menusList hidden lg:flex items-center gap-3">
          {menuList.map((menu, index) => {
            return (
              <Link
                key={index}
                href={menu.link}
                className="font-bold flex items-center"
              >
                {menu.name}
                <IoIosArrowDown />
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="nav_right flex items-center gap-3">
        <div className="flex items-center gap-3 ">
          <div className="w-7.5 h-7.5 flex justify-center items-center bg-gray-200/50 cursor-pointer rounded-full">
            <CiHeart />
          </div>
          <div className="w-7.5  h-7.5 flex justify-center items-center bg-gray-200/50 cursor-pointer rounded-full">
            <Link href={"/profile"}>
            <FaUserCircle />
            </Link>
          </div>
          <div className="hidden sm:block">
            <h2 className="text-gray-400">Welcome</h2>
            <div className="flex text-gray-900 font-bold">
              <Link href={"/auth/login"} className="hover:text-green-500">
                Log in{" "}
              </Link>
              <span className="inline-block px-1">/</span>
              <Link href={"/auth/register"} className="hover:text-green-500">
                Register{" "}
              </Link>
            </div>
          </div>
          <div className="w-7.5  h-7.5 flex justify-center items-center relative bg-gray-200/50 cursor-pointer rounded-full">
            <FaCartShopping size={20}/>
            <div className="px-2 py-1 bg-green-500 text-white rounded-full text-xs absolute -bottom-2 -right-2">$</div>
          </div>
          <div className="">
            <h2 className="text-gray-400">Cart</h2>
            <div className="flex text-gray-900 font-bold">
             $4543
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CenterNav;
