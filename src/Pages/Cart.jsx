import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartElement from "../components/Cart/cartElement";
import { useEffect, useState } from "react";
import CoffeeAvailable from "../components/CoffeeCard/AvailableCoffees";
import EmptyCart from "./EmptyCart.jsx";
import Background1 from "../assets/unsplash1.jpg";
import Background2 from "../assets/unsplash2.jpg";
import Background3 from "../assets/unsplash3.jpg";
import Background4 from "../assets/unsplash4.jpg";

function Cart({ total, setTotal, cart, setCart, incrementTotal, decrementTotal, removeItem}) {

  const renderedCart = (
    <div>
      {cart.map((item) => {
        return (
          <CartElement
            key={item.name}
            name={item.name}
            quantity={item.count}
            image={CoffeeAvailable[item.name].img}
            price={CoffeeAvailable[item.name].price}
            remove={removeItem}
            incrementTotal={incrementTotal}
            decrementTotal={decrementTotal}
          />
        );
      })}
    </div>
  );

  const EmptyCartComponent = <EmptyCart />;

  return (
    <>
      <img
        src={Background1}
        className="img-fluid transition-top"
        style={{ width: "100%", height: "60vh", objectFit: "cover" }}
      ></img>
      <Container className="my-5">
        <Row>
          <div className="pb-3">
            <h2>Shopping Cart</h2>
            <hr></hr>
          </div>
          <Col>
            <Card className="bg-temp2">
              <h1 className="fw-bold mt-3 mb-2 mx-3">Total</h1>
              <h4 className="fw-light mx-3 mt-1 mb-3"> {total}</h4>
              <div className="m-3">
                <Link to="/checkout">
                  <Button className="text-white" >Checkout</Button>
                </Link>
              </div>
            </Card>
          </Col>
          <Col xs={12} lg={7}>
            {cart.length > 0 ? renderedCart : EmptyCartComponent}
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h1> </h1>
      </Container>
    </>
  );
}

export default Cart;
