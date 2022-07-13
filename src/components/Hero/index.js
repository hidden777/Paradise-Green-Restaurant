import React, {useState} from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroItems,
  HeroBtn,
  HeroH1,
  HeroP,
  HeroContent
} from "./HeroElements";

const Hero = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Paradise Green Restaurant</HeroH1>
          <HeroP>Online Services Available!</HeroP>
          <HeroBtn>Order Online!</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
