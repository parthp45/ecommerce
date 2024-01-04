"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeSelector from "../ThemeSelector";
import CartDrawer from "../CartDrawer";
import { ShoppingCart, Storefront } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/utils/cartSlice";
import { CartSliceType } from "@/common/commonTypes";
import { RootState } from "@/utils/store";

const Header = () => {
  const cartData = useSelector<CartSliceType>((state) => state.cart?.open);
  const cartItems = useSelector((state: RootState) => state.cart?.cartItems);
  const dispatch = useDispatch();

  const totalQuantity = Array.from(cartItems.values()).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header
      className={`flex items-center shadow-lg dark:bg-black dark:text-white dark:shadow-blue-600 dark:shadow-sm p-3`}
    >
      <div className={`flex items-center gap-4`}>
        <Link href="/">
          <Storefront
            size={28}
            weight="duotone"
            className={" text-purple-500"}
          />
        </Link>

        <Link href="/orders" className="font-semibold">
          Orders
        </Link>
        <Link href="/cart" className="font-semibold">
          Cart
        </Link>
      </div>
      <div className={`flex items-center gap-4 ml-auto`}>
        <ThemeSelector />
        <div
          className="relative"
          onClick={() => dispatch(toggleCart(!cartData))}
        >
          <ShoppingCart
            size={24}
            className="text-black dark:text-white"
            cursor={"pointer"}
          />
          {totalQuantity > 0 && (
            <span className="absolute w-[20px] h-[20px] bg-red-600 grid place-content-center top-[-12px] text-xs rounded-full right-[-4px] text-white font-semibold">
              {totalQuantity}
            </span>
          )}
        </div>
        <CartDrawer />
      </div>
    </header>
  );
};

export default Header;
