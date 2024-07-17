import styled from "styled-components";
import { Box } from "../../utils";
import Card from "../Card/Card";
import { pyramid } from "../../assets/json/pyramid";

type Foam = {
  name: string;
  density: string;
  size: string;
  image: string[];
  price: string;
  color: string;
  height: string;
};
const Pyramid = () => {
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
