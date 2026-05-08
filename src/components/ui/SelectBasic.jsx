import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export const OptionBasic = ({children})=>{
    return(
         <option value={`${children}`}> {children} </option>
    )
}

const SelectBasic = ({children, className}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <select
        name="categorys"
        className={`w-full appearance-none outline-none py-2 ring-2 focus:ring-green-200 ring-gray-200 rounded-lg px-3`}
        id="categorys"
      >
        {children}
      </select>
      <IoMdArrowDropdown className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
    </div>
  );
};

export default SelectBasic;
