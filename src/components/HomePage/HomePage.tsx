import React from "react";
import HeroImgCrousel from "./HeroImgCrousel/HeroImgCrousel";
import LTRsection from "./Sections/LTRsection";
import Pyramid from "../../assets/images/Pyramid.jpg";
import Wedge from "../../assets/images/wedge.jpg";
import BassTrap from "../../assets/images/bass-trap.jpg";
import Turbo from "../../assets/images/turbo.jpg";
import RTLsection from "./Sections/RTLsection";
const HomePage = () => {
  return (
    <>
      <HeroImgCrousel />
      <LTRsection
        heading={"All Pyramid Foams"}
        body={
          "lorem ipsom dolor sit, jdfd kdfj fefeaflkj sf askfe fj sdlfkj e fsef"
        }
        link={"/pyramid"}
        // img={
        //   "https://www.auralexchange.com/wp-content/uploads/2018/08/NeoMax6x3_1.jpg"
        // }
        img={Pyramid}
      />
      <RTLsection
        heading={"Turbo Foams"}
        body={
          "lorem ipsom dolor sit, jdfd kdfj fefeaflkj sf askfe fj sdlfkj e fsef"
        }
        link={"/pyramid"}
        img={
          "https://cdn.shopify.com/s/files/1/0067/8078/0634/products/TurboXW_5154ce3e-7bc8-4e1d-a17c-b1d85f515839_900x.jpg?v=1624342298"
        }
        // img={Turbo}
      />
      <LTRsection
        heading={"Wedge Foams"}
        body={
          "lorem ipsom dolor sit, jdfd kdfj fefeaflkj sf askfe fj sdlfkj e fsef"
        }
        link={""}
        img={
          "https://cdn.shopify.com/s/files/1/1304/2531/products/Acoustic_Wedge_Foam_1445x.jpg?v=1592018927"
        }
        // img={Wedge}
      />
      <RTLsection
        heading={"Bass Traps"}
        body={
          "lorem ipsom dolor sit, jdfd kdfj fefeaflkj sf askfe fj sdlfkj e fsef"
        }
        link={""}
        img={
          "https://cdn.shopify.com/s/files/1/0250/1767/9951/products/6ccf07e3dfaf6f24d43bb3a5d885c2b7_1285x.jpg?v=1604580320"
        }
        // img={BassTrap}
      />
    </>
  );
};

export default HomePage;
