import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`transform tranition-all ${navOpenStyle} duration-500 fixed top-0 left-0 z-[200]
    h-[100vh] right-0 bottom-0 bg-black `}
    >
      <XMarkIcon
        onClick={closeNav}
        className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem] cursor-pointer"
      />
      <ul
        className="relative z-[201] space-y-10 flex flex-col justify-center h-[100%] 
      items-center uppercase"
      >
        <li className="text-[18px] cursor-pointer text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="text-[18px] cursor-pointer text-white hover:text-paa transition-all duration-200">
          <Link href="/about">About Us</Link>
        </li>
        <li className="text-[18px] cursor-pointer text-white hover:text-paa transition-all duration-200">
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className="text-[18px] cursor-pointer text-white hover:text-paa transition-all duration-200">
          <Link href="/affilliates">Affilliates</Link>
        </li>
        <li className="text-[18px] cursor-pointer text-white hover:text-paa transition-all duration-200">
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
