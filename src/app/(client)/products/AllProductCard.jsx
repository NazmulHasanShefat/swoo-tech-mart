import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ProductCard, {
  ProductCardBadge,
  ProductCardDescrition,
  ProductCardImage,
  ProductCardPricingRating,
  ProductCardStarsAndStock,
  ProductCardTitle,
} from "@/components/ui/ProductCard";
import React from "react";

const AllProductCard = () => {
  return (
    <ProductCard>
      <ProductCardBadge>40%</ProductCardBadge>
      <ProductCardImage src={"/gamming.png"} alt={"pd1"} />
      <ProductCardTitle>gucismas</ProductCardTitle>
      <ProductCardDescrition>hello this is cupn</ProductCardDescrition>
      <ProductCardPricingRating
        priceNew={"32"}
        priceOld={"55"}
        ratting={"5.0"}
      />
      <ProductCardStarsAndStock
        stockStatus={"out of stock"}
        starRating={"3.0"}
      />
      <ButtonPrimary color="green" className="mt-5 w-full cursor-pointer">
        Add to cart
      </ButtonPrimary>
    </ProductCard>
  );
};

export default AllProductCard;
