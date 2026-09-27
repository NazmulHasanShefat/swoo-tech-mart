import HomeStates from '@/components/admin-components/main/homeStates';
import OrderTable from '@/components/admin-components/main/orderTable';
import React from 'react';

const AdminPage = () => {
    return (
        <div>
            <HomeStates />
            <OrderTable />
         </div>
    );
};

export default AdminPage;