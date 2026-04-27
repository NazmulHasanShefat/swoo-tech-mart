import DropDown from '@/components/ui/dropdown';
import React from 'react';
import CountryDropdown from './country-dropdown';

const Topbar = () => {
    return (
        <nav className='flex py-5 flex-col md:flex-row px-5 lg:flex-row justify-between items-center'>
            <div className='flex justify-center items-center gap-3'>
                <h2 className='py-1 px-4 bg-gray-200'></h2>
                <h2>{"(025) 3886 25 16"}</h2>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <p>Sell on Swoo</p>
                <p>Order Tracki</p>
                <CountryDropdown />
            </div>
        </nav>
    );
};

export default Topbar;