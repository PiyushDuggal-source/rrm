import styled from "styled-components";
import { Box, H1, Img } from "../../../utils";
import Foam1 from "../../../assets/images/foam1.jpeg";
import { Link } from "react-router-dom";

const LTRsection = () => {
  return (
    <>
      <Section>
        <Section1 id="1.5inch">
          <Container>
            <Heading>Transform your Brand</Heading>
            <>
              we are full-service creative agency specializing in helping brands
              grow fast. Engage your client through compelling visual that do
              most of the marketing for you.
            </>
            <Box className="button">
              <Link to="/1.5Inch">
                Check It Out{" "}
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </Link>
            </Box>
          </Container>
        </Section1>
        <Section2>
          <SecImg src="https://www.soundproofingtips.com/wp-content/uploads/2019/09/Best-Acoustic-Foam-Panels-Cover-1500.jpg"></SecImg>
        </Section2>
      </Section>
    </>
  );
};

const Section = styled(Box)`
  display: flex;
  flex: 1;
  height: 500px;
  color: #fff;

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
  font-size: 18px;
  .button {
    margin: 1rem 0;
    font-size: 25px;
    transition: transform 250ms ease-in-out;
  }
  .button > * {
    color: #fff;
  }

  .button:hover {
    transform: scale(1.05);
  }
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
export default LTRsection;
