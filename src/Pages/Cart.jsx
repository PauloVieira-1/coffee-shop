import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartElement from "../components/Cart/cartElement";
import { useEffect, useState } from "react";
import CoffeeAvailable from "../components/CoffeeCard/AvailableCoffees";
import EmptyCart from "./EmptyCart.jsx"

const getCart = () => {
  return JSON.parse(localStorage.getItem("CoffeCart")) || [];
}

function Cart() {
  const [cart, setCart] = useState(getCart());
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("CoffeCart", JSON.stringify(cart));
    setTotal(calculateTotal(cart));
  }, [cart, total]);

  /**
   * 
   * @param {Array} cart 
   * @returns {Number} 
   */

  const calculateTotal = (cartCurrent) => {
    let total = cartCurrent.reduce((amount, item) => {
      return amount + CoffeeAvailable[item.name].price * item.count;
    }, 0)
    return total;
  };

  const removeItem = (coffee)  => {
    const filtered = cart.filter((item) =>item.name !== coffee);
    localStorage.setItem("CoffeCart", JSON.stringify(filtered));
    setCart(filtered);
  }

  const renderedCart = 
  <div>
    {cart.map((item) => {
            return (
              <CartElement
                key={item.name}
                name={item.name}
                quantity={item.count}
                image={CoffeeAvailable[item.name].img}
                remove={removeItem}
              />
            );
          })}
  </div>

  const EmptyCartComponent = <EmptyCart />

  return (
    <>
    <Container className="my-5 d-flex justify-content-center">
    </Container>
    <Container className="my-5">
      <Row>
        <div className="pb-3">
          <h2>Shopping Cart</h2>
          <hr></hr>
        </div>
        <Col>
          <Card>
            <h1 className="fw-bold mt-3 mb-2 mx-3">Total</h1>
            <h4 className="fw-light mx-3 mt-1 mb-3">              {total}
            </h4>
            <div className="m-3">
              <Link to="/checkout">
                <Button>Checkout</Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={12} lg={7}>
          {cart.length > 0 ? renderedCart : EmptyCartComponent}
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Cart;
