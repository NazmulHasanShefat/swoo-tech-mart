import Sidebar from "@/components/admin-components/sidebar/sidebar";
import AdminNav from "@/components/public-components/Header/adminNav";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav />

      <div className="flex">
        <div className="">
          <Sidebar />
        </div>

        <div className="flex-1 mt-20 px-3">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
