"use client"
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import ImgBg from "../../public/images/grilledchicken.jpg"; 

import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./HeroStyle";

const Hero = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false); 

  const toggle = () => {
    setIsOpened(!isOpened);
    console.log(isOpened);
  };
  // const bgImage = ImgBg.src;
  return (
    <HeroContainer >
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpened} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Eats Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero
