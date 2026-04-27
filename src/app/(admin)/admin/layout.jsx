import AdminNav from '@/components/public-components/Header/adminNav';
import React from 'react';

const AdminLayout = ({ children }) => {
    return (
        <>
        <AdminNav />
         {children}   
        </>
    );
};

export default AdminLayout;