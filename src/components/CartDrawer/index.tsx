"use client";

import { CartSliceType } from "@/common/commonTypes";
import { jakarta, quicksand } from "@/common/fonts";
import {
  removeCartItem,
  toggleCart,
  updateCartItemQuantity,
} from "@/utils/cartSlice";
import { RootState } from "@/utils/store";
import {
  MinusCircle,
  PlusCircle,
  ShoppingCartSimple,
  X,
} from "@phosphor-icons/react";
import { Drawer } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";

const CartDrawer: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onClose = () => {
    dispatch(toggleCart(false));
  };

  const drawerStyles: any = {
    header: {
      borderBottom: `1px solid #102a63`,
      padding: "9px",
    },
    body: {
      overflow: "hidden",
      padding: "0",
      position: "relative",
    },
  };

  const cartItems = useSelector((state: RootState) => state.cart?.cartItems);
  const cartData = useSelector<CartSliceType>((state) => state.cart?.open);

  const incrmentQuantity = (id: number) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      dispatch(
        updateCartItemQuantity({
          id,
          quantity: cartItems[existingItemIndex]?.quantity! + 1,
        })
      );
    }
  };

  const decrementQuantity = (id: number) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      const currentQuantity = cartItems[existingItemIndex].quantity;
      const newQuantity = Math.max(currentQuantity! - 1, 0);

      dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));

      if (newQuantity === 0) {
        removeItem(id);
      }
    }
  };

  const removeItem = (id: number) => {
    dispatch(removeCartItem({ id }));
  };

  const getTotalPrice = () => {
    const totalPrice = Array.from(cartItems.values()).reduce(
      (total, item) => total + item.price * item.quantity!,
      0
    );
    return totalPrice;
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
        <div className={`relative `}>
          {cartItems?.length === 0 && (
            <div className="flex flex-col items-center gap-2 mt-5">
              <ShoppingCartSimple
                size={82}
                className="text-black dark:text-white"
                weight="regular"
              />
              <h2 className="font-semibold text-3xl ">Your cart is empty.</h2>
            </div>
          )}
          <section className={`overflow-auto h-[calc(100vh-175px)] p-6`}>
            {cartItems?.map((item) => (
              <div
                key={item.id}
                className="flex  gap-4  p-2 border-x-0 border-t-0 border-b border-b-blue-800  border dark:border-solid dark:border-b-gray-600"
              >
                <div className="relative h-16 w-16 cursor-pointer  rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800 grid place-content-center">
                  <button
                    className={` absolute top-[-4px] right-[0] p-[3px] bg-red-800 rounded-md`}
                    onClick={() => {
                      removeItem(item.id);
                    }}
                  >
                    <X size={12} className={`text-white`} />
                  </button>
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    width={70}
                    height={70}
                    priority
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <div className="w-full flex justify-between">
                    <h4
                      className={`text-xl font-semibold ${quicksand.className} w-[50%]`}
                    >
                      {item.name}
                    </h4>
                    <h5
                      className={`text-lg font-semibold ${quicksand.className}`}
                    >
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
          </section>
        </div>
        {cartItems?.length > 0 && (
          <div className={`absolute w-full px-6 bottom-0`}>
            <h4
              className={` text-center text-xl text-gray-800 dark:text-white font-bold ${jakarta.className}`}
            >
              Total: {getTotalPrice()}&nbsp;₹
            </h4>
            <button
              className={`w-full p-3 text-white mt-1 mb-2 rounded-2xl bg-blue-700 text-lg transition-all hover:bg-blue-900`}
              onClick={() => {
                router.push("/checkout");
                dispatch(toggleCart(false));
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default CartDrawer;
