import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Pyramid from "./components/CardPages/Pyramid";
import { styled } from "@mui/material";
import { Box } from "./utils";
import Trubo from "./components/CardPages/Turbo";
import backdrop from "./assets/images/backdrop.webp"
function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="pyramid" element={<Pyramid />} />
      </Routes>
      <Routes>
        <Route path="turbo" element={<Trubo />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled(Box)`
  background-attachment: fixed;
  background-image: url(${ backdrop });
  /* background-image: url("https://media.istockphoto.com/photos/foam-soundproofing-coating-closeup-recording-studio-details-picture-id1082736700?k=20&m=1082736700&s=612x612&w=0&h=h8hye07lhZcMxKxCKy9DiXuTa7VsnH2lVg9SXv0wIws="); */
  /* background-image: url("https://w0.peakpx.com/wallpaper/102/250/HD-wallpaper-soundproofing-material-texture-soundproof-wall-texture-acoustic-wall-acoustic-panels-soundproofing-material-foam-soundproof-panels-foam-rubber-texture.jpg"); */
  /* backdrop-filter: blur(5px); */
  /* background-color: #a0332b; */
  /* background-size: 100%; */
  background-color: rgba(255, 255, 255, 0.2);
`;
export default App;
