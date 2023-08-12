"use client";
import Image from "next/image";
import logo from "../images/logo.png";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <header className="flex items-center justify-center fixed top-0 left-0 right-0 h-[105px] px-5 bg-transparent z-10 md:px-8 md:py-16 xl:px-[104px]">
      <div className="flex justify-between items-center w-full max-w-[440px] md:max-w-[1216px] xl:max-w-[1600px]">
        <Image
          className="h-[33px]"
          src={logo}
          width={61}
          height={33}
          alt="logo"
        />
        <button
          onClick={handleClick}
          type="button"
          className="uppercase font-normal md:hidden"
        >
          Menu
        </button>
        <div
          className={`${
            menu ? "flex" : "hidden"
          } bg-menu-bg backdrop-blur-[25px] w-screen h-screen absolute top-0 right-0 items-center justify-center`}
        >
          <button
            onClick={handleClick}
            className="absolute top-[43px] right-[20px] font-normal uppercase"
            type="button"
          >
            Close
          </button>
          <ul className="flex flex-col gap-10 font-normal text-lg">
            <li>
              <a onClick={handleClick} href="#services">
                Services
              </a>
            </li>
            <li>
              <a onClick={handleClick} href="#contacts">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <ul className="hidden md:flex gap-6 font-normal text-sm">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
