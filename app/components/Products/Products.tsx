import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import ProductsCard from "./ProductsCard";
import Pic from "@/public/images/3Whiskey_1.jpg";
import Pic1 from "@/public/images/3Whiskey_3.jpg";
import Pic2 from "@/public/images/3Whiskey_6.jpg";
import Pic3 from "@/public/images/3Whiskey_17.jpeg";
import Pic4 from "@/public/images/3Whiskey_8.jpg";
import Pic5 from "@/public/images/3Whiskey_22.jpg";

const Products = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* SectionHeading */}
      <SectionHeading
        headingMini="Takes you to your imagination"
        headingPrimary="Our Products "
      />
      <div
        className="pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 items-center gap-[1.4rem]"
      >
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <ProductsCard title="Takes you to your imagination" image={Pic.src} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <ProductsCard
            title="A taste of Luxury in Every Bottle"
            image={Pic1.src}
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <ProductsCard title="Carefully Crafted" image={Pic2.src} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-anchor-placement="top-center"
        >
          <ProductsCard title="Soothes your taste buds" image={Pic3.src} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-anchor-placement="top-center"
        >
          <ProductsCard title="Great Flavor" image={Pic4.src} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-anchor-placement="top-center"
        >
          <ProductsCard title="Iconic Branding" image={Pic5.src} />
        </div>
      </div>
    </div>
  );
};

export default Products;
