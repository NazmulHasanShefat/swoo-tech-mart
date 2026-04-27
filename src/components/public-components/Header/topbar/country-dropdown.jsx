"use client"
import DropDown, { Option } from "@/components/ui/dropdown";
import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

const countrysOptions = ["United State", "Bangladesh", "Pakistan"];
const CountryDropdown = () => {
  const [currentValue, setCurrentValue] = useState(countrysOptions[0]);
  const handleSelect = (e) => {
    setCurrentValue(e.target.innerText);
  };


  return (
    <DropDown currentValue={currentValue}>
      {countrysOptions.map((option, index) => {
        return (
          <Option className={currentValue === option ? "bg-gray-200/50": ""} key={index} handleSelect={handleSelect}>
           {option}
            <IoCheckmark
              size={20}
              className={currentValue === option ? "visible" : "invisible"}
            />{" "}
          </Option>
        );
      })}
    </DropDown>
  );
};

export default CountryDropdown;
