"use client";
import React, { useEffect } from "react";
import Products from "./Products/Products";
import Media from "./Media/Media";
import SupportTeam from "./SupportTeam/SupportTeam";
import CustomerReviews from "./CutomerReviews/CustomerReviews";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "./Slider/Slider";

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
      <Slider />
      <Products />
      <Media />
      <SupportTeam />
      <CustomerReviews />
    </div>
  );
};

export default Home;
