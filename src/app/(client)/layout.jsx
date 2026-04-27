import CenterNav from '@/components/public-components/Header/main-nav/center-nav';
import Topbar from '@/components/public-components/Header/topbar/topbar';
import React from 'react';

const Clientlayout = ({children}) => {
    return (
        <>
        <Topbar />
        <CenterNav />
        {children}
        </>
    );
};

export default Clientlayout;