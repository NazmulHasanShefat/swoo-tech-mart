import Sidebar from "@/components/admin-components/sidebar/sidebar";
import AdminNav from "@/components/public-components/Header/adminNav";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between">
        <Sidebar />
        <div className="relative flex-1 min-w-0">
          <AdminNav />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
