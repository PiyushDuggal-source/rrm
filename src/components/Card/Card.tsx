import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMatchMedia from "../../hooks/useMatchMedia";

export type Foam = {
  prop: {
    name: string;
    imageM: string;
    density: string;
    size: string;
    price: string;
    color: string;
    height: string;
    imageW: string;
  };
};

export default function ImgMediaCard(prop: Foam) {
  const toggle600 = useMatchMedia();
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        src={toggle600 ? prop.prop.imageM : prop.prop.imageW}
      />
      <CardContent
        sx={{
          color: "#fff ",
          bgcolor: "red",
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
            color: "#fff ",
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
            <p style={{ fontSize: 20 }}>{`Price : ${prop.prop.price}`}</p>
          </div>
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", bgcolor: "red" }}
      >
        <Button sx={{ color: "#fff " }} size="medium">
          Buy Now!
        </Button>
      </CardActions>
    </Card>
  );
}
