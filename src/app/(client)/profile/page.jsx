import Image from "next/image";
import React from "react";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import { FaRegUser } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="px-0 lg:px-10 py-5">
      <div className="py-3">
      <Image src={"/avater.svg"} width={100} height={100} alt="profileImage" />
      </div>
      <div className="profileInfo grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="border-2 border-gray-200 rounded-lg bg-gray-100/50 px-4 py-2 flex items-center gap-3">
          <FaRegUser />
          <div className="flex flex-col">
            <div className="font-bold">Name:</div> <div>John Doe</div>{" "}
          </div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg bg-gray-100/50 px-4 py-2 flex items-center gap-3">
          <FaRegUser />
          <div className="flex flex-col">
            <div className="font-bold">Email Adress:</div>{" "}
            <div>jonedue@example.com</div>{" "}
          </div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg bg-gray-100/50 px-4 py-2 flex items-center gap-3">
          <FaRegUser />
          <div className="flex flex-col">
            <div className="font-bold">Phone Number:</div>{" "}
            <div> +1 (555) 123-4567 </div>{" "}
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-lg bg-gray-100/50 px-4 py-2 flex items-center gap-3">
          <FaRegUser />
          <div className="flex flex-col">
            <div className="font-bold">Current Adress:</div>{" "}
            <div> +1 (555) 123-4567 </div>{" "}
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-lg bg-gray-100/50 px-4 py-2 flex items-center gap-3">
          <FaRegUser />
          <div className="flex flex-col">
            <div className="font-bold">Parmanent Adress:</div>{" "}
            <div> +1 (555) 123-4567 </div>{" "}
          </div>
        </div>
       <div className="space">

       </div>

        <ButtonPrimary
          className={"mt-5 w-full md:w-auto cursor-pointer"}
          color={"green"}
        >
          Edit Profile
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default ProfilePage;
