"use client";

import DropDown, { Option } from "@/components/ui/dropdown";
import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

const CountryDropdown = () => {
  const [currentValue, setCurrentValue] = useState("option 1");
  const handleSelect = (e) => {
    setCurrentValue(e.target.innerText);
  };
  console.log(currentValue);
  return (
    <DropDown currentValue={currentValue}>
      <Option handleSelect={handleSelect}>
        option 1
        {" "}
        <IoCheckmark
          size={20}
          className={currentValue === "option 1" ? "visible" : "invisible"}
        />{" "}
      </Option>
      <Option handleSelect={handleSelect}>
        option 2
        {" "}
        <IoCheckmark
          size={20}
          className={currentValue === "option 2" ? "visible" : "invisible"}
        />{" "}
      </Option>
    </DropDown>
  );
};

export default CountryDropdown;
