import ButtonPrimary from "@/components/ui/ButtonPrimary";
import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductsSection = () => {
  return (
    <section className="w-full max-w-325 mx-auto px-5 mt-10">
      <h1 className="font-bold text-2xl">All products</h1>
      <p className="text-gray-600">
        Discover our wide range of high-quality products.
      </p>
      <div className="product_card_container mt-3 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3">
        <div className="product_card border rounded-lg border-gray-200 hover:border-green-500 transition-all duration-200 flex flex-col p-5 relative">
          <div className=" bg-red-500 text-white absolute -top-2 -right-2 py-1 px-2 text-xs rounded-xl">
            save 50%
          </div>
          <Image
            src="/tablet.png"
            alt="phone"
            width={200}
            height={200}
            className="mx-auto mt-5 object-cover w-[100px] cursor-pointer"
          />
          <h2 className="font-semibold">Tablet</h2>
          <p className="line-clamp-2 font-light text-gray-600 text-sm hover:underline cursor-pointer">
            {" "}
            {
              "Experience the perfect blend of portability and functionality with our tablet phone. Enjoy a large display for immersive media consumption, powerful performance for multitasking, and seamless connectivity on the go. Whether you're browsing, streaming, or working, our tablet phone is designed to keep you connected and productive wherever you are."
            }{" "}
          </p>
          <div className="flex items-center justify-between mt-2">
            <div>
              $32{" "}
              <span className="oldPrice text-gray-400 line-through">$55</span>
            </div>
            <div className="font-bold rating">5.0</div>
          </div>
          <div className="flex items-center justify-between">
            <div className={`StockStatus text-green-500`}>In Stock</div>
            <div className="starts flex items-center gap-1">
              <FaRegStar className="text-black" />
              <FaRegStar className="text-black" />
              <FaStarHalfAlt className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>

          <ButtonPrimary color="green" className="mt-5 w-full cursor-pointer">
            Add to cart
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
