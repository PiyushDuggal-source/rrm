import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Pyramid from "./components/CardPages/Pyramid";
import Trubo from "./components/CardPages/Turbo";
import backdrop from "./assets/images/backdrop.webp";
function App() {
  return (
    <div
      className="bg-fixed bg-[rgba(255,255,255,0.2)]"
      style={{ backgroundImage: `url(${backdrop})` }}
    >
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
    </div>
  );
}

export default App;
