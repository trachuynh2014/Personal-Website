import React, { useState } from "react";
import Sidebar from "./../components/Sidebar/index";
import Navbar from "./../components/Navbar/index";
import HeroSection from "./../components/HeroSection/index";
import InfoSection from "./../components/InfoSection/index";
import { homeObjOne, homeObjTwo } from "./../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "./../components/Footer/index";
import Contact from "./../components/Contact/index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <Contact {...homeObjTwo} />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
