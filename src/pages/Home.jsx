import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import Middle from "../components/middle-section/Middle"
import AboutUs from "../components/About-us/AboutUs"
import Sites from "../components/Site Card/Sites";
import ChooseUs from "../components/Choose-us/ChooseUs"
import Features from "../components/Feature-section/Features"
import Footer from "../components/Footer/Footer"
const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection/>
      <Middle/>
      <AboutUs/>
      <Sites/>
      <ChooseUs/>
      <Features/>
      
      <Footer/>
    </Fragment>
  );
};

export default Home;
