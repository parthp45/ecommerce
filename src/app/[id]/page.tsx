"use client";

import { CartItem, CartSliceType } from "@/common/commonTypes";
import { jakarta, monst, quicksand } from "@/common/fonts";
import { addCartItems, toggleCart } from "@/utils/cartSlice";
import { getAllProducts } from "@/utils/getAllProducts";
import { Metadata } from "next";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductInfo = () => {
  const params = useParams();
  const data = getAllProducts();
  const cartItem = data.find((item) => `${item.id}` === params?.id);
  const dispatch = useDispatch();
  const cartData = useSelector<CartSliceType>((state) => state?.cart?.open);

  const handleCartItems = () => {
    dispatch(toggleCart(true));
    dispatch(addCartItems(cartItem));
  };
  return (
    <div className="flex justify-center gap-8 items-center flex-col  sm:flex-row p-2 sm:p-0">
      <div className="w-full sm:w-[50%]">
        <Image
          src={cartItem?.imgSrc!}
          alt={cartItem?.name!}
          width={600}
          height={600}
        />
      </div>
      <div className="w-full sm:w-[450px]">
        <h2
          className={` text-3xl text-center sm:text-left  sm:text-7xl font-bold ${jakarta.className}`}
        >
          {cartItem?.name}
        </h2>
        <h3
          className={`text-3xl text-center sm:text-left sm:text-xl font-bold ${quicksand.className} my-4`}
        >
          {cartItem?.price} ₹
        </h3>
        <button
          className="rounded-3xl bg-blue-600 hover:bg-blue-800 text-white  p-2 sm:p-5 w-full  text-xl sm:text-2xl transition-all"
          onClick={() => handleCartItems()}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
