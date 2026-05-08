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


```jsx
import { useState } from "react";

// ✅ Reusable RadioFilterGroup Component
function RadioFilterGroup({ title, options, name, defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue ?? options[0]?.value);

  const handleSelect = (val) => {
    setSelected(val);
    onChange?.(val);
  };

  return (
    <div style={{ width: "100%", fontFamily: "sans-serif" }}>
      {title && (
        <p style={{ fontWeight: "bold", marginBottom: 10, fontSize: 14, color: "#333" }}>
          {title}
        </p>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
        {options.map((opt) => {
          const isActive = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 8,
                border: `2px solid ${isActive ? opt.color ?? "#22c55e" : "#d1d5db"}`,
                backgroundColor: "#fff",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxSizing: "border-box",
              }}
            >
              {/* Radio Circle */}
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: `2px solid ${isActive ? opt.color ?? "#22c55e" : "#9ca3af"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                }}
              >
                {isActive && (
                  <span
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      backgroundColor: opt.color ?? "#22c55e",
                    }}
                  />
                )}
              </span>
              {/* Label */}
              <span
                style={{
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? opt.color ?? "#22c55e" : "#6b7280",
                  transition: "all 0.2s ease",
                }}
              >
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ✅ Demo
export default function App() {
  const [stock, setStock] = useState("in_stock");
  const [size, setSize] = useState("m");
  const [rating, setRating] = useState("4");

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 32,
      }}
    >
      <div style={{ width: "100%", maxWidth: 320, display: "flex", flexDirection: "column", gap: 32 }}>
        <h2 style={{ fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, margin: 0 }}>
          🎛️ Custom Radio Filter Demo
        </h2>

        {/* Example 1 - Stock */}
        <RadioFilterGroup
          title="Filter by Stock"
          name="stock"
          defaultValue="in_stock"
          onChange={setStock}
          options={[
            { value: "in_stock", label: "In Stock", color: "#22c55e" },
            { value: "out_of_stock", label: "Out Of Stock", color: "#6b7280" },
          ]}
        />
        <p style={{ fontFamily: "sans-serif", fontSize: 12, color: "#888", marginTop: -20 }}>
          Selected: <strong>{stock}</strong>
        </p>

        {/* Example 2 - Size */}
        <RadioFilterGroup
          title="Filter by Size"
          name="size"
          defaultValue="m"
          onChange={setSize}
          options={[
            { value: "s", label: "Small (S)", color: "#3b82f6" },
            { value: "m", label: "Medium (M)", color: "#3b82f6" },
            { value: "l", label: "Large (L)", color: "#3b82f6" },
            { value: "xl", label: "Extra Large (XL)", color: "#3b82f6" },
          ]}
        />
        <p style={{ fontFamily: "sans-serif", fontSize: 12, color: "#888", marginTop: -20 }}>
          Selected: <strong>{size}</strong>
        </p>

        {/* Example 3 - Rating */}
        <RadioFilterGroup
          title="Filter by Rating"
          name="rating"
          defaultValue="4"
          onChange={setRating}
          options={[
            { value: "5", label: "⭐⭐⭐⭐⭐ 5 Star", color: "#f59e0b" },
            { value: "4", label: "⭐⭐⭐⭐ 4 Star & above", color: "#f59e0b" },
            { value: "3", label: "⭐⭐⭐ 3 Star & above", color: "#f59e0b" },
          ]}
        />
        <p style={{ fontFamily: "sans-serif", fontSize: 12, color: "#888", marginTop: -20 }}>
          Selected: <strong>{rating}</strong>
        </p>
      </div>
    </div>
  );
}
```