import BtnJoin from "../BtnJoin";

const Hero = () => {
  return (
    <section className="px-5 py-14 bg-hero bg-no-repeat bg-center bg-cover h-[642px]">
      <div className="h-full flex flex-col gap-[24px] justify-end items-center">
        <h1 className="">
          <span>7</span>days<span>journey</span>
        </h1>
        <h1>
          <span>Uncover</span> Carpathian’s Secrets
        </h1>
        <p>
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p>
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <BtnJoin />
      </div>
    </section>
  );
};

export default Hero;
