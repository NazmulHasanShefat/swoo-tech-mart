"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import ReactRangeSliderInput from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "@/css/rangeSlider.css";

const RangeAtoBSlider = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = useRef();
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(200)

  const handleChange = (e) => {
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set("min", e[0]);
    urlParams.set("max", e[1]);
    setMin(e[0])
    setMax(e[1])
    router.push(`?${urlParams.toString()}`);
  };

  return (
    <>
      <ReactRangeSliderInput
        id="range-slider-ab"
        ref={ref}
        onInput={handleChange}
        defaultValue={[0, 200]}
        step={2}
        min={0}
        max={200}
      />
       <div className="flex items-center mt-3 justify-between">
          <p className="border border-gray-300 px-2 rounded-lg"> {min} </p>
          <p className="border border-gray-300 px-2 rounded-lg"> {max} </p>
        </div>
    </>
  );
};

export default RangeAtoBSlider;
