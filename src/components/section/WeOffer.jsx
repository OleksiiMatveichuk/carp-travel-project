"use client";
import Image from "next/image";
import data from "../../data/weOffer.js";
import { useState } from "react";

// import "animate.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { EffectFade, Virtual } from "swiper/modules";
// import "swiper/css/effect-fade";

const bg = [
  "bg-we-offer-1",
  "bg-we-offer-2",
  "bg-we-offer-3",
  "bg-we-offer-4",
  "bg-we-offer-5",
];

const WeOffer = () => {
  const [index, setIndex] = useState(0);

  const num = (number) => {
    return String(number).padStart(2, "0");
  };

  const handleClick = (number) => {
    setIndex(number);
  };

  return (
    <section
      id="services"
      className={`min-h-[851px] ${bg[index]} bg-no-repeat bg-center bg-cover transition-all duration-300 relative md:min-h-[600px]`}
    >
      <div className="w-full min-h-full flex justify-center px-5 py-14 bg-offer md:px-8 md:py-16">
        <div className="flex flex-col h-full max-w-[440px] md:max-w-[1216px] md:h-full">
          <div className="flex flex-col gap-6 mb-4 md:flex-row md:justify-between md:mb-9">
            <h2>
              We <span>offer</span>
            </h2>
            <h2 className="self-end">
              {num(index + 1)}/
              <span className="text-btn-hover font-thin">
                {num(data.length)}
              </span>
            </h2>
          </div>
          <div className="md:flex md:gap-5">
            <Image
              className="w-full md:basis-2/3 md:object-cover"
              src={data[index].img}
              alt={data[index].alt}
            />
            <div className="md:flex md:flex-col mt-4 md:mt-0 md:basis-1/3 md:justify-between">
              <p className="self-end mb-6 leading-6 tracking-[2.4px] opacity-80 md:self-start md:text-[12px]">
                {data[index].tagline}
              </p>
              <ul className="uppercase text-[20px]/[17px] flex flex-col gap-4 mb-[34px] md:order-[-1] md:text-[22px]/[18px]">
                <li className="relative">
                  <button
                    onClick={() => handleClick(0)}
                    className={`opacity-50 hover:opacity-100  transition-all duration-300 ${
                      index === 0 && "offer-active"
                    }`}
                  >
                    ATVs Traveling
                  </button>
                </li>
                <li className="relative">
                  <button
                    onClick={() => handleClick(1)}
                    className={`opacity-50 hover:opacity-100  transition-all duration-300 ${
                      index === 1 && "offer-active"
                    }`}
                  >
                    Rock climbing
                  </button>
                </li>
                <li className="relative">
                  <button
                    onClick={() => handleClick(2)}
                    className={`opacity-50 hover:opacity-100 transition-all duration-300 ${
                      index === 2 && "offer-active"
                    }`}
                  >
                    Hot air ballooning
                  </button>
                </li>
                <li className="relative">
                  <button
                    onClick={() => handleClick(3)}
                    className={`opacity-50 hover:opacity-100  transition-all duration-300 ${
                      index === 3 && "offer-active"
                    }`}
                  >
                    Skydiving
                  </button>
                </li>
                <li className="relative">
                  <button
                    onClick={() => handleClick(4)}
                    className={`opacity-50 hover:opacity-100  transition-all duration-300 ${
                      index === 4 && "offer-active"
                    }`}
                  >
                    Rafting
                  </button>
                </li>
              </ul>
              <p>{data[index].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeOffer;
