import BtnJoin from "../BtnJoin";

const Hero = () => {
  return (
    <section className="px-5 py-14 bg-hero bg-no-repeat bg-center bg-cover h-[642px]">
      <div className="h-full flex flex-col gap-[24px] justify-end ">
        <h1 className="font-thin tracking-[1.6px] relative self-end">
          <span className="font-medium">7</span>days
          <br />
          <span className="font-light text-[12px] tracking-[9.4px] absolute bottom-[-8px]">
            journey
          </span>
        </h1>
        <h2>
          <span>Uncover</span> Carpathian’s Secrets
        </h2>
        <p>
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p>
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <BtnJoin className={"self-center"} />
      </div>
    </section>
  );
};

export default Hero;
