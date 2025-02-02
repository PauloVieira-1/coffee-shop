import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/colors.css";
import "../src/styles/global.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";




function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
    </>
  );  
}

export default App; 