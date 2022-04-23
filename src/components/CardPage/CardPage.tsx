import React from "react";
import styled from "styled-components";
import { Box } from "../../utils";
import Card from "../Card/Card";

const CardPage = () => {
  return (
    <CardContainer>
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
      <Card
        prop={{
          name: "1inch",
          image: "https://mui.com/static/images/cards/paella.jpg",
          info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        }}
      />
    </CardContainer>
  );
};

const CardContainer = styled(Box)`
  display: grid;
  padding: 2rem;
  grid-gap: 2rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default CardPage;
