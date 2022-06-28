import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, H1, Img } from "../../../utils";
import { SectionType } from "./LTRsection";

const RTLsection = (prop: SectionType) => {
  return (
    <>
      <Section id="2.0inch">
        <Section2>
          <SecImg src={prop.img}></SecImg>
        </Section2>
        <Section1>
          <Container>
            <Heading>{prop.heading}</Heading>
            <>{prop.body}</>
            <Box className="button">
              <Link to={prop.link}>
                Check It Out{" "}
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </Link>
            </Box>
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
  color: #fff;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
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

// const Container = styled(Box)`
//   width: 70%;
//   font-size: 18px;
//   .button {
//     margin: 1rem 0;
//     font-size: 25px;
//     transition: transform 250ms ease-in-out;
//   }
//   .button > * {
//     color: #fff;
//   }

//   .button:hover {
//     transform: scale(1.05);
//   }
// `;
const Container = styled(Box)`
  width: 70%;
  font-size: 18px;
  .button {
    margin: 4rem 0 1rem 0;
    font-size: 25px;
    transition: transform 250ms ease-in-out;
  }
  .button > * {
    border-radius: 4px;
    border: 2px solid #fff;
    background-color: red;
    padding: 8px 14px;
    text-decoration: none;
    color: #fff;
  }
  .button_m {
    margin: 15px 10px 10px 0;
  }
  .button_m > * {
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 18px;
    color: #fff;
    background-color: red;
    border: 2px solid #fff;
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
export default RTLsection;
