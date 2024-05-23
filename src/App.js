import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Navbar/Footer";
import Navbar from "./Components/Navbar/Nabar";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import Pages from "./Components/Pages/Pages";
import Service from "./Components/Pages/Service";
import Navbartwo from "./Components/Navbar/Navbartwo";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbartwo />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pages" element={<Pages />} />
        <Route path="service" element={<Service />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
