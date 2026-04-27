"use client"
import DropDown, { Option } from "@/components/ui/dropdown";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

const currencyList = ["USD", "BDT", "PKR"];

const CurrencyDropdown = () => {
  const [currentValue, setCurrentValue] = useState(currencyList[0]);
   
   const handleSelect = (e) => {
    setCurrentValue(e.target.innerText);
  };

  return (
    <DropDown currentValue={currentValue}>
      {currencyList.map((currency, index) => {
        return (
          <Option
            className={currentValue === currency ? "bg-gray-200/50" : ""}
            key={index}
            handleSelect={handleSelect}
          >
            {currency}
            <IoCheckmark
              size={20}
              className={currentValue === currency ? "visible" : "invisible"}
            />{" "}
          </Option>
        );
      })}
    </DropDown>
  );
};

export default CurrencyDropdown;
