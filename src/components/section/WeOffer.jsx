"use client";
import Image from "next/image";
import data from "../../data/weOffer.js";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Virtual } from "swiper/modules";

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
      className={`px-5 py-14 h-[851px] ${bg[index]} bg-no-repeat bg-center bg-cover transition-all duration-300`}
    >
      <div>
        <h2>
          We <span>offer</span>
        </h2>
        <h2>
          {num(index + 1)}/{num(data.length)}
        </h2>
        {/* <Swiper
          modules={[EffectFade, Virtual]}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src={data[index].img}
              alt={data[index].alt}
              // style={{
              //   transition: "1000ms",
              // }}
            />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper> */}
        <Image
          src={data[index].img}
          alt={data[index].alt}
          style={{
            transition: "1000ms",
          }}
        />
        <p>{data[index].tagline}</p>
        <ul className="uppercase text-[20px]/[17px] flex flex-col gap-4 ">
          <li>
            <button
              onClick={() => handleClick(0)}
              className="opacity-50 hover:opacity-100"
            >
              ATVs Traveling
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(1)}
              className="opacity-50 hover:opacity-100"
            >
              Rock climbing
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(2)}
              className="opacity-50 hover:opacity-100"
            >
              Hot air ballooning
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className="opacity-50 hover:opacity-100"
            >
              Skydiving
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(4)}
              className="opacity-50 hover:opacity-100"
            >
              Rafting
            </button>
          </li>
        </ul>
        <p>
          Join exciting rafting expeditions on the waterways of the Carpathians.
          Go through challenging waterways and overcome gusty waves, feel the
          adrenaline, and enjoy the incredible views of the surrounding
          mountains.
        </p>
      </div>
    </section>
  );
};

export default WeOffer;
