import React from "react";
import ButtonBlue from "../Buttons/ButtonBlue";
import Image from "next/image";
import HeroImg from "@/public/images/3Whiskey_5.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center
    flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2">
          <h1
            data-aos="fade-left"
            className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold
          text-[#02073e] leading-[2.4rem] md:leading-[4rem]"
          >
            <div className="dark:text-white">
              <span className="text-paa md:col-span-3">#3 </span> Whiskey, Takes
              you to your imagination.
            </div>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="md:text-[17px] md:col-span-3 text-[15px] mb-[2rem] text-black opacity-90
          font-[400] dark:text-white"
          >
            Welcome to #3 African Whiskey, a brand born from two years of
            dedication and passion. Established in 2023 and proudly rooted in
            Ghana, our whiskey represents the fusion of rich African heritage
            with the finest whiskey-making traditions. With the theme “Drink and
            Tourism,” we invite you to experience the unique flavors of our
            whiskey while exploring the beauty and culture of Africa.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex items-center space-x-4 md:space-x-6 md:mb-4"
          >
            <Link href="/sales">
              <ButtonBlue text="Buy Now" />
            </Link>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="600"
          className="col-span-3 hidden sm:block ml-12"
        >
          <Image
            src={HeroImg}
            width={550}
            height={550}
            alt="hero"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
