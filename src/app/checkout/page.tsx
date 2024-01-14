"use client";

import { RootState } from "@/utils/store";
import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart?.cartItems);

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
