import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export const DropItem = ({children, hrefPath, className}) => {
  return (
    <li className="list-none">
      {" "}
      <Link
        href={hrefPath || "/"}
        className={className || "px-4 py-1 block hover:bg-green-500 hover:text-white rounded-md"}
      >
        {children}
      </Link>{" "}
    </li>
  );
};

const HoverDropDown = ({ children, dropName, className }) => {
  return (
    <div className={`hoverDropDown_shi relative cursor-pointer group ${className}`}>
      <div className="text-white flex items-center justify-center gap-3 px-5">
        {dropName || "DropdownName"} <IoIosArrowDown />
      </div>
      <ul className="bg-white border-2 border-gray-200 shadow-md min-w-50 z-50 w-max absolute left-0 top-7 text-black rounded-md px-2 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {children}
      </ul>
    </div>
  );
};

export default HoverDropDown;
