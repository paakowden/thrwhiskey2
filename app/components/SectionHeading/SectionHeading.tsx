import React from "react";

interface Props {
  headingMini: string;
  headingPrimary: string;
}

const SectionHeading = ({ headingMini, headingPrimary }: Props) => {
  return (
    <div className="text-center p-2">
      <p className="text-[#0b6cad] md:text-[16px] text-[15px] dark:text-white">
        {headingMini}
      </p>
      <h1
        className="mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-[#02073e]
      dark:text-white"
      >
        {headingPrimary}
      </h1>
    </div>
  );
};

export default SectionHeading;
