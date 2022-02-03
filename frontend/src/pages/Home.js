import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import SpecialOffer from "../components/SpecialOffer";

const Home = () => {
  return (
    <div>
      <SpecialOffer />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
