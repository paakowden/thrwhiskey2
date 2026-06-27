import React, { useState } from "react";
import banner from "../assets/banner.jpeg";
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpeg";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import ButtonBlue from "./Buttons/ButtonBlue";
import Link from "next/link";

const slides = [
  {
    id: 1,
    ImgSrc: banner,
    Title: "Takes you to your imagination",
  },
  {
    id: 2,
    ImgSrc: banner1,
    Title: "Takes you to your imagination",
  },
  {
    id: 3,
    ImgSrc: banner2,
    Title: "Takes you to your imagination",
  },
  {
    id: 4,
    ImgSrc: banner3,
    Title: "Takes you to your imagination",
  },
];

const Slider1 = () => {
  const [current, setCurrent] = useState(0);

  const handleRightSide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleLeftSide = () => {
    setCurrent((prev) => {
      if (prev) {
        return prev - 1;
      }
      return slides.length - 1;
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-[1200px] h-[600px] shadow-[0_0_40px_rgba(0,0,0,0.7)] mb-[-130px]
      rounded-2xl overflow-hidden"
      >
        <div
          data-aos="fade-left"
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              className="w-[1200px] h-[600px] bg-center bg-cover flex-shrink-0 relative"
              key={slide.id}
            >
              <div
                className="h-full w-full bg-black/50 absolute top-0 left-0
              bg-gradient-to-b from-transparent to-black/20"
              ></div>
              <div className="absolute left-20 bottom-20">
                <h2
                  className="text-2xl bg-slate-200  uppercase font-bold
                text-shadow-[0_0_20px_rgba(0,0,0,0.7)] italic
                bg-gradient-to-b from-transparent to-black"
                >
                  {}
                </h2>
                <p
                  className="text-xl uppercase italic text-white/90 w-[500px]
                bg-gradient-to-b mt-4 "
                >
                  Takes you to your imagination
                </p>
                <br />
                <Link href="/sales">
                  <ButtonBlue text="Buy Now" />
                </Link>
              </div>
              <Image src={slide.ImgSrc} alt="image" className="object-cover" />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 right-4 text-5xl -translate-y-1/2
        cursor-pointer hover:scale-110 duration-400"
          onClick={handleRightSide}
        >
          <ArrowRightCircle className="w-8 h-8" />
        </button>
        <button
          className="absolute top-1/2 left-4 text-5xl -translate-y-1/2
        cursor-pointer hover:scale-110 duration-400"
          onClick={handleLeftSide}
        >
          <ArrowLeftCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Slider1;
