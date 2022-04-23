import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Foam = {
  prop: {
    name: string;
    image: string;
    info: string;
  };
};

export default function ImgMediaCard(prop: Foam) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={prop.prop.image}
      />
      <CardContent sx={{ color: "#fff ", bgcolor: "red" }}>
        <Typography gutterBottom variant="h5" component="div">
          {prop.prop.name}
        </Typography>
        <Typography
          sx={{ color: "#fff " }}
          variant="body2"
          color="text.secondary"
        >
          <ul>
            <li>Size</li>
            <li>Size</li>
            <li>Size</li>
            <li>Size</li>
          </ul>
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
