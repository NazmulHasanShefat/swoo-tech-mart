"use client"

import { FaSearch } from "react-icons/fa";

const SearchBar = ({size="20", IconColor="black", className, onChangeFn}) => {
    return (
        <div className={`flex items-center bg-white px-4 py-2 rounded-lg ${className}`}>
            <input type="text" className="w-full border-0 outline-0" name="search" id="" onChange={onChangeFn}/>
            <FaSearch size={size} color={IconColor} className="cursor-pointer"/>
        </div>
    );
};

export default SearchBar;