"use client"
import HoverDropDown, { DropItem } from "@/components/ui/HoverDropDown";
import SearchBar from "@/components/ui/SearchBar";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const categorys = [
    {name: "Vagitable frouts", link: "/vagitable"},
    {name: "Ruabza and others", link: "/ruaabs"},
]

export default function BottomNav(){
    const handleSearch = (e)=>{
        console.log(e.target.value);
    }
    return(
        <nav className="w-full bg-green-500">
            <div className="botton_nav_container gap-10 flex items-center px-5 w-full py-2 max-w-325 mx-auto">
                <HoverDropDown dropName={"Categorys"}>
                    <DropItem hrefPath={"/"}>item 1</DropItem>
                    <DropItem>item 2</DropItem>
                </HoverDropDown>
                
                <SearchBar onChangeFn={handleSearch} className={`w-[400px]`}/>
                <p className="text-white">Free Shipping over $199</p>
            </div>
        </nav>
    )
}