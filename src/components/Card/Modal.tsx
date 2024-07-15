import styled from "styled-components";
import { Box } from "../../utils";
import { Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

type Foam = {
  name: string;
  density: string;
  size: string;
  image: string[];
  price: string;
  color: string;
  height: string;
};

export default function Modal(props: { foam: Foam, onclose: Function})  {
  return (
    <Bg>
      <Container>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            }
          }}
          modules={[Pagination, Autoplay]}
          loop
          style={{
            height: "100%",
            width: "50%",
            overflow: "hidden",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        >
          {props.foam.image.map((img) => (
            <SwiperSlide>
              <img 
                alt={ props.foam.name } 
                src={ img }
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
          <h4>{ props.foam.name }</h4>
          <h3>&#8377;{  props.foam.price }</h3>
          <div>Size &nbsp;&nbsp;&nbsp;: &nbsp;{ props.foam.size}</div>
          <div>Height &nbsp;: { props.foam.height}</div>
          <div>Density : { props.foam.density}</div>
          <div>Color &nbsp;&nbsp;: { props.foam.color}</div>
          <div
            style={{ display: "flex", justifyContent: "center", cursor: "pointer", paddingTop: "24px"}}
          >
            <Button style={{ color: "#fff ", height: '40px', width : '400px', background : "red", border: "0"}}>
              Buy Now
            </Button>
          </div>
        </Section>
        <Button onClick={ ()=>{ props.onclose() } }
          style={{background: "transparent", border: "0", fontSize: "48px", position: "absolute", top: "0", right: "0"}}
        > <IoClose/> </Button>
      </Container>
    </Bg>
  )
};

const Bg = styled(Box)`
  width: 100vw;
  height: 100vh; 
  background: rgba(0,0,0,0.7); 
  position: fixed;
  top: 0;
  left: 0; 
  z-index:100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Box)`
  width: 60vw;
  height: 75vh;
  background: black; 
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 0px 40px rgba(255,0,0,1);
  position: relative;
  color: white;
`;

const Section = styled(Box)`
  position: absolute;
  top: 0;
  left: 50%;
  color: white;
  padding: 24px;
  padding-top: 20vh;
`;