import React from "react";
import ProductTable from "./product_table";

const Page = () => {
  return (
    <div className="p-4 md:p-6 min-w-0">
      <div className="w-full min-w-0 overflow-x-auto">
        <ProductTable />
      </div>

      <h2 className="mt-50 text-2xl font-bold">hello</h2>
    </div>
  );
};

export default Page;