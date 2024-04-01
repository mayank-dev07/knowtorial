"use client";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <nav className="w-full flex justify-center py-4 px-2 lg:px-8 bg-[#B3BFCB]">
      <div className="w-full hidden md:flex justify-between bg-red">
        <div className="w-8/12 flex justify-center items-center font-bold">
          <span className="px-2 lg:px-4">CUET</span>
          <span className="px-2 lg:px-4">Result</span>
          <span className="px-2 lg:px-4">Preparation</span>
          <span className="px-2 lg:px-4">Articles</span>
          <span className="px-2 lg:px-4">Universities</span>
          <span className="px-2 lg:px-4">Centers</span>
        </div>
        <div className="w-4/12 flex justify-evenly">
          <button className="md:px-8 lg:px-12 border-[1px] rounded-full py-1.5 text-white">
            Sign&nbsp;In
          </button>
          <button className="md:px-4 lg:px-8 border-[1px] rounded-full py-1.5 bg-[#FF6905] border-[#FF6905] shadow-lg text-white">
            Contact&nbsp;Us
          </button>
        </div>
      </div>
      <div className="flex justify-end w-full md:hidden">
        <Icon
          icon="solar:hamburger-menu-outline"
          onClick={showDrawer}
          className="text-3xl"
        />
        <Drawer title="" onClose={onClose} open={open}>
          <div className="flex flex-col">
            <span className="py-2 text-lg">CUET</span>
            <span className="py-2 text-lg">Result</span>
            <span className="py-2 text-lg">Preparation</span>
            <span className="py-2 text-lg">Articles</span>
            <span className="py-2 text-lg">Universities</span>
            <span className="py-2 text-lg">Centers</span>
            <div className="flex justify-center items-center">
              <button className="md:px-8 lg:px-12 border-[1px] w-1/2 my-2 rounded-full py-1.5 text-white">
                Sign&nbsp;In
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="md:px-4 lg:px-8 border-[1px] w-1/2 my-2 rounded-full py-1.5 bg-[#FF6905] border-[#FF6905] shadow-lg text-white">
                Contact&nbsp;Us
              </button>
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
