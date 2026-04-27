"use client";
import React, { useEffect, useRef, useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";


export function Option({ children, handleSelect }) {
  return (
    <div
      onClick={handleSelect}
      className="option drop_option cursor-pointer hover:bg-gray-200 py-1 flex justify-between items-center gap-1 pl-3 pr-1 rounded-lg"
    >
      {" "}
      {children}
    </div>
  );
}

const DropDown = ({ children, currentValue }) => {
  const [isOpen, setOpen] = useState(true);
  const dropdownRef = useRef();

  const dropdownHandleToggle = () => {
    setOpen(!isOpen);
  };


  useEffect(()=>{
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpen(false);
      }
    };

  
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  },[])
  
  return (
    <section id="dropdown" className="relative" ref={dropdownRef}>
      <button
        onClick={dropdownHandleToggle}
        type="button"
        className="flex justify-between items-center dropdownTriger bg-red-200 py-2 px-4 rounded-xl cursor-pointer focus:ring focus:ring-blue-300"
      >
        {currentValue}
        <IoMdArrowDropdown />
      </button>
      {isOpen && (
        <div onClick={()=> setOpen(false)} className="dropdown_options absolute py-1 px-2 border border-gray-300 shadow-lg w-max rounded-xl right-0 min-w-37.5">
          {children}
        </div>
      )}
    </section>
  );
};

export default DropDown;
