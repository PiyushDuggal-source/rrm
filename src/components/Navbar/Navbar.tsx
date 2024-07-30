import styled from "styled-components";
import { Box, Img } from "../../utils";
import logo from "../../assets/images/mainLogo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full pb-2 flex flex-col md:flex-row mx-auto bg-black items-center justify-between">
      <Link to="/">
        <img
          src={logo}
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
          alt="logo"
        />
      </Link>
      <div className="flex md:hidden group relative cursor-pointer py-2">
        <select className="z-50 flex w-full flex-col py-2 px-4 text-white bg-black shadow-xl group-hover:visible">
          <option className="my-2 block border-b rounded-md border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Sunday
          </option>

          <option className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Monday
          </option>

          <option className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Tuesday
          </option>

          <option className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Wednesday
          </option>

          <option className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Thursday
          </option>

          <option className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Friday
          </option>

          <option className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Saturday
          </option>
        </select>
      </div>
      <div className="hidden md:flex items-center gap-2 text-white">
        <Link className="" to="/pyramid">
          <span className="hoverBorder">Pyramid Acoustic Foams</span>
        </Link>
        <span className="mx-1">|</span>
        <Link className=" link navItems" to="/turbo">
          <span className="hoverBorder">Turbo</span>
        </Link>
        <span className="mx-1">|</span>
        <Link className=" link navItems" to="/wedge">
          <span className="hoverBorder">Wedge</span>
        </Link>
        <span className="mx-1">|</span>
        <Link className=" link navItems" to="/egg">
          <span className="hoverBorder">Egg</span>
        </Link>
      </div>
      <div>
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
      </div>
    </div>
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

  .link {
    text-decoration: none;
  }
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
