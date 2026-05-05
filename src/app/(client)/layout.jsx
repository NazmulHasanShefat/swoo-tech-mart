import BottomNav from '@/components/public-components/Header/bottomNav/BottomNav';
import CenterNav from '@/components/public-components/Header/main-nav/center-nav';
import Topbar from '@/components/public-components/Header/topbar/topbar';
import React from 'react';

const Clientlayout = ({children}) => {
    return (
        <>
        <Topbar />
        <CenterNav />
        <BottomNav />
        {children}
        </>
    );
};

export default Clientlayout;