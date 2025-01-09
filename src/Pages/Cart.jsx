import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartElement from "../components/Cart/cartElement";
import { useEffect, useState } from "react";

function Cart() {


    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartStored = JSON.parse(localStorage.getItem("CoffeCart")) || [];
        setCart(cartStored);
        console.log(cart);
    }, []);


    return (
        <Container className="my-5">
             <Row>
                <div className="pb-3">
                    <h2>
                        Cart
                    </h2>
                </div>
                <Col>
                    <Card>
                      <h1 className="fw-bold mt-3 mb-2 mx-3">Total</h1>
                      <h4 className="fw-light mx-3 mt-1 mb-3">{}</h4>
                      <div className="m-3">
                      <Link to="/checkout">
                      <Button>Checkout</Button>
                      </Link>
                      </div>
                    </Card>
                </Col>
                <Col xs={12} lg={7}>
                    {cart.map((item) => {
                        return (
                            <CartElement key={item.name} name={item.name} count={item.count} />
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default Cart