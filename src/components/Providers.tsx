'use client'
import React, { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return <USCProvider
  mode="payment"
  cartMode="client-only"
  stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
  successUrl="https://localhost:3000/stripe/success"
  cancelUrl="https://localhost:3000/stripe/error"
  currency="USD"
  billingAddressCollection={false}
  shouldPersist={true} //store all the items when load
  language="en-US"
  >
    {children}
    </USCProvider>;
};

export default CartProvider;
