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
          <p
            className="text-gray-900  opacity-90 text-[17px] mt-[1rem] dark:text-white
          text-muted-foreground"
          >
            Our team of excellent professionals are in hand to help you with all
            your needs and concerns.
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
                Client email support
              </h1>
              <p
                className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85 dark:text-white
              text-muted-foreground"
              >
                Our sales team are on hand to reply to your emails promptly.
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
              <p
                className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85 dark:text-white
              text-muted-foreground"
              >
                Our sales team are on hand to help you solve your purchasing
                problems and also where to get our products.
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
