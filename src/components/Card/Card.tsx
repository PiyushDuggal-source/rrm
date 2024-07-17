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
import { Pagination } from "swiper/modules";
import Modal from "./Modal";
import { Foam } from "../../types";

type Props = {
  prop: Foam;
};

export default function ImgMediaCard({ prop }: Props) {
  const toggle600 = useMatchMedia();

  const [showModal, setShowModal] = useState(false);

  return (
    <Card sx={{ width: "100%", background: "transparent" }}>
      <Swiper
        spaceBetween={50}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination]}
        loop
      >
        {prop.images.map((img, index) => (
          <SwiperSlide key={index}>
            <CardMedia component="img" alt="green iguana" src={img} />
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
          {prop.name}
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
            <p>Size &nbsp;&nbsp;&nbsp;: &nbsp;{prop.size}</p>
            <p>Height &nbsp;: {prop.height}</p>
            <p>Density : {prop.density}</p>
            <p>Color &nbsp;&nbsp;: {prop.color}</p>
            <p style={{ fontSize: 20 }}>Price : &#8377;{prop.price}</p>
          </div>
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "rgba(255, 0, 0, 0.7)",
          cursor: "pointer",
        }}
      >
        <Button
          sx={{ color: "#fff ", height: "40px", width: "400px" }}
          size="large"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Buy Now
        </Button>
      </CardActions>
      {showModal ? (
        <Modal {...{ foam: prop, onclose: setShowModal }}></Modal>
      ) : (
        <></>
      )}
    </Card>
  );
}
