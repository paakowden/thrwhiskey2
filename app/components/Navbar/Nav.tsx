import Link from "next/link";
import React from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import { ModeToggle } from "../ThemeToggler";
import Logo from "../Logo";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-gray-100  dark:bg-gray-900 fixed w-full top-0 left-0 z-50">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        <h1 className="text-[20px] md:text-[30px] font-bold text-slate-800 dark:text-white">
          <Link href="/" className="flex col-span-1 gap-2">
            <Logo />
            <span className="text-paa font-thin">Whiskey</span>
          </Link>{" "}
        </h1>
        <ul className="hidden lg:flex items-center space-x-10 font-bold uppercase">
          <li className="text-[15px] cursor-pointer text-paa">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[15px] cursor-pointer hover:text-paa transition-all duration-200">
            <Link href="/about">About Us</Link>
          </li>
          <li className="text-[15px] cursor-pointer hover:text-paa transition-all duration-200">
            <Link href="/contact">Contact Us</Link>
          </li>

          <li className="text-[15px] cursor-pointer hover:text-paa transition-all duration-200">
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-5">
          {/* Dark */}
          <ModeToggle />
          <Bars3BottomRightIcon
            onClick={openNav}
            className="w-[1.5rem] lg:hidden h-[1.5rem]
          text-slate-900 dark:bg-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
