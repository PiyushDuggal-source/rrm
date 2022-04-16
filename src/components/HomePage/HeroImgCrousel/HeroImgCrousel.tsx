import React from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import Hero1 from "../../../assets/images/hero1.png";
import Hero2 from "../../../assets/images/hero2.png";
import { useMediaQuery } from "react-responsive";

const HeroImgCrousel = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isMobile ? Hero2 : Hero1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isMobile ? Hero2 : Hero1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isMobile ? Hero2 : Hero1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroImgCrousel;
