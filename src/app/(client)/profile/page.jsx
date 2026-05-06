import Image from "next/image";
import React from "react";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import { FaRegUser } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="px-0 lg:px-10 py-5 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-center">
        <Image
          src={"/avater.svg"}
          width={100}
          height={100}
          alt="profile picture"
          className="rounded-full mb-5"
        />
        <div className="border-2 px-4 py-2 rounded-lg flex items-center flex-col justify-center border-green-300 bg-green-200/50">
          <h1 className="text-2xl md:text-3xl font-bold">Jone Due</h1>
          <div>jone@gmail.com</div>
        </div>
      </div>
      <div className="profileInfo flex flex-col gap-3">
        <div className="border-2 border-green-300 rounded-lg bg-green-200/50 px-4 py-2 flex items-center gap-3">
          <FaRegUser />
          <div className="flex flex-col">
            <div className="font-bold">Name:</div> <div>John Doe</div>{" "}
          </div>
        </div>

        <div className="border-2 border-green-300 rounded-lg bg-green-200/50 px-4 py-2 flex items-center gap-3">
          <FaRegUser />
          <div className="flex flex-col">
            <div className="font-bold">Email Adress:</div>{" "}
            <div>jonedue@example.com</div>{" "}
          </div>
        </div>

        <div className="border-2 border-green-300 rounded-lg bg-green-200/50 px-4 py-2 flex items-center gap-3">
          <FaRegUser />
          <div className="flex flex-col">
            <div className="font-bold">Phone Number:</div>{" "}
            <div> +1 (555) 123-4567 </div>{" "}
          </div>
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
