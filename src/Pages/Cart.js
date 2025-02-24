import { Container, Row, Col } from "react-bootstrap";
import CartElement from "../CartElement/CartElement";
import ImageTest from "../../assets/jpeg/simplisticbg.jpeg";
import { useContext, useEffect, useState } from "react";
import { ProductsAvailable } from "../Shop/ProductsAvailable";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Cart from "../assets/cart4.svg";

function Cart() {
  const [total, setTotal] = useState(0);
  const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  const [cart, setCart] = useState(getCart());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setTotal(totalAmount(cart));
  }, [cart]);

  const HandleRemoveItem = (title) => {
    const filtered = cart.filter((item) => item.name !== title);

    localStorage.setItem("cart", JSON.stringify(filtered));
    setCart(filtered);
  };

  function totalAmount(cart) {
    return cart.reduce(
      (sum, item) => sum + item.count * ProductsAvailable[item.name].price,
      0,
    );
  }

  const cartRender = cart.map((item, index) => (
    <CartElement
      key={index}
      image={ProductsAvailable[item.name].image}
      title={ProductsAvailable[item.name].title}
      description={ProductsAvailable[item.name].description}
      price={ProductsAvailable[item.name].price}
      quantity={item.count}
      removeItem={HandleRemoveItem}
    />
  ));

  const emptyCart = (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={Cart} alt="empty cart" style={{ width: "200px" }} />
      <h2 className="fw-bold">Your cart is empty</h2>
      <p className="fw-light">Add some items to your cart</p>
    </div>
  );

  return (
    <>
      <Container>
        <h1>TEST</h1>
      </Container>
      <Container className="my-5">
        <Row>
          <div className="pb-3">
            <h2>Shopping Cart</h2>
          </div>
          <Col xs={12} lg={7}>
            {cart.length === 0 ? emptyCart : cartRender}
          </Col>
          <Col>
            <Card>
              <h1 className="fw-bold mt-3 mb-2 mx-3">Total</h1>
              <h4 className="fw-light mx-3 mt-1 mb-3">{total}</h4>
              <div className="m-3">
                <Link to="/checkout">
                  <Button>Checkout</Button>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
