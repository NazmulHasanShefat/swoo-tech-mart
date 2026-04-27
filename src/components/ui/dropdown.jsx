"use client"
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoIosCheckmark, IoMdArrowDropdown } from 'react-icons/io';
import { IoCheckmark } from 'react-icons/io5';

export function Option({children}){
    return(
          <div className="drop_option cursor-pointer hover:bg-gray-200 py-1 flex justify-between items-center gap-1 pl-3 pr-1 rounded-lg"> {children} <IoCheckmark size={20}/></div>
    )
}

const DropDown = ({}) => {
    const [isOpen, setOpen] = useState(true);
    const [currentValue, setCurrentValue] = useState("");
    const dropdownHandleToggle = ()=>{
        setOpen(!isOpen);
    }
    const handleSelectItem = (e)=>{
        console.log(e.currentTarget)
    }
    return (
        <section id='dropdown' className='relative'>
            <button onClick={dropdownHandleToggle} type='button' className='flex justify-between items-center dropdownTriger bg-red-200 py-2 px-4 rounded-xl cursor-pointer focus:ring focus:ring-blue-300'>
             Select a drop
             <IoMdArrowDropdown />  
            </button>
            {isOpen && (
            <div onClick={handleSelectItem} className="dropdown_options absolute py-1 px-2 border border-gray-300 shadow-lg w-max rounded-xl right-0">
               <Option>this is my option 1</Option> 
               <Option>this is my option 1</Option> 
            </div>
            )}
        </section>
    );
};

export default DropDown;