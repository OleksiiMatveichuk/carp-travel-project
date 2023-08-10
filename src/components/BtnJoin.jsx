import left from "../images/btn/mobile-left-border.svg";
import right from "../images/btn/mobile-right-border.svg";
import Image from "next/image";

const BtnJoin = ({ className = "" }) => {
  return (
    <a
      href="#contacts"
      className={`${className} flex items-center justify-between w-[280px] text-lg/[48px] uppercase font-bold bg-prime hover:bg-btn-hover transition-all duration-250`}
    >
      <Image src={left} alt="border" width="42" height="53" />
      Join now
      <Image src={right} alt="border" width="42" height="53" />
    </a>
  );
};

export default BtnJoin;
