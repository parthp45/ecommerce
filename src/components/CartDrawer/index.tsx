"use client";

import { CartSliceType } from "@/common/commonTypes";
import { toggleCart, updateCartItemQuantity } from "@/utils/cartSlice";
import { RootState } from "@/utils/store";
import {
  MinusCircle,
  PlusCircle,
  ShoppingCartSimple,
  X,
} from "@phosphor-icons/react";
import { Drawer } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { quicksand } from "@/common/fonts";
import Image from "next/image";

const CartDrawer: React.FC = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(toggleCart(false));
  };

  const drawerStyles: any = {
    header: {
      borderBottom: `1px solid red`,
    },
  };

  const cartItems = useSelector((state: RootState) => state.cart?.cartItems);
  const cartData = useSelector<CartSliceType>((state) => state.cart?.open);

  const incrmentQuantity = (id: string) => {
    dispatch(
      updateCartItemQuantity({
        id,
        quantity: cartItems?.get(id)?.quantity! + 1,
      })
    );
  };

  const decrementQuantity = (id: string) => {
    const newQuantity = Math.max(cartItems?.get(id)?.quantity! - 1, 1);
    dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
  };
  return (
    <>
      <Drawer
        title="Cart"
        placement={"right"}
        closable
        onClose={onClose}
        open={cartData as boolean}
        closeIcon={
          <X size={30} weight="fill" className="text-black dark:text-white" />
        }
        styles={drawerStyles}
        className={styles.drawerWrapper}
      >
        {Array.from(cartItems.values())?.length === 0 && (
          <div className="flex flex-col items-center gap-2 mt-5">
            <ShoppingCartSimple
              size={82}
              className="text-black dark:text-white"
              weight="regular"
            />
            <h2 className="font-semibold text-3xl ">Your cart is empty.</h2>
          </div>
        )}
        {Array.from(cartItems.values())?.map((item) => (
          <div
            key={item.id}
            className="flex  gap-4  p-2 border-x-0 border-t-0 border-b border-b-blue-800  border dark:border-solid"
          >
            <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800 grid place-content-center">
              <Image src={item.imgSrc} alt={item.name} width={70} height={70} />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="w-full flex justify-between">
                <h4
                  className={`text-xl font-semibold ${quicksand.className} w-[50%]`}
                >
                  {item.name}
                </h4>
                <h5 className={`text-lg font-semibold ${quicksand.className}`}>
                  {item.price}&nbsp;₹
                </h5>
              </div>
              <div className="ml-auto w-[40%] flex justify-between items-center rounded-full border-2 border-blue-700  ">
                <button
                  className={` p-1`}
                  onClick={() => decrementQuantity(item.id)}
                >
                  <MinusCircle
                    size={28}
                    className="text-black dark:text-white"
                  />
                </button>
                <span
                  className={`text-lg font-semibold text-black dark:text-white ${quicksand.className}`}
                >
                  {item.quantity}
                </span>
                <button
                  className={` p-1`}
                  onClick={() => incrmentQuantity(item.id)}
                >
                  <PlusCircle
                    size={28}
                    className="text-black dark:text-white"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Drawer>
    </>
  );
};

export default CartDrawer;
