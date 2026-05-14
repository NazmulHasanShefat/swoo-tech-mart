"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  { label: "Profile", href: "/profile" },
  { label: "My Orders", href: "/profile/myorders" },
  { label: "Update Profile", href: "/profile/profile-update" },
  { label: "Change Password", href: "/profile/profile-update/change-password" },
  { label: "WishList", href: "/profile/wishlist" },
  { label: "Cart", href: "/profile/cart" },
  { label: "Logout", href: "/profile/logout" },
  { label: "Help", href: "/profile/help" },
];

const ProfileMenus = () => {
    const currentPathName = usePathname();
    console.log(currentPathName);
  return (
    <ul className="profileMenu flex flex-col gap-1">
       {menuItems.map((item) => (
    <li key={item.href}>
      <Link
        href={item.href}
        className={`block bg-gray-100 py-2 px-4 rounded-md hover:bg-green-500 hover:text-white ${
          currentPathName === item.href ? "bg-green-500 text-white" : ""
        }`}
      >
        {item.label}
      </Link>
    </li>
  ))}
    </ul>
  );
};

export default ProfileMenus;
