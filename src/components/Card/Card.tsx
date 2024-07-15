import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMatchMedia from "../../hooks/useMatchMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Modal from "./Modal";

export type Foam = {
  prop: {
    name: string;
    image: string[];
    density: string;
    size: string;
    price: string;
    color: string;
    height: string;
  };
};

export default function ImgMediaCard(prop: Foam) {
  const toggle600 = useMatchMedia();

  let setShowModal:Function;
  let showModal:boolean;
  [showModal, setShowModal] = useState(false);

  return (
    <Card sx={{ width: "100%", background: "transparent"}}>
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
          }
        }}
        modules={[Pagination, Autoplay]}
        loop
      >
        {prop.prop.image.map((img) => (
          <SwiperSlide>
            <CardMedia
              component="img"
              alt="green iguana"
              src={ img }
            />
          </SwiperSlide>
        ))}
        
      </Swiper>
      <CardContent
        sx={{
          color: "#fff ",
          bgcolor: "rgba(255, 0, 0, 0.4)",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          variant="h5"
          component="div"
        >
          {prop.prop.name}
        </Typography>
        <Typography
          fontWeight="bold"
          variant="body2"
          sx={{
            lineHeight: "0.6",
            color: "#fff",
            fontSize: toggle600 ? "14px" : "16px",
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            justifyContent: "center",
            flexDirection: "column",
          }}
          color="text.secondary"
        >
          <div>
            <p>Size &nbsp;&nbsp;&nbsp;: &nbsp;{prop.prop.size}</p>
            <p>Height &nbsp;: {prop.prop.height}</p>
            <p>Density : {prop.prop.density}</p>
            <p>Color &nbsp;&nbsp;: {prop.prop.color}</p>
            <p style={{ fontSize: 20 }}>Price : &#8377;{ prop.prop.price }</p>
          </div>
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", bgcolor: "rgba(255, 0, 0, 0.7)", cursor: "pointer",}}
      >
        <Button sx={{ color: "#fff ", height: '40px', width : '400px'}} size="large" onClick={ () => {setShowModal(true)} }>
          Buy Now
        </Button>
      </CardActions>
      {
        showModal ? <Modal {...{ foam: prop.prop, onclose: setShowModal}}></Modal> : <></>
      }
    </Card>
  );
}
