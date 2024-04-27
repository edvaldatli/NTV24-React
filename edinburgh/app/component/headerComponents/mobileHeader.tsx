"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DesktopHeader from "./desktopHeader";
import NavigationMobileList from "./navMobileList";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
        ease: "easeOut",
      },
      x: 0,
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        ease: "easeOut",
      },
      x: "-100%",
    },
  };
  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  console.log(drawerOpen);

  return (
    <>
      <DesktopHeader />
      {/* small nav */}
      <div className="md:hidden absolute w-full">
        <div className="flex flex-row bg-dark h-20 w-full">
          <button
            className="absolute group left-2 top-4 z-10"
            onClick={() => toggleDrawer()}
            aria-label="Toggle navigation"
          >
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[45px] h-[45px] transform transition-all bg-dark ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
          <AnimatePresence>
            {drawerOpen && (
              <motion.nav
                animate={drawerOpen ? "open" : "closed"}
                variants={variants}
                initial="closed"
                exit="closed"
                className="fixed w-2/3 bg-dark-secondary h-full"
              >
                <div className="flex flex-col">
                  <div className="flex flex-row justify-end">
                    <Image alt="logo" src={logo} height={50} width={50} />
                  </div>
                  <NavigationMobileList onClick={toggleDrawer} />
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
          <Image
            alt="logo"
            src={logo}
            height={50}
            width={50}
            style={{ objectFit: "contain" }}
            layout="responsive"
            className="w-screen"
          />
        </div>
        {/*Drawer */}
      </div>
    </>
  );
}
