import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import CardPage from "./components/CardPage/CardPage";
import { styled } from "@mui/material";
import { Box } from "./utils";
function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/1.5Inch" element={<CardPage />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled(Box)`
  background-image: url("https://cdnb.artstation.com/p/assets/images/images/022/002/553/large/ian-judson-acoustic-foam-touchup-1.jpg?1573738845");
  background-attachment: fixed;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.2);
`;
export default App;
