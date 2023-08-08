import Image from "next/image";

import img from "../../images/mobile/offer-1.jpg";

const WeOffer = () => {
  return (
    <section
      id="services"
      className="px-5 py-14 h-[851px] bg-we-offer bg-no-repeat bg-center bg-cover"
    >
      <div>
        <h2>
          We <span>offer</span>
        </h2>
        <h2>01/05</h2>
        <Image src={img} alt="" />
        <ul>
          <li>
            <h3>ATVs Traveling</h3>
          </li>
          <li>
            <h3>Rock climbing</h3>
          </li>
          <li>
            <h3>Hot air ballooning</h3>
          </li>
          <li>
            <h3>Skydiving</h3>
          </li>
          <li>
            <h3>Rafting</h3>
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
