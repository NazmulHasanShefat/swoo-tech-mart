import Sidebar from '@/components/admin-components/sidebar/sidebar';
import AdminNav from '@/components/public-components/Header/adminNav';
import React from 'react';

const AdminLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNav />
            <Sidebar />
            <main className="ml-[260px] min-h-screen mt-0 bg-gray-100 py-12 px-3">
                <div className="pt-8">{children}</div>
            </main>
        </div>
    );
};

export default AdminLayout;