"use client";
import React from "react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

const AddToBag = ({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    price_id: price_id,
    currency: currency,
    image: urlFor(image).url(),
    sku: "12345"
    
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}>
      Add To Bag
    </Button>
  );
};

export default AddToBag;
