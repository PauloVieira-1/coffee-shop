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
import { useEffect, useState, useRef } from "react";
import AvailableCoffees from "./components/CoffeeCard/AvailableCoffees.js";

function App() {
  const [total, setTotal] = useState(1);
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
      setTotal(calculateTotal());
    }
  }, []);

  useEffect(() => {
    setTotal(calculateTotal());
  }, [cart]);

  const calculateTotal = () => {
    let totalAmount =
      cart?.reduce((amount, item) => {
        return amount + AvailableCoffees[item.name].price * item.count;
      }, 0) || 0;
    setTotal(totalAmount);
    return totalAmount;
  };

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
          item.name === name ? { ...item, count: item.count + 1 } : item
        )
      : [...cart, { name: name, count: 1 }];
    localStorage.setItem("CoffeeCart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const removeSingleItem = (name) => {
    const existingItem = cart && cart.find((item) => item.name === name);
    const newCart = existingItem
      ? cart.map((item) =>
          item.name === name ? { ...item, count: item.count - 1 } : item
        )
      : [...cart, { name: name, count: 1 }];
    localStorage.setItem("CoffeeCart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const emptyCart = () => {
    localStorage.removeItem("CoffeeCart");
    setCart([]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <Cart
              total={total}
              setTotal={setTotal}
              cart={cart}
              setCart={setCart}
              removeItem={removeItem}
              addItem={addItem}
              animations={animations}
              removeSingleItem={removeSingleItem}
              emptyCart={emptyCart}
            />
          }
        />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/shop" element={<Shop addItem={addItem} />} />
        <Route path="/success" element={<Success />} />
        <Route path="/checkout" element={<CheckoutForm cart={cart} total={total} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
