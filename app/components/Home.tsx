"use client";
import React, { useEffect } from "react";
import Products from "./Products/Products";
import Media from "./Media/Media";
import SupportTeam from "./SupportTeam/SupportTeam";
import CustomerReviews from "./CutomerReviews/CustomerReviews";
import AOS from "aos";
import "aos/dist/aos.css";
//import Slider from "./Slider/Slider";
import Hero from "./Hero/Hero";
import Slider1 from "./Slider1";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div>
      {/*<Slider /> */}
      <Slider1 />
      <Hero />
      <Products />
      <Media />
      <SupportTeam />
      <CustomerReviews />
    </div>
  );
};

export default Home;
