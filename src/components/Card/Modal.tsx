import styled from "styled-components";
import { Box } from "../../utils";
import { Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import useMatchMedia from "../../hooks/useMatchMedia";
import { Foam } from "../../types";

export default function Modal(props: { foam: Foam; onclose: Function }) {
  const toggle600 = useMatchMedia();
  return (
    <Bg>
      <Container>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
          }}
          modules={[Pagination, Autoplay]}
          loop
          style={
            toggle600
              ? {
                height: "50%",
                width: "100%",
                overflow: "hidden",
                position: "absolute",
                top: "0",
                left: "0",
              }
              : {
                height: "100%",
                width: "50%",
                overflow: "hidden",
                position: "absolute",
                top: "0",
                left: "0",
              }
          }
        >
          {props.foam.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                alt={props.foam.name}
                src={img}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Section>
          <div
            style={
              toggle600
                ? {}
                : {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(0, -50%)",
                }
            }
          >
            <h4>{props.foam.name}</h4>
            <h3>&#8377;{props.foam.price}</h3>
            <div>Size &nbsp;&nbsp;&nbsp;: &nbsp;{props.foam.size}</div>
            <div>Height &nbsp;: {props.foam.height}</div>
            <div>Density : {props.foam.density}</div>
            <div>Color &nbsp;&nbsp;: {props.foam.color}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                paddingTop: "24px",
              }}
            >
              <Button
                style={
                  toggle600
                    ? {
                      color: "#fff ",
                      height: "40px",
                      width: "100%",
                      background: "red",
                      border: "0",
                    }
                    : {
                      color: "#fff ",
                      height: "40px",
                      width: "400px",
                      background: "red",
                      border: "0",
                    }
                }
              >
                Buy Now
              </Button>
            </div>
          </div>
        </Section>
        <Button
          onClick={() => {
            props.onclose();
          }}
          style={{
            background: "transparent",
            border: "0",
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            fontSize: "48px",
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: "20",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <IoClose />{" "}
        </Button>
      </Container>
    </Bg>
  );
}

const Bg = styled(Box)`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Box)`
  width: 90vw;
  height: 75vh;
  background: black;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 0px 40px rgba(255, 0, 0, 1);
  position: relative;
  color: white;
  @media (min-width: 600px) {
    width: 75vw;
    height: 75vh;
  }

  @media (min-width: 900px) {
    width: 60vw;
    height: 75vh;
  }
`;

const Section = styled(Box)`
  position: absolute;
  top: 50%;
  left: 0;
  color: white;
  padding: 24px;
  padding-top: 24px;
  height: 100%;
  width: 100%;
  @media (min-width: 600px) {
    padding-top: 0;
    top: 0;
    left: 50%;
    width: auto;
  }
`;
