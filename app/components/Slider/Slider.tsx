"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ButtonBlue from "../Buttons/ButtonBlue";

const slides = [
  {
    id: 1,
    title: "Takes you to your imagination",
    description: "A taste of Luxury in Every Bottle",
    img: "/images/3Whiskey_15.jpg",
    url: "/sales",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Takes you to your imagination",
    description: "Carefully Crafted",
    img: "/images/slider2.jpg",
    url: "/sales",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Takes you to your imagination",
    description: "Soothes your taste Buds",
    img: "/images/3Whiskey_4.jpg",
    url: "/sales",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 4,
    title: "Takes you to your imagination",
    description: "Great Flavor",
    img: "/images/3Whiskey_18.jpeg",
    url: "/sales",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div
              className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8
            2xl:gap-12 text-center dark:text-black"
            >
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-2xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <ButtonBlue text="Buy Now" />
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                //height={900}
                //width={700}
                sizes="100%"
                fill
                alt="image"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-[7rem] flex gap-4 ">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-900 cursor-pointer
        flex items-center justify-center  ${
          current === index ? "scale-150" : ""
        }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-900 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
