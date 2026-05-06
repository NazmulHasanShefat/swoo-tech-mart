"use client";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import Link from "next/link";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const districts = [
  // Dhaka Division
  { id: 1,  name: "Dhaka",          bangla: "ঢাকা",           division: "Dhaka" },
  { id: 2,  name: "Gazipur",        bangla: "গাজীপুর",        division: "Dhaka" },
  { id: 3,  name: "Narayanganj",    bangla: "নারায়ণগঞ্জ",    division: "Dhaka" },
  { id: 4,  name: "Narsingdi",      bangla: "নরসিংদী",        division: "Dhaka" },
  { id: 5,  name: "Munshiganj",     bangla: "মুন্সীগঞ্জ",     division: "Dhaka" },
  { id: 6,  name: "Manikganj",      bangla: "মানিকগঞ্জ",      division: "Dhaka" },
  { id: 7,  name: "Tangail",        bangla: "টাঙ্গাইল",       division: "Dhaka" },
  { id: 8,  name: "Kishoreganj",    bangla: "কিশোরগঞ্জ",      division: "Dhaka" },
  { id: 9,  name: "Faridpur",       bangla: "ফরিদপুর",        division: "Dhaka" },
  { id: 10, name: "Madaripur",      bangla: "মাদারীপুর",      division: "Dhaka" },
  { id: 11, name: "Shariatpur",     bangla: "শরীয়তপুর",      division: "Dhaka" },
  { id: 12, name: "Rajbari",        bangla: "রাজবাড়ী",       division: "Dhaka" },
  { id: 13, name: "Gopalganj",      bangla: "গোপালগঞ্জ",      division: "Dhaka" },

  // Chittagong Division
  { id: 14, name: "Chittagong",     bangla: "চট্টগ্রাম",      division: "Chittagong" },
  { id: 15, name: "Cox's Bazar",    bangla: "কক্সবাজার",      division: "Chittagong" },
  { id: 16, name: "Comilla",        bangla: "কুমিল্লা",       division: "Chittagong" },
  { id: 17, name: "Feni",           bangla: "ফেনী",           division: "Chittagong" },
  { id: 18, name: "Noakhali",       bangla: "নোয়াখালী",      division: "Chittagong" },
  { id: 19, name: "Lakshmipur",     bangla: "লক্ষ্মীপুর",    division: "Chittagong" },
  { id: 20, name: "Chandpur",       bangla: "চাঁদপুর",        division: "Chittagong" },
  { id: 21, name: "Brahmanbaria",   bangla: "ব্রাহ্মণবাড়িয়া", division: "Chittagong" },
  { id: 22, name: "Khagrachhari",   bangla: "খাগড়াছড়ি",     division: "Chittagong" },
  { id: 23, name: "Rangamati",      bangla: "রাঙ্গামাটি",     division: "Chittagong" },
  { id: 24, name: "Bandarban",      bangla: "বান্দরবান",      division: "Chittagong" },

  // Rajshahi Division
  { id: 25, name: "Rajshahi",       bangla: "রাজশাহী",        division: "Rajshahi" },
  { id: 26, name: "Chapai Nawabganj", bangla: "চাঁপাইনবাবগঞ্জ", division: "Rajshahi" },
  { id: 27, name: "Natore",         bangla: "নাটোর",          division: "Rajshahi" },
  { id: 28, name: "Bogura",         bangla: "বগুড়া",          division: "Rajshahi" },
  { id: 29, name: "Joypurhat",      bangla: "জয়পুরহাট",      division: "Rajshahi" },
  { id: 30, name: "Naogaon",        bangla: "নওগাঁ",          division: "Rajshahi" },
  { id: 31, name: "Pabna",          bangla: "পাবনা",          division: "Rajshahi" },
  { id: 32, name: "Sirajganj",      bangla: "সিরাজগঞ্জ",      division: "Rajshahi" },

  // Khulna Division
  { id: 33, name: "Khulna",         bangla: "খুলনা",          division: "Khulna" },
  { id: 34, name: "Bagerhat",       bangla: "বাগেরহাট",       division: "Khulna" },
  { id: 35, name: "Satkhira",       bangla: "সাতক্ষীরা",      division: "Khulna" },
  { id: 36, name: "Jessore",        bangla: "যশোর",           division: "Khulna" },
  { id: 37, name: "Narail",         bangla: "নড়াইল",         division: "Khulna" },
  { id: 38, name: "Magura",         bangla: "মাগুরা",         division: "Khulna" },
  { id: 39, name: "Jhenaidah",      bangla: "ঝিনাইদহ",        division: "Khulna" },
  { id: 40, name: "Kushtia",        bangla: "কুষ্টিয়া",      division: "Khulna" },
  { id: 41, name: "Chuadanga",      bangla: "চুয়াডাঙ্গা",     division: "Khulna" },
  { id: 42, name: "Meherpur",       bangla: "মেহেরপুর",       division: "Khulna" },

  // Barishal Division
  { id: 43, name: "Barishal",       bangla: "বরিশাল",         division: "Barishal" },
  { id: 44, name: "Bhola",          bangla: "ভোলা",           division: "Barishal" },
  { id: 45, name: "Patuakhali",     bangla: "পটুয়াখালী",     division: "Barishal" },
  { id: 46, name: "Pirojpur",       bangla: "পিরোজপুর",       division: "Barishal" },
  { id: 47, name: "Jhalokati",      bangla: "ঝালকাঠি",        division: "Barishal" },
  { id: 48, name: "Barguna",        bangla: "বরগুনা",         division: "Barishal" },

  // Sylhet Division
  { id: 49, name: "Sylhet",         bangla: "সিলেট",          division: "Sylhet" },
  { id: 50, name: "Moulvibazar",    bangla: "মৌলভীবাজার",     division: "Sylhet" },
  { id: 51, name: "Habiganj",       bangla: "হবিগঞ্জ",        division: "Sylhet" },
  { id: 52, name: "Sunamganj",      bangla: "সুনামগঞ্জ",      division: "Sylhet" },

  // Rangpur Division
  { id: 53, name: "Rangpur",        bangla: "রংপুর",          division: "Rangpur" },
  { id: 54, name: "Dinajpur",       bangla: "দিনাজপুর",       division: "Rangpur" },
  { id: 55, name: "Kurigram",       bangla: "কুড়িগ্রাম",     division: "Rangpur" },
  { id: 56, name: "Gaibandha",      bangla: "গাইবান্ধা",      division: "Rangpur" },
  { id: 57, name: "Nilphamari",     bangla: "নীলফামারী",      division: "Rangpur" },
  { id: 58, name: "Lalmonirhat",    bangla: "লালমনিরহাট",     division: "Rangpur" },
  { id: 59, name: "Thakurgaon",     bangla: "ঠাকুরগাঁও",      division: "Rangpur" },
  { id: 60, name: "Panchagarh",     bangla: "পঞ্চগড়",        division: "Rangpur" },

  // Mymensingh Division
  { id: 61, name: "Mymensingh",     bangla: "ময়মনসিংহ",      division: "Mymensingh" },
  { id: 62, name: "Jamalpur",       bangla: "জামালপুর",       division: "Mymensingh" },
  { id: 63, name: "Sherpur",        bangla: "শেরপুর",         division: "Mymensingh" },
  { id: 64, name: "Netrokona",      bangla: "নেত্রকোনা",      division: "Mymensingh" },
];

const divisions = [
  { id: 1, name: "Dhaka",      bangla: "ঢাকা"        },
  { id: 2, name: "Chittagong", bangla: "চট্টগ্রাম"   },
  { id: 3, name: "Rajshahi",   bangla: "রাজশাহী"     },
  { id: 4, name: "Khulna",     bangla: "খুলনা"       },
  { id: 5, name: "Barishal",   bangla: "বরিশাল"      },
  { id: 6, name: "Sylhet",     bangla: "সিলেট"       },
  { id: 7, name: "Rangpur",    bangla: "রংপুর"       },
  { id: 8, name: "Mymensingh", bangla: "ময়মনসিংহ"   },
];

const CheckoutForm = () => {
  const [deleveryMethod, setDeleveryMethod] = useState("cashOnDelivery");
  const handleCheckDelevery = (e)=>{
    setDeleveryMethod(e.target.value);
  }
  console.log(deleveryMethod);

  const HandleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };
  return (
    <div className="w-full">
      <form onSubmit={HandleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="input px-4 py-2 border border-gray-400 w-full rounded-md focus:ring-2 focus:border-transparent transition-all duration-200 focus:ring-green-200 outline-0"
            required
          />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="name">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="input px-4 py-2 border border-gray-400 w-full rounded-md focus:ring-2 focus:border-transparent transition-all duration-200 focus:ring-green-200 outline-0"
            required
          />
        </div>
  
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            className="input px-4 py-2 border border-gray-400 w-full rounded-md focus:ring-2 focus:border-transparent transition-all duration-200 focus:ring-green-200 outline-0"
            required
          />
        </div>
      
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="divition">Divition</label>
          <select name="divition" id="divition" className="input px-4 py-2 border border-gray-400 w-full rounded-md focus:ring-2 focus:border-transparent transition-all duration-200 focus:ring-green-200 outline-0" required>
            <option value="">Select a division</option>
            {divisions.map((division) => (
              <option key={division.id} value={division.name}>
                {division.bangla}
              </option>
            ))}
          </select>
        </div>
       
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="divition"> Dristrict </label>
          <select name="district" id="district" className="input px-4 py-2 border border-gray-400 w-full rounded-md focus:ring-2 focus:border-transparent transition-all duration-200 focus:ring-green-200 outline-0" required>
            <option value="">Select a division</option>
            {districts.map((distric) => (
              <option key={distric.id} value={distric.name}>
                {distric.bangla}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="name"> Delevery method </label>
          <div className="w-full h-20 border p-3">
            <div className="flex items-center gap-3">
            <input type="radio" name="deleveryMethod" value={`cashOnDelivery`} id="cashOnDelivery" onChange={handleCheckDelevery} checked={deleveryMethod === `cashOnDelivery` ? true : false}/>
            <label htmlFor="cashOnDelivery">Cash on Delivery</label>
            </div>
            <div className="flex gap-3 items-center">
            <input type="radio" name="deleveryMethod" value={`bkashPayment`} id="bkashPayment" onChange={handleCheckDelevery} checked={deleveryMethod === `bkashPayment` ? true : false}/>
            <label htmlFor="bkashPayment">bKash Payment</label>
            </div>
          </div>
        </div>

        <ButtonPrimary type="submit" color={`green`} className="w-max cursor-pointer mt-5">
          Place Order
        </ButtonPrimary>
         <p className="mt-3">{"I have an account "} <Link href="/auth/login" className="text-green-500 hover:underline">Login here</Link></p>
      </form>
    </div>
  );
};

export default CheckoutForm;
