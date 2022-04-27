import styled from "styled-components";
import { Box, Img } from "../../utils";
import Logo from "../../assets/images/mainLogo.png";
import { Link } from "react-router-dom";
import useMatchMedia from "../../hooks/useMatchMedia";

const Footer = () => {
  const toggle600 = useMatchMedia();
  return (
    <>
      <MainFooter>
        <Footer1 style={toggle600 ? {} : { marginLeft: -80, marginRight: 80 }}>
          <LogoImg src={Logo}></LogoImg>
          <Name>RRM Acoustic Foams</Name>
        </Footer1>

        <Footer1 style={{ marginBottom: 30 }}>
          <FooterHeading>Explore</FooterHeading>
          <Container>
            <Link className="link hoverBorder" to="/">
              1.5 Inch
            </Link>
            <Link className="link hoverBorder" to="/">
              Turbo
            </Link>
            <Link className="link hoverBorder" to="/about">
              2.0 Inch
            </Link>
          </Container>
        </Footer1>

        <Footer1 style={toggle600 ? { marginBottom: 30 } : {}}>
          <FooterHeading>Products</FooterHeading>

          <Container>
            <Link className="link hoverBorder" to="/">
              Pyramid
            </Link>
            <Link className="link hoverBorder" to="/">
              Turbo
            </Link>
            <Link className="link hoverBorder" to="/">
              Wedge
            </Link>
            <Link className="link hoverBorder" to="/">
              Egg
            </Link>
          </Container>
        </Footer1>

        <Footer1 style={{ marginBottom: 30 }}>
          <FooterHeading>Places</FooterHeading>
          <Container>
            <Link className="link hoverBorder" to="/">
              Home
            </Link>
            <Link className="link hoverBorder" to="/about">
              About
            </Link>
            <Link className="link hoverBorder" to="/contact">
              Contact
            </Link>
          </Container>
        </Footer1>
      </MainFooter>
    </>
  );
};

const MainFooter = styled(Box)`
  display: flex;
  color: #fff;
  width: 100%;
  letter-spacing: 2px;
  height: 350px;
  justify-content: space-evenly;
  background-color: #000000;
  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

const Footer1 = styled(Box)`
  display: flex;
  flex-direction: column;
  font-family: "Roboto Slab", serif;

  justify-content: center;
  align-items: center;

  .link {
    text-decoration: none;
    font-size: 20px;
    color: #fff;
  }

  @media (max-width: 600px) {
    .link {
      margin: 0 0.5rem;
      font-size: 16px;
    }
  }
`;

// const Vert = styled(Box)`
//   border-left: 1px dashed #fff;
//   height: 300px;
//   margin-top: 25px;
// `;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: row;
  }
`;

const Name = styled(Box)`
  margin-top: -45px;
  margin-bottom: 60px;
  font-family: "Deutsch-Gotisch Heavy", sans-serif;
  font-family: "Deutsch-Gotisch Outline", sans-serif;
  font-family: "Deutsch-Gotisch Shadow", sans-serif;
  font-family: "Deutsch-Gotisch", sans-serif;

  font-size: 35px;

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const FooterHeading = styled(Box)`
  font-size: 30px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

const LogoImg = styled(Img)`
  width: 180px;
  margin: 2rem;
  border-radius: 50%;
  @media (max-width: 700px) {
    width: 180px;
    margin: 1rem 2rem 2rem 2rem;
  }
`;

export default Footer;
