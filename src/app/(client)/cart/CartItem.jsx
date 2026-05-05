"use client";
import React, { useState } from "react";
import ItemQuantity from "./ItemQuantity";
import Image from "next/image";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex items-center">
      <Image
        src={"/tablet.png"}
        width={300}
        height={300}
        className="w-[100px] "
        alt="cart item image"
      />
      <div className="p-0">
        <h2 className="text-lg font-bold">Items name</h2>
        <div className="font-light line-clamp-2 grid grid-cols-12 items-center justify-between">
          <p className="col-span-8 text-xs md:text-base"> Items description Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Nam, enim. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quis, iste.</p>
          <div className="col-span-4 flex justify-end items-center">
          <RiDeleteBin5Fill className="text-3xl hover:text-red-500 cursor-pointer" />
          </div>
        </div>
        <div className="font-bold justify-between text-lg mt-2 flex items-center">
          <ItemQuantity quantity={quantity} setQuantity={setQuantity} />
          <div>$ 200</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
