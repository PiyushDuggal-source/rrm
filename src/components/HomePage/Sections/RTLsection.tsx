import React from "react";
import styled from "styled-components";
import { Box, H1, Img } from "../../../utils";

const RTLsection = () => {
  return (
    <>
      <Section id="2.0inch">
        <Section2>
          <SecImg src="https://i.ibb.co/D79rDCW/egg.jpg"></SecImg>
        </Section2>
        <Section1>
          <Container>
            <Heading>Transform your Brand</Heading>
            <>
              we are full-service creative agency specializing in helping brands
              grow fast. Engage your client through compelling visual that do
              most of the marketing for you.
            </>
          </Container>
        </Section1>
      </Section>
    </>
  );
};

const Section = styled(Box)`
  display: flex;
  flex: 1;
  height: 500px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;
const Section1 = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 600px) {
    padding: 3.5rem 0;
  }
`;

const Container = styled(Box)`
  width: 70%;
`;

const SecImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Section2 = styled(Box)`
  display: flex;
  flex: 1;
`;

const Heading = styled(H1)``;
export default RTLsection;
