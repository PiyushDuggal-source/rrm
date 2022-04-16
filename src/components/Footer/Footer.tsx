import React from "react";
import styled from "styled-components";
import { Box, H1, H2, Img } from "../../utils";
import Logo from "../../assets/images/mainLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <MainFooter>
        <Footer1 style={{ marginLeft: -80 }}>
          <LogoImg src={Logo}></LogoImg>
          <Name>RRM - Acoustic Foams</Name>
        </Footer1>
        <Vert />
        <Footer1 style={{ marginBottom: 40 }}>
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
        <Vert />

        <Footer1>
          <FooterHeading>Find</FooterHeading>

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
        <Vert></Vert>
        <Footer1 style={{ marginBottom: 40 }}>
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
  justify-content: center;
  align-items: center;

  .link {
    text-decoration: none;
    font-size: 22px;
    color: #fff;
  }
`;

const Vert = styled(Box)`
  border-left: 1px dashed #fff;
  height: 300px;
  margin-top: 25px;
`;

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
  margin-bottom: 45px;
  font-size: 35px;
  font-family: "Merienda", cursive;
`;

const FooterHeading = styled(Box)`
  font-size: 50px;
  margin-bottom: 10px;
`;

const LogoImg = styled(Img)`
  width: 180px;
  margin: 2rem;
  border-radius: 50%;
  @media (max-width: 700px) {
    width: 95px;
  }
`;

export default Footer;
