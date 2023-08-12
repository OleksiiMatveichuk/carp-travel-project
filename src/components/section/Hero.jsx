import BtnJoin from "../BtnJoin";

const Hero = () => {
  return (
    <section className="flex justify-center items-end px-5 py-14 bg-hero bg-no-repeat bg-center bg-cover min-h-[642px] md:px-8 md:py-16 md:min-h-[500px] xl:px-[104px] xl:py-[104px] xl:min-h-screen">
      <div className="h-full flex flex-col gap-[24px] justify-end max-w-[440px] md:max-w-[1216px] md:flex-row md:justify-between xl:max-w-[1600px]">
        <h1 className="font-thin tracking-[1.6px] relative self-end md:hidden">
          <span className="font-medium">7</span>days
          <br />
          <span className="font-light text-[12px] tracking-[9.4px] absolute bottom-[-8px]">
            journey
          </span>
        </h1>
        <div className="flex flex-col gap-[24px] md:basis-2/3 md:h-full md:justify-between md:gap-[68px]">
          <h2 className="">
            <span className="block">Uncover</span> Carpathian’s Secrets
          </h2>
          <p>
            Hoverla / Yaremche / Zakarpattia /<br className="xl:hidden" />
            Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="flex flex-col gap-[24px] md:basis-1/3 md:justify-between h-full">
          <p>
            <h1 className="hidden md:block font-thin tracking-[1.6px] relative self-end md:mb-auto">
              <span className="font-medium">7</span>days
              <br />
              <span className="font-light text-[12px] tracking-[9.4px] absolute bottom-[-8px]">
                journey
              </span>
            </h1>
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <BtnJoin className={"self-center"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
