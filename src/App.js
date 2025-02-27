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
import { useEffect, useState, useRef } from "react";
import AvailableCoffees from "./components/CoffeeCard/AvailableCoffees.js";


const stripePromise = loadStripe('pk_test_51QsRhPFb6wjMdquvTpSk3zcc0QmBsfpgFj93vYigON7NbdTQiGxNFVXRGpDMocPA6nHE4dayUS3Nrgly5a9g55u4005hIKHfTg');

function App() {
  
  const [clientSecret, setClientSecret] = useState(null); 
  const [total, setTotal]  = useState(1);
  const [cart, setCart] = useState([]);
  const [animations, setAnimations] = useState(true);

  const hasMounted = useRef(false);

  useEffect(() => {

    if (!hasMounted.current) {
      hasMounted.current = true;
    } else {
      setAnimations(false);
    }
  }, []);


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("CoffeeCart"));

    if (storedCart) {
      setCart(storedCart);
      setTotal(calculateTotal())
    }
  }, []);

  useEffect(() => {
    setTotal(calculateTotal());
  }, [cart]);

  const calculateTotal = () => {
    let totalAmount = cart?.reduce((amount, item) => {
      return amount + AvailableCoffees[item.name].price * item.count;
    }, 0) || 1;
    setTotal(totalAmount);
    return totalAmount;
  };

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
  }, [cart, total]);

  // const updateItem = (name, operation) => {
  //   // const newCart = cart.map((item) =>
  //   //   item.name === name ? { ...item, count: operation === "increment" ? item.count + 1 : item.count - 1 } : item,
  //   // );
  //   // localStorage.setItem("CoffeeCart", JSON.stringify(newCart));
  //   // setTotal(calculateTotal());
  // };

  // const incrementTotal = (name) => updateItem(name, "increment");
  // const decrementTotal = (name) => updateItem(name, "decrement");

  const removeItem = (coffee) => {
    const filtered = cart.filter((item) => item.name !== coffee);
    localStorage.setItem("CoffeeCart", JSON.stringify(filtered));
    setCart(filtered);
    setTotal(calculateTotal());
  };

  const addItem = (name) => {
    const ExistingItem = cart ? cart.find((item) => item.name === name) : false;

    const newCart = ExistingItem
      ? cart.map((item) =>
          item.name === name ? { ...item, count: item.count + 1 } : item,
        )
      : [...cart, { name: name, count: 1 }];
    localStorage.setItem("CoffeeCart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const removeSingleItem = (name) => {
    const existingItem = cart && cart.find((item) => item.name === name);

    const newCart = existingItem
      ? cart.map((item) =>
          item.name === name ? { ...item, count: item.count - 1 } : item,
        )
      : [...cart, { name: name, count: 1 }];
    localStorage.setItem("CoffeeCart", JSON.stringify(newCart));
    setCart(newCart);

  }
  const emptyCart = () => {
    localStorage.removeItem("CoffeeCart");
    setCart([]);
  };
  
  
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


  let options = {
    clientSecret: clientSecret,
    appearance: {
      theme: "stripe",
    },
    loader: "auto",
  };

  return (
    <>
    <Elements stripe={stripePromise} options={options} key={clientSecret}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart total={total} setTotal={setTotal} cart={cart} setCart={setCart} removeItem={removeItem} addItem={addItem} animations={animations} removeSingleItem={removeSingleItem} emptyCart={emptyCart}/>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/shop" element={<Shop addItem={addItem} />} />
        <Route path="/success" element={<Success />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
      <Footer />
    </Elements>
    </>
  );
}

export default App;
