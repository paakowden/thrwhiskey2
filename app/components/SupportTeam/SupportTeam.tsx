import Image from "next/image";
import React from "react";

const SupportTeam = () => {
  return (
    <div className="pt-[7rem] pb-[3rem]">
      <div
        className="w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2
    gap-[2rem]"
      >
        <div className="">
          <h1
            className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold
           text-[#02073e] leading-[2.4rem] md:leading-[4rem] dark:text-white"
          >
            Do you need help? Our team is ready to help you.
          </h1>
          <p className="text-gray-900  opacity-90 text-[17px] mt-[1rem] dark:text-white">
            #3 whiskey, is brewed in Ghana with a distinct flavor and iconic
            branding. Every bottle of #3 Whiskey tells a story of craftsmanship,
            community, and the pursuit of excellence. We&apos;re excited to
            share this journey with you, offering a taste of Africa that&apos;s
            as bold and vibrant as the continent itself.
          </p>
          <div className="flex items-center space-x-6 mt-[2rem]">
            <Image
              src="/email.png"
              width={50}
              height={50}
              alt=""
              className="rounded-full"
            />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem] dark:text-white">
                Email client support
              </h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, laboriosam
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-[2rem]">
            <Image
              src="/sales.png"
              width={50}
              height={50}
              alt=""
              className="rounded-full"
            />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem] dark:text-white">
                Sales support
              </h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, laboriosam
              </p>
            </div>
          </div>
        </div>
        <div data-aos="flip-right" data-aos-anchor-placement="top-center">
          <Image
            src="/images/3Whiskey_6.jpg"
            alt=""
            width={600}
            height={700}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;