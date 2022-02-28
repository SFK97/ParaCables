import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PopularProducts from "../components/PopularProducts";
import Slider from "../components/Slider";
import SpecialOffer from "../components/SpecialOffer";

const Home = () => {
  return (
    <div>
      <SpecialOffer />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
