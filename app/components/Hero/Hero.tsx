import React from "react";
import ButtonBlue from "../Buttons/ButtonBlue";
import Image from "next/image";
import HeroImg from "@/public/images/3Whiskey_5.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container py-12 xl:py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 place-items-center">
        <div>
          <div className="items-center">
            <h3
              data-aos="fade-left"
              className="px-12 py-4 text-xl font-bold leading-tight
          lg:text-3xl inline-block"
            >
              <span className="text-paa">#3 </span>Whiskey, Takes you to your
              imagination.
            </h3>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="px-12 pb-4 mt-4 inline-block text-muted-foreground"
            >
              Welcome to #3 African Whiskey, a brand born from two years of
              dedication and passion. Established in 2023 and proudly rooted in
              Ghana, our whiskey represents the fusion of rich African heritage
              with the finest whiskey-making traditions. With the theme “Drink
              and Tourism,” we invite you to experience the unique flavors of
              our whiskey while exploring the beauty and culture of Africa.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400" className="mt-4 ml-10">
            <Link href="/sales">
              <ButtonBlue text="Buy Now" />
            </Link>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="600" className="items-center">
          <Image
            src={HeroImg}
            width={550}
            height={550}
            alt="hero"
            className="max-md:hidden rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
