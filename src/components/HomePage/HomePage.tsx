import React from "react";
import HeroImgCrousel from "./HeroImgCrousel/HeroImgCrousel";
import LTRsection from "./Sections/LTRsection";
import pyramid from "../../assets/images/Pyramid.webp";
import Wedge from "../../assets/images/wedge.webp";
import BassTrap from "../../assets/images/bass-trap.webp";
import Turbo from "../../assets/images/turbo.webp";
import RTLsection from "./Sections/RTLsection";
const HomePage = () => {
  return (
    <>
      <HeroImgCrousel />
      <LTRsection
        heading={"All Pyramid Foams"}
        body={
          "lorem ipsom dolor sit, jdfd kdfj fefeaflkj sf askfe fj sdlfkj e fsef"
        }
        link={"/pyramid"}
        // img={
        //   "https://www.auralexchange.com/wp-content/uploads/2018/08/NeoMax6x3_1.jpg"
        // }
        img={pyramid}
      />
      <RTLsection
        heading={"Turbo Foams"}
        body={
          "lorem ipsom dolor sit, jdfd kdfj fefeaflkj sf askfe fj sdlfkj e fsef"
        }
        link={"/pyramid"}
        img={Turbo}
      />
      <LTRsection
        heading={"Wedge Foams"}
        body={
          "lorem ipsom dolor sit, jdfd kdfj fefeaflkj sf askfe fj sdlfkj e fsef"
        }
        link={""}
        img={Wedge}
      />
      <RTLsection
        heading={"Bass Traps"}
        body={
          "lorem ipsom dolor sit, jdfd kdfj fefeaflkj sf askfe fj sdlfkj e fsef"
        }
        link={""}
        img={BassTrap}
      />
    </>
  );
};

export default HomePage;
