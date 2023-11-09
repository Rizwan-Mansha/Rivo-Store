"use client";
import React from "react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/lib/sanity";
import { ProductCart } from "./AddToBag";

const CheckOutNow = ({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  const buyNow = (price_id: string) => {
    checkoutSingleItem(price_id);
  };

  const product = {
    name: name,
    description: description,
    price: price,
    price_id: price_id,
    currency: currency,
    image: urlFor(image).url(),
  };
  return (
    <Button
      onClick={() => {
        buyNow(product.price_id);
      }}>
      Add To Bag
    </Button>
  );
};

export default CheckOutNow;
