prduct card components

```jsx
<ProductCard>
  <ProductCardBadge>40%</ProductCardBadge>
  <ProductCardImage src={"/gamming.png"} alt={"pd1"} />
  <ProductCardTitle>gucismas</ProductCardTitle>
  <ProductCardDescrition>hello this is cupn</ProductCardDescrition>
  <ProductCardPricingRating priceNew={"32"} priceOld={"55"} ratting={"5.0"} />
  <ProductCardStarsAndStock stockStatus={"out of stock"} starRating={"3.0"} />
  <ButtonPrimary color="green" className="mt-5 w-full cursor-pointer">
    Add to cart
  </ButtonPrimary>
</ProductCard>
```

use dropdown

```jsx
"use client";
import DropDown, { Option } from "@/components/ui/dropdown";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

const currencyList = ["USD", "BDT", "PKR"];

const CurrencyDropdown = () => {
  const [currentValue, setCurrentValue] = useState(currencyList[0]);

  const handleSelect = (e) => {
    setCurrentValue(e.target.innerText);
  };

  return (
    <DropDown currentValue={currentValue}>
      {currencyList.map((currency, index) => {
        return (
          <Option
            className={currentValue === currency ? "bg-gray-200/50" : ""}
            key={index}
            handleSelect={handleSelect}
          >
            {currency}
            <IoCheckmark
              size={20}
              className={currentValue === currency ? "visible" : "invisible"}
            />{" "}
          </Option>
        );
      })}
    </DropDown>
  );
};

export default CurrencyDropdown;
```

basicSelect component

```jsx
<SelectBasic className={`mt-3`}>
  <OptionBasic>apple </OptionBasic>
  <OptionBasic>samsung</OptionBasic>
</SelectBasic>
```
