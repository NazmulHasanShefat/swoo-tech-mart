import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function ProductCard({ children, className }) {
  return (
    <div className="product_card border rounded-lg border-gray-200 hover:border-green-500 transition-all duration-200 flex flex-col p-5 relative w-full">
      {children}
    </div>
  );
}

export function ProductCardBadge({ children, className }) {
  return (
    <div
      className={`bg-red-500 text-white absolute -top-2 -right-2 py-1 px-2 text-xs rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function ProductCardImage({ src, alt, className }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      className={`mx-auto mt-5 object-cover w-max cursor-pointer ${className}`}
    />
  );
}

export function ProductCardDescrition({ children, className }) {
  return (
    <p
      className={`line-clamp-2 font-light text-gray-600 text-sm hover:underline cursor-pointer ${className}`}
    >
      {children}
    </p>
  );
}
export function ProductCardTitle({ children, className }) {
  return <p className={`font-semibold ${className}`}>{children}</p>;
}
export function ProductCardPricingRating({ priceNew, priceOld, ratting }) {
  return (
    <div className="flex items-center justify-between mt-2">
      <div>
        {priceNew}{" "}
        <span className="oldPrice text-gray-400 line-through">
          {" "}
          {priceOld}{" "}
        </span>
      </div>
      <div className="font-bold rating"> {ratting} </div>
    </div>
  );
}
export function ProductCardStarsAndStock({ stockStatus, starRating }) {
  return (
    <div className="flex items-center justify-between">
      <div className={`StockStatus text-green-500`}>In Stock</div>
      <div className="starts flex items-center gap-1">
        {starRating === 0 ?
        <>
        <FaRegStar className="text-black" />
        <FaRegStar className="text-black" />
        <FaRegStar className="text-black" />
        <FaRegStar className="text-black" />
        <FaRegStar className="text-black" />
        </>:
       starRating >= 1 && starRating <= 1.4 ?
       <>
       <FaStar className="text-yellow-500" />
       <FaRegStar className="text-black" />
       <FaRegStar className="text-black" />
       <FaRegStar className="text-black" />
       <FaRegStar className="text-black" />
       </>:
       starRating >= 1.5 && starRating <= 1.9 ?
       <>
         <FaStar className="text-yellow-500" />
       <FaStarHalfAlt className="text-yellow-500" />
       <FaRegStar className="text-black" />
       <FaRegStar className="text-black" />
       <FaRegStar className="text-black" />
       </>:
        starRating >= 2.0 && starRating <= 2.4 ?
         <>
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
         <FaRegStar className="text-black" />
         <FaRegStar className="text-black" />
         <FaRegStar className="text-black" />
       </>:
        starRating >= 2.5 && starRating <= 2.9 ?
         <>
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
         <FaStarHalfAlt className="text-yellow-500" />
         <FaRegStar className="text-black" />
         <FaRegStar className="text-black" />
       </>:
         starRating >= 3.0 && starRating <= 3.4 ?
         <>
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
         <FaRegStar className="text-black" />
         <FaRegStar className="text-black" />
       </> :
         starRating >= 3.5 && starRating <= 3.9 ?
         <>
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
         <FaStarHalfAlt className="text-yellow-500" />
         <FaRegStar className="text-black" />
       </> :
        starRating >= 4.0 && starRating <= 4.4 ?
         <>
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
         <FaRegStar className="text-black" />
       </>:
        starRating >= 4.5 && starRating <= 4.9 ?
         <>
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
         <FaStarHalfAlt className="text-yellow-500" />
       </>:
        starRating >= 5.0 ?
         <>
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
       </>:
        <>
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
         <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
       </>

         }
        {/* <FaRegStar className="text-black" />
        <FaRegStar className="text-black" />
        <FaRegStar className="text-black" />
        <FaStarHalfAlt className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" /> */}
      </div>
    </div>
  );
}
