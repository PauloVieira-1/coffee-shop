import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/colors.css";
import "../src/styles/global.css";
import { Routes, Route } from "react-router-dom";
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


const stripePromise = loadStripe('pk_test_51QsRhPFb6wjMdquvTpSk3zcc0QmBsfpgFj93vYigON7NbdTQiGxNFVXRGpDMocPA6nHE4dayUS3Nrgly5a9g55u4005hIKHfTg');

function App() {
  const [clientSecret, setClientSecret] = useState(null); 
  const [total, setTotal]  = useState(0);

  const getTotal = (amount) => {
    setTotal(amount)
  } 

  const options = {
    clientSecret: clientSecret,
    appearance: {
      theme: "stripe",
    },
    loader: "auto",
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:80/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total > 1 ? total : 1 }),
    })
      .then((res) => res.json())
      .then((data) => {setClientSecret(data.clientSecret) 
        console.log(data.clientSecret)
      });
  }, []);


  if(!clientSecret){
    return <div>Loading...</div>
  }

  return (
    <>
    <Elements stripe={stripePromise} options={options}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart getTotal={getTotal}/>} />
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
