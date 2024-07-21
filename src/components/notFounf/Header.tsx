"use client";

import { useState } from "react";
import Image from "next/image";
import dhlLogo from "../../assets/dhl-logo.svg";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
        <div className="header bg-gradient p-4">
          <div className="mx-auto flex min-h-[35px] max-w-[1150px] items-center">
            <div>
              <Image src={dhlLogo} alt="logo" width={150} height={150} />
            </div>
          </div>
        </div>
        <div className="border bg-white p-4">
          <ul className="mx-auto flex h-7 max-w-[1150px] items-center gap-8 text-sm">
            <li className="flex cursor-pointer items-center gap-1 hover:text-red-500 hover:underline">
              <span>Track</span> <MdKeyboardArrowDown />
            </li>
            <li className="flex cursor-pointer items-center gap-1 hover:text-red-500 hover:underline">
              <span>Ship</span> <MdKeyboardArrowDown />
            </li>
          </ul>
        </div>
      </div>
  );
}
