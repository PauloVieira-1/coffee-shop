import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/colors.css";
import "../src/styles/global.css";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import Cart from "./Pages/Cart.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Shop from "./Pages/Shop.jsx";
import Success from "./Pages/Success.jsx";
import CheckoutForm from "./Pages/Checkout.jsx";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useEffect, useState } from "react";
import AvailableCoffees from "./components/CoffeeCard/AvailableCoffees.js";


const stripePromise = loadStripe('pk_test_51QsRhPFb6wjMdquvTpSk3zcc0QmBsfpgFj93vYigON7NbdTQiGxNFVXRGpDMocPA6nHE4dayUS3Nrgly5a9g55u4005hIKHfTg');

function App() {
  const [clientSecret, setClientSecret] = useState(null); 
  const [total, setTotal]  = useState(1);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("CoffeCart"));

    if (storedCart) {
      setCart(storedCart);
      let totalAmount = storedCart?.reduce((amount, item) => {
        return amount + AvailableCoffees[item.name].price * item.count;
      }, 0) || 3 * 100;
      setTotal(totalAmount);
    }
  }, []);

  useEffect(() => {
    fetch("http://localhost:80/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total * 100 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [total]); //
  
  
  
  if (!clientSecret) {
    return (
      <Container className="d-flex flex-column justify-content-center align-items-center h-100 mt-3 p-3" style={{ height: "100vh" }}>
        <Row className="d-flex flex-column align-items-center justify-content-center h-100">
          <h1 className="text-center fw-bold">Dutch Pearl Coffee</h1>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      </Container>
    );
  }


  const options = {
    clientSecret: clientSecret,
    appearance: {
      theme: "stripe",
    },
    loader: "auto",
  };

  return (
    <>
    <Elements stripe={stripePromise} options={options}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/success" element={<Success />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
      <Footer />
    </Elements>
    </>
  );
}

export default App;
