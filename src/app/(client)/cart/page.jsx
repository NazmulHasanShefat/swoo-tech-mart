import React from "react";
import CartItem from "./CartItem";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
export const metadata = {
  title: "Swoo Tech Mart - Cart",
  description: "Online store for all your tech needs",
};
const CartPage = () => {
  return (
    <section className="w-full max-w-325 mx-auto px-5">
      <h1 className="text-2xl lg:text-4xl font-bold">Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 lg:px-5">
            <CartItem />
        </div>
        <div className="lg:col-span-4 p-5 border border-green-400 rounded-lg">
            <h2 className="text-xl font-bold mb-5">Order Summary</h2>
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Subtotal</h3>
                <p className="text-lg font-bold">$200</p>
            </div>
            <div className="flex justify-between items-center mb-3">
                <div className="grid grid-cols-6 gap-2 items-center">
                    <input
                        type="text"
                        placeholder="Enter coupon code"
                        className="ring-2 ring-gray-200 col-span-4 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button className="bg-green-500 cursor-pointer col-span-2 text-white py-3 px-5 rounded-r-lg hover:bg-green-600 transition duration-300">
                        Apply
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Shipping fee</h3>
                <p className="text-lg font-bold">- $23</p>
            </div>
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Total discount</h3>
                <p className="text-lg font-bold">- $323</p>
            </div>
            <div className="flex justify-between items-center mb-3">
                <ButtonPrimary color={`green`} className="w-full cursor-pointer mt-5">
                    Proceed to Checkout
                </ButtonPrimary>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
