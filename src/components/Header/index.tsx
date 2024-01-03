"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeSelector from "../ThemeSelector";
import CartDrawer from "../CartDrawer";
import { Storefront } from "@phosphor-icons/react";

const Header = () => {
  const [open, setOpen] = useState(false);
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

        <Link href="/orders">Orders</Link>
        <Link href="/cart">Cart</Link>
      </div>
      <div className={`flex items-center gap-4 ml-auto`}>
        <ThemeSelector />
        <button onClick={() => setOpen(!open)}>Cart</button>
        <CartDrawer open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
