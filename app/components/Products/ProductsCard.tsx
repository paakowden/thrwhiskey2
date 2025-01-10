import Image from "next/image";
import React from "react";
import ButtonBlue from "../Buttons/ButtonBlue";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
}

const ProductsCard = ({ image, title }: CardProps) => {
  return (
    <div
      className="text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg
  transition-all duration-300 cursor-pointer hover:scale-105 dark:bg-slate-900"
    >
      <Image
        src={image}
        width={400}
        height={400}
        alt="product"
        className="mx-auto rounded-md"
      />
      <h1
        className="text-[20px] mt-[1.4rem] font-[500] text-[#02073e]
      dark:text-white"
      >
        {title}
      </h1>
      <p className="mt-[1rem] text-black opacity-90 text-[15px] dark:text-white">
        Exciting taste that captures your imagination. Our carefully curated
        collection brings you a taste of luxury with every bottle, allowing you
        to savor the best that the world of whiskey has to offer.
      </p>
      <p
        className="mt-[1rem] text-black opacity-90 text-[20px] font-bold
      dark:text-white"
      >
        $24.00
      </p>
      <div className="mt-3 cursor-pointer">
        <Link href="/sales">
          <ButtonBlue text="Buy Now" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
