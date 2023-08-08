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
    <header className="flex justify-between items-center fixed top-0 left-0 right-0 h-[105px] px-5 bg-transparent z-10">
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
        className="uppercase font-normal"
      >
        Menu
      </button>
      <div
        className={`${
          menu ? "block" : "hidden"
        } bg-menu-bg backdrop-blur-[25px] w-[320px] h-screen absolute top-0 right-0 `}
      >
        <button onClick={handleClick} type="button">
          Close
        </button>
        <ul>
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
