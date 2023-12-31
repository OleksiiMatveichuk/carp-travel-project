"use client";
import { useForm } from "react-hook-form";

const Footer = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    console.log("submit");
    reset();
  };

  return (
    <footer
      id="contacts"
      className="flex justify-center px-5 py-14 min-h-[856px] bg-contact-us bg-no-repeat bg-center bg-cover md:px-8 md:py-16 md:min-h-[660px] xl:px-[104px] xl:py-[104px] xl:min-h-screen"
    >
      <div className="max-w-[440px] md:max-w-[1216px] md:flex md:flex-col md:justify-between xl:max-w-[1600px]">
        <h2 className="mb-9">
          Contact <span>us</span>
        </h2>
        <div className="flex flex-col gap-6 items-start md:flex-row">
          <div className="flex flex-col gap-6 items-start">
            <div className="flex flex-row-reverse gap-[20px] ">
              <h3>Phone number</h3>
              <ul className="text-[14px]/[24px] font-normal w-[180px] md:w-[221px] text-end md:text-[16px]/[24px]">
                <li>
                  <a
                    href="tel:+38 (098) 12 34 567"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    +38 (098) 12 34 567
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+38 (073) 12 34 567"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    +38 (073) 12 34 567
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row-reverse gap-[20px]">
              <h3>E-mail</h3>
              <a
                href="mailto:support@carptravel.com"
                target="blank"
                rel="noopener noreferrer"
                className="text-[14px]/[24px] font-normal w-[180px] md:w-[221px] text-end md:text-[16px]/[24px]"
              >
                support@carptravel.com
              </a>
            </div>
          </div>
          <div className="flex  gap-[20px]">
            <h3 className="w-[180px] md:w-[221px] text-end">Follow us</h3>
            <ul className="flex flex-col text-[14px]/[24px] font-normal md:text-[16px]/[24px]">
              <li>
                <a
                  href="https://uk-ua.facebook.com/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form
          className="flex flex-col gap-6 md:flex-row md:gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6 md:basis-1/3">
            <label
              className={`relative ${errors?.fullName && "text-input-error"}`}
            >
              <span className="opacity-60 text-[12px]/[24px] tracking-[2.4px] ">
                Full name
              </span>
              <input
                className="bg-input h-6 w-full px-2 outline-none"
                {...register("fullName", {
                  required: true,
                  pattern: /^[A-Za-z]+\s[a-zA-Z\s\.]+/,
                })}
                type="text"
                placeholder="John Smith"
              />
              {errors?.fullName && (
                <span className="message-invalid foreword-message">
                  Incorrect name
                </span>
              )}
            </label>
            <label
              className={`relative ${errors?.email && "text-input-error"}`}
            >
              <span className="opacity-60 text-[12px]/[24px] tracking-[2.4px]">
                E-mail
              </span>
              <input
                className="bg-input h-6 w-full px-2 outline-none"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                })}
                type="email"
                placeholder="johnsmith@email.com"
              />
              {errors?.email && (
                <span className="message-invalid foreword-message">
                  Invalid email
                </span>
              )}
            </label>
          </div>
          <div className="flex flex-col gap-4 md:basis-2/3">
            <label>
              <span className="opacity-60 text-[12px]/[24px] tracking-[2.4px] ">
                Message
              </span>
              <textarea
                className="bg-input h-48 w-full resize-none p-2 outline-none"
                {...register("comment")}
                rows="5"
              ></textarea>
            </label>
            <button
              className="text-[30px] font-medium uppercase self-end"
              type="submit"
            >
              send
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
