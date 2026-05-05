import Image from "next/image";
import React from "react";
import { BsFillMouse2Fill, BsFillRouterFill } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineSmartphone } from "react-icons/md";

const TopCategorys = () => {
  return (
    <section className="w-full max-w-325 mx-auto h-max mt-6 px-5">
      <h1 className="text-2xl font-bold"> Top Categorys</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-3 items-center mt-3">

        <div className="flex flex-col items-center p-2 gap-2 justify-center border rounded-lg cursor-pointer border-gray-300 hover:border-green-500 hover:text-green-500 transition-all duration-200">
          <div className="flex justify-center">
            <MdOutlineSmartphone size={30} />
          </div>
          <p>Smartphones</p>
        </div>
        <div className="flex flex-col items-center p-2 gap-2 justify-center border rounded-lg cursor-pointer border-gray-300 hover:border-green-500 hover:text-green-500 transition-all duration-200">
          <div className="flex justify-center">
            <FaLaptop size={30} />
          </div>
          <p>Laptop</p>
        </div>
        <div className="flex flex-col items-center p-2 gap-2 justify-center border rounded-lg cursor-pointer border-gray-300 hover:border-green-500 hover:text-green-500 transition-all duration-200">
          <div className="flex justify-center">
            <BsFillMouse2Fill size={30} />
          </div>
          <p>Mouse</p>
        </div>
        <div className="flex flex-col items-center p-2 gap-2 justify-center border rounded-lg cursor-pointer border-gray-300 hover:border-green-500 hover:text-green-500 transition-all duration-200">
          <div className="flex justify-center">
            <FaComputer size={30} />
          </div>
          <p>Computers</p>
        </div>
        <div className="flex flex-col items-center p-2 gap-2 justify-center border rounded-lg cursor-pointer border-gray-300 hover:border-green-500 hover:text-green-500 transition-all duration-200">
          <div className="flex justify-center">
            <FiMonitor size={30} />
          </div>
          <p>Monitor</p>
        </div>
        <div className="flex flex-col items-center p-2 gap-2 justify-center border rounded-lg cursor-pointer border-gray-300 hover:border-green-500 hover:text-green-500 transition-all duration-200">
          <div className="flex justify-center">
            <BsFillRouterFill size={30} />
          </div>
          <p>Routers</p>
        </div>

      </div>
    </section>
  );
};

export default TopCategorys;
