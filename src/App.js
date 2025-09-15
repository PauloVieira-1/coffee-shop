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
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [animations, setAnimations] = useState(true);

  const hasMounted = useRef(false);

  // Handle animation disabling after first mount
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
    } else {
      setAnimations(false);
    }
  }, []);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("CoffeeCart"));
    if (storedCart) {
      setCart(storedCart);
      setTotal(calculateTotal(storedCart));
    }
  }, []);

  // Recalculate total whenever cart changes
  useEffect(() => {
    setTotal(calculateTotal(cart));
  }, [cart]);

  // Calculate total from a cart array
  const calculateTotal = (cartArray = cart) => {
    return (
      cartArray?.reduce((amount, item) => {
        return amount + AvailableCoffees[item.name].price * item.count;
      }, 0) || 0
    );
  };

  // Add one of an item
  const addItem = (name) => {
    const existingItem = cart.find((item) => item.name === name);
    const newCart = existingItem
      ? cart.map((item) =>
          item.name === name ? { ...item, count: item.count + 1 } : item
        )
      : [...cart, { name, count: 1 }];

    localStorage.setItem("CoffeeCart", JSON.stringify(newCart));
    setCart(newCart);
  };

  // Remove all of a single item
  const removeItem = (coffee) => {
    const filtered = cart.filter((item) => item.name !== coffee);
    localStorage.setItem("CoffeeCart", JSON.stringify(filtered));
    setCart(filtered);
  };

  // Remove a single quantity of an item
  const removeSingleItem = (name) => {
    const newCart = cart
      .map((item) =>
        item.name === name ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0); // removes items that hit 0 count
    localStorage.setItem("CoffeeCart", JSON.stringify(newCart));
    setCart(newCart);
  };

  // Empty entire cart
  const emptyCart = () => {
    localStorage.removeItem("CoffeeCart");
    setCart([]);
  };

  return (
    <>
      <Navbar cart={cart} /> {/* You could pass cart to display count in Nav */}
      <Routes>
      <Route path="/" element={<Home addItem={addItem} />} />
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
        <Route
          path="/checkout"
          element={<CheckoutForm cart={cart} total={total} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
