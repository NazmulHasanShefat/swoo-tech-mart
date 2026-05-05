"use client"

import { useState } from "react";

const ItemQuantity = ({quantity, setQuantity}) => {

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    return (
        <div className='flex border border-gray-200 rounded-lg'>
            <button className='px-4 py-2 border-r border-gray-200 cursor-pointer' onClick={handleDecrease}>
                -
            </button>
            <span className='px-4 py-2'> {quantity} </span>
            <button className='px-4 py-2 border-l border-gray-200 cursor-pointer' onClick={handleIncrease}>
                +
            </button>
        </div>
    );
};

export default ItemQuantity;