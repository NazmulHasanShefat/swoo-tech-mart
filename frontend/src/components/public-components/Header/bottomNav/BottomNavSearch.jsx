"use client"
import SearchBar from '@/components/ui/SearchBar';
import React from 'react';

const BottomNavSearch = ({className}) => {
     const handleSearch = (e)=>{
        console.log(e.target.value);
    }
    return (
        <SearchBar onChangeFn={handleSearch} className={`w-100 ${className}`}/>
    );
};

export default BottomNavSearch;