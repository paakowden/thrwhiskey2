import { CheckIcon } from "lucide-react";
import React from "react";

const Media = () => {
  return (
    <div className="pt-[5rem] pb-[rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="order-2 lg:order-1"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-[95vh] h-[70vh] py-2"
          >
            <source src="/images/whiskeya.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="order-1 lg:order-2">
          <h1
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e] font-bold
          leading-[2rem] md:leading-[3rem] dark:text-white"
          >
            Experience the joy of exceptional #3 whiskey in a well crafted
            bottle, where every glass is filled with passion and warmth.
          </h1>
          <p
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
            className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px]
          md:text-[16px] dark:text-white"
          >
            #3 whiskey, is brewed in Ghana with a distinct flavor and iconic
            branding. Every bottle of #3 Whiskey tells a story of craftsmanship,
            community, and the pursuit of excellence. We&apos;re excited to
            share this journey with you, offering a taste of Africa that&apos;s
            as bold and vibrant as the continent itself.
          </p>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="600"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] text-[#02073e] font-[500] dark:text-white">
              Takes you to your imagination.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="800"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] text-[#02073e] font-[500] dark:text-white">
              Great Taste.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="1000"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] text-[#02073e] font-[500] dark:text-white">
              Brewed under hygienic conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
