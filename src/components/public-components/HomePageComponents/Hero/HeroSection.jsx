import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryLinks = [
  { name: "Smartphones", link: "/" },
  { name: "Laptops", link: "/" },
  { name: "Tablets", link: "/" },
  { name: "Smart Watches", link: "/" },
  { name: "Headphones", link: "/" },
  { name: "Speakers", link: "/" },
  { name: "Televisions", link: "/" },
  { name: "Gaming Consoles", link: "/" },
  { name: "Cameras", link: "/" },
  { name: "Accessories", link: "/" },
  { name: "Power Banks", link: "/" },
  { name: "Networking Devices", link: "/" },
];

const HeroSection = () => {
  return (
    <section className="px-5 w-full max-w-325 mx-auto h-max gap-3 lg:grid grid-cols-12 mt-6">
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
      <div className="Banners_section col-span-10 grid lg:grid-cols-3 gap-3">
        <div
          className={`lg:col-span-2 bg-no-repeat lg:row-span-5 p-7 bg-[url('/headphone.png')] bg-size-[100%]  hover:bg-size-[120%] rounded-lg bg-center transition-all duration-200 ease-in-out`}
        >
          <div className="w-full">
            <h1 className="text-white font-bold text-2xl lg:text-5xl">
              Noise Cancelling Headphone
            </h1>
            <div className="text-white my-3">
              <p>Boso Over-Ear Headphone</p>
              <p>Wifi, Voice Assistant,</p>
              <p>Low latency game mde</p>
            </div>
            <button className="py-1 px-2 rounded-md bg-white text-black font-semibold">
              Buy Now
            </button>
          </div>
        </div>

        <div className="p-5 rounded-lg lg:row-span-3 bg-[url('/watch.png')] bg-size-[100%]  hover:bg-size-[120%]  bg-center transition-all duration-200 ease-in-out bg-no-repeat">
          <div className="lg:pl-37">
          <p>xomia</p>
          <h2 className="font-bold text-xl">Sport Water <br /> Resistance Watch</h2>
          <button className="py-1 px-2 rounded-md bg-black text-white font-semibold">
            Shop Now
          </button>
          </div>
        </div>
        <div className="p-4 rounded-lg lg:row-span-3 bg-amber-300 bg-[url('/projector.png')] bg-size-[100%]  hover:bg-size-[120%] text-white bg-center transition-all duration-200 ease-in-out bg-no-repeat">
          <p>xomia</p>
          <h2 className="text-2xl">OKODo hero 11+ black</h2>
          <button className="py-1 px-2 rounded-md bg-white text-black mt-2 font-semibold">
            Shop Now
          </button>
        </div>
        <div className="p-4 rounded-lg lg:col-span-1 bg-[url('/gamming.png')] bg-size-[100%]  hover:bg-size-[120%] bg-center transition-all duration-200 ease-in-out bg-no-repeat">
         <h1 className="text-md font-semibold">Sono Playgo 5 <br /> <span className="text-green-500">from $569</span></h1>
          <p className="mt-3 text-xs">Discover now</p>
        </div>
        <div className="p-4 rounded-lg lg:col-span-1 bg-[url('/keyBord.png')] bg-size-[100%]  hover:bg-size-[120%] text-white bg-center transition-all duration-200 ease-in-out bg-no-repeat">
          <h2 className="">Logitek Bluetooth <br />
           <span className="text-yellow-400"> Keyboard</span></h2>
          <p className="mt-3 text-xs">Best for all device</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
