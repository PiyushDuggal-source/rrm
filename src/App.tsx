import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Pyramid from "./components/CardPages/Pyramid";
import { styled } from "@mui/material";
import { Box } from "./utils";
import Trubo from "./components/CardPages/Turbo";
import backdrop from "./assets/images/backdrop.webp";
function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/pyramid" element={<Pyramid />} />
      </Routes>
      <Routes>
        <Route path="/turbo" element={<Trubo />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled(Box)`
  background-attachment: fixed;
  background-image: url(${backdrop});
  background-color: rgba(255, 255, 255, 0.2);
`;
export default App;
