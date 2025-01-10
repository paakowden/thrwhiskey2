"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import Media from "./Media/Media";
import SupportTeam from "./SupportTeam/SupportTeam";
import CustomerReviews from "./CutomerReviews/CustomerReviews";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Hero />
      <Products />
      <Media />
      <SupportTeam />
      <CustomerReviews />
    </div>
  );
};

export default Home;
