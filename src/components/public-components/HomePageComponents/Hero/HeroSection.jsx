import Link from "next/link";
import React from "react";

const CategoryLinks = [
  { name: "antolika barbos", link: "/" },
  { name: "costury and anugr", link: "/" },
  { name: "potato and sold", link: "/" },
  { name: "potato and sold", link: "/" },
  { name: "potato and sold", link: "/" },
  { name: "potato and sold", link: "/" },
];

const HeroSection = () => {
  return (
    <section className="px-5 w-full max-w-325 mx-auto lg:grid grid-cols-12 mt-6">
      <div className="categorys_section col-span-2">
        <h1 className="text-2xl px-2"> SALE 40% OFF</h1>
        {CategoryLinks.map((category, index) => (
          <li className="block list-none" key={index}>
            <Link
              href={category.link}
              className="block py-1 px-2 hover:bg-green-500 hover:text-white rounded-md"
            >
              {" "}
              {category.name}{" "}
            </Link>
          </li>
        ))}
      </div>
      <div className="Banners_section col-span-10 grid lg:grid-cols-3 lg:grid-rows-6">
        <div className=" lg:col-span-2 bg-blue-200 lg:row-span-5"></div>
        <div className=" lg:row-span-3 bg-red-300"></div>
        <div className=" lg:row-span-3 bg-amber-300"></div>
        <div className=" lg:col-span-1 bg-green-500"></div>
        <div className=" lg:col-span-1 bg-amber-700"></div>
      </div>
    </section>
  );
};

export default HeroSection;
