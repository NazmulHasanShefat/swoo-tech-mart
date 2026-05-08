"use client"
import RadioBox from '@/components/ui/RadioBox';
import React, { useState } from 'react';

const StockRadio = () => {
      const [stock, setStock] = useState("in_stock");
  const [size, setSize] = useState("m");
  const [rating, setRating] = useState("4");
    return (
          <RadioBox
          title="Filter by Stock"
          name="stock"
          defaultValue="in_stock"
          onChange={setStock}
          options={[
            { value: "in_stock", label: "In Stock", color: "#22c55e" },
            { value: "out_of_stock", label: "Out Of Stock", color: "#6b7280" },
          ]}
        />

    );
};

export default StockRadio;