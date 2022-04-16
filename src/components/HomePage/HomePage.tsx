import React from "react";
import HeroImgCrousel from "./HeroImgCrousel/HeroImgCrousel";
import LTRsection from "./Sections/LTRsection";
import RTLsection from "./Sections/RTLsection";
const HomePage = () => {
  return (
    <>
      <HeroImgCrousel />
      <LTRsection />
      <RTLsection />
    </>
  );
};

export default HomePage;
