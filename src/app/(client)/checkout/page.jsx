import React from "react";
import CheckoutForm from "./CheckoutForm";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

export const metadata = {
  title: "Swoo Tech Mart - Checkout",
  description: "Online store for all your tech needs",
};

const page = () => {
  return (
    <section className="px-5 py-2 grid grid-cols-1 gap-10 md:grid-cols-2 pb-5 w-full max-w-325 mx-auto">
      <div className="">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <div className="checkoutForm">
          <CheckoutForm />
        </div>
      </div>
      <div className=" flex justify-end">
        <div className="order_summaryCard lg:w-5/6 ">
          <h2 className="text-gray-400">Order Summary</h2>
          <div className="order_product_list shadow-md rounded-lg">

            <div className="product grid grid-cols-12 items-center gap-3 py-3">
              <Image
                src={"/tablet.png"}
                alt="product image"
                width={80}
                height={80}
                className="col-span-2"
              />
              <div className="col-span-10 flex items-center justify-between">
               <div>
                 <h3 className="font-bold hover:underline cursor-pointer">vanijual chili9 chicken</h3>
                <p className="text-gray-400 text-xs"> color: red </p>
                <div className="flex items-center">

                <p className="text-gray-400 text-xs"> Quantity x 1 </p>
                <MdDelete size={20} className="text-gray-400 mx-5 cursor-pointer hover:text-red-500" />
                </div>
               </div>
               <div className="px-5"> $100</div>
              </div>
            </div>
           

           <div className="subTotal_summary px-5 py-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <h2 className="text-gray-400">Cupon code</h2>
                <p className="font-bold flex items-center">
                    <input type="text" name="cupon_code" id="cuponCode" className="ring-2 ring-gray-200 outline-0 focus:ring-2 focus:ring-green-200 px-3 py-1 rounded-md"/>
                    <button className="px-3 py-1.5 bg-green-500 text-white rounded-md ml-2 cursor-pointer hover:bg-green-400">Apply</button>
                </p>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-gray-400">SubTotal</h2>
                <p className="font-normal">$100</p>
            </div>

            <div className="flex items-center justify-between">
                <h2 className="text-gray-400">Delevery Charge</h2>
                <p className="font-normal">$20</p>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-xl text-green-500 font-bold">Total</h2>
                <p className="font-bold text-2xl text-green-500">$120</p>
            </div>

           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
