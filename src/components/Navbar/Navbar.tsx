import styled from "styled-components";
import { Box, Img } from "../../utils";
import Logo from "../../assets/images/mainLogo.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);
  return (
    <Nav>
      <Link to="/">
        <LogoImg src={Logo}></LogoImg>
      </Link>
      <Box className="itemSelector">
        <Box className="inchFoams">
          <Box
            onClick={() => {
              window.location.href = "#1.5inch";
            }}
            className="hoverBorder foam"
          >
            1.5 Inch Foams
          </Box>
          <Box
            className="hoverBorder foam"
            onClick={() => {
              window.location.href = "#2.0inch";
            }}
          >
            2.0 Inch Foams
          </Box>
        </Box>
        <Box className="designs">
          <Box className="hoverBorder design">Pyramid</Box>
          <Box className="hoverBorder design">Turbo</Box>
          <Box className="hoverBorder design">Wedge</Box>
          <Box className="hoverBorder design">Egg</Box>
        </Box>
      </Box>
      <Box>
        <NavItems>
          <Link className="hoverBorder navItems" to="/">
            Home
          </Link>
          <Link className="hoverBorder navItems" to="/about">
            About
          </Link>
          <Link className="hoverBorder navItems" to="/contact">
            Contact
          </Link>
        </NavItems>
      </Box>
    </Nav>
  );
};

const Nav = styled(Box)`
  width: 100%;
  display: flex;
  font-weight: 400;
  background-color: #000000;
  align-items: center;
  padding: 0 2rem;
  font-size: 24px;
  justify-content: space-between;
  height: 160px;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0 0 1rem 0;
    height: 240px;
  }
  .itemSelector {
    display: flex;
    flex-direction: column;
    align-items: center;

    .inchFoams {
      display: grid;
    }
    .designs {
      display: flex;
    }

    .design {
      margin: 0 1rem;
      font-size: 20px;
      color: #d8d8d8;
    }

    @media (max-width: 600px) {
      .inchFoams,
      .designs {
        margin-bottom: 10px;
      }
      .design {
        margin: 0 0.5rem;
        font-size: 16px;
      }
    }
  }

  .bg-dark > * {
    color: #d8d8d8;
  }

  .foam {
    color: #d8d8d8;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }

  @media (min-width: 600px) {
    .inchFoams {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem;
    }
  }
  /* 
    @media (max-width: 300px) {
      .inchFoams {
        font-size: 16px;
      }
    }
  } */
`;

const LogoImg = styled(Img)`
  width: 180px;
  border-radius: 50%;
  @media (max-width: 700px) {
    width: 95px;
  }
`;
const NavItems = styled(Box)`
  color: #d8d8d8;
  display: flex;
  justify-content: space-between;

  .navItems {
    margin: 0 1rem;
    font-size: 24px;
    text-decoration: none;
    color: #dddada;
    font-weight: 800;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export default Navbar;
