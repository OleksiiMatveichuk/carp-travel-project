"use client";
import Image from "next/image";
import data from "../../data/weOffer.js";
import { useState } from "react";
import "animate.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Virtual } from "swiper/modules";
import "swiper/css/effect-fade";

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
      className={`min-h-[851px] ${bg[index]} bg-no-repeat bg-center bg-cover transition-all duration-300`}
    >
      <div className="flex justify-center w-full h-full px-5 py-14 bg-offer md:px-8 md:py-16">
        <div className="flex flex-col max-w-[440px] md:max-w-[1216px]">
          <h2 className="mb-6">
            We <span>offer</span>
          </h2>
          <h2 className="self-end mb-4">
            {num(index + 1)}/
            <span className="text-btn-hover font-thin">{num(data.length)}</span>
          </h2>
          {/* <Swiper
            modules={[EffectFade, Virtual]}
            // spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Image
                // className="transition-all duration-300"
                src={data[index].img}
                alt={data[index].alt}
              />
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper> */}
          <Image
            className="w-full animate__fadeIn animate__slower"
            // key={index}
            src={data[index].img}
            alt={data[index].alt}
          />
          <p className="self-end mt-4 mb-6 leading-6 tracking-[2.4px] opacity-80">
            {data[index].tagline}
          </p>
          <ul className="uppercase text-[20px]/[17px] flex flex-col gap-4 mb-[34px]">
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
          <p>
            Join exciting rafting expeditions on the waterways of the
            Carpathians. Go through challenging waterways and overcome gusty
            waves, feel the adrenaline, and enjoy the incredible views of the
            surrounding mountains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeOffer;
