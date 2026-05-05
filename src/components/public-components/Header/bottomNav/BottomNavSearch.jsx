"use client"
import SearchBar from '@/components/ui/SearchBar';
import React from 'react';

const BottomNavSearch = () => {
     const handleSearch = (e)=>{
        console.log(e.target.value);
    }
    return (
        <SearchBar onChangeFn={handleSearch} className={`w-[400px]`}/>
    );
};

export default BottomNavSearch;