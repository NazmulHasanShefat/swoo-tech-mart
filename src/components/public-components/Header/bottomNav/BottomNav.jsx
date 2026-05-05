import HoverDropDown, { DropItem } from "@/components/ui/HoverDropDown";
import BottomNavSearch from "./BottomNavSearch";

const categorys = [
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
]

export default function BottomNav(){
    return(
        <nav className="w-full bg-green-500">
            <div className="botton_nav_container gap-10 flex items-center px-5 w-full py-2 max-w-325 mx-auto">
                <HoverDropDown dropName={"Categorys"}>
                    {categorys.map((cat, i)=><DropItem key={i} hrefPath={cat.link}>{cat.name}</DropItem>)}
                </HoverDropDown>
                <BottomNavSearch />
                <p className="text-white hidden sm:block">Free Shipping over $199</p>
            </div>
        </nav>
    )
}