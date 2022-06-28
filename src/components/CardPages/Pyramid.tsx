import styled from "styled-components";
import { Box } from "../../utils";
import Card from "../Card/Card";
import { pyramid } from "../../assets/json/pyramid";

type Foam = {
  name: string;
  density: string;
  size: string;
  imageM: string;
  price: string;
  color: string;
  height: string;
  imageW: string;
};
const Pyramid = () => {
  console.log(pyramid);
  return (
    <CardContainer>
      {pyramid.map((ele: Foam, key: any) => {
        return <Card key={key} prop={ele} />;
      })}
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

export default Pyramid;
