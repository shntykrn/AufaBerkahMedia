import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./routes/home";
import Services from "./routes/services";
import Coverage from "./routes/services-coverage";
import About from "./routes/about-us";
import Register from "./routes/register";
import Partnership from "./routes/partnership";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@leaflet/dist/leaflet.css";

function App() {
  return (
    <Router>
    <main className="pt-20">
        <Navbar />
    </main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/partnership" element={<Partnership />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
