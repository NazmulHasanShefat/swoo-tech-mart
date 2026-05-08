"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import ReactRangeSliderInput from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "@/css/rangeSlider.css"

const RangeAtoBSlider = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = useRef();

  const handleChange = (e) => {
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set("min",e[0])
    urlParams.set("max",e[1])
    router.push(`?${urlParams.toString()}`)

  };

  return <ReactRangeSliderInput id="range-slider-ab" ref={ref} onInput={handleChange} min={0} max={200} />;
};

export default RangeAtoBSlider;
