import Navbar from '@/components/public-components/Header/Navbar';
import Topbar from '@/components/public-components/Header/topbar/topbar';
import React from 'react';

const Clientlayout = ({children}) => {
    return (
        <>
        <Topbar />
        <Navbar />
        {children}
        </>
    );
};

export default Clientlayout;