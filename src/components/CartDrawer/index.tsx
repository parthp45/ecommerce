"use client";

import { Drawer } from "antd";
import React from "react";

const CartDrawer: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };

  const drawerStyles: any = {
    // mask: {
    //   backdropFilter: 'blur(10px)',
    // },
    // content: {
    //   boxShadow: '-10px 0 10px #666',
    // },
    header: {
      borderBottom: `1px solid red`,
    },

    // body: {
    //   fontSize: token.fontSizeLG,
    // },
    // footer: {
    //   borderTop: `1px solid ${token.colorBorder}`,
    // },
  };
  return (
    <>
      <Drawer
        title="Cart"
        placement={"right"}
        closable
        onClose={onClose}
        open={open}
        closeIcon={<h1>D</h1>}
        styles={drawerStyles}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default CartDrawer;
