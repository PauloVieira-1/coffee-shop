import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { forwardRef, useImperativeHandle } from "react";
import Minus from "../../assets/minus.svg";

const CartElement = forwardRef((props, ref) => {

  const [count, setCount] = useState(props.count);

  let cart = JSON.parse(localStorage.getItem("CoffeCart")) || [];


//   useImperativeHandle(ref, () => ({
//     callParentFunction: props.totalIncrement,
//     callParentFunction2: props.totalDecrement,
//   }));

useEffect(() => {
    cart.find((item) => item.name === props.name).count = count;
    localStorage.setItem("CoffeCart", JSON.stringify(cart));
  }, [count, props.title, cart]);

const handleIncrement = () => {
    cart.find((item) => item.name, props.title).count += 1;
    setCount(count + 1);
}

const handleDecrement = () => {
    if (count > 1){
        cart.find((item) => item.name, props.title).count -= 1;
        setCount(count - 1);
    }
}



  return (
    <Container className="bg-custom-color-grey py-3 px-3 rounded-4 mb-3 img-effect border image-container">
      <Row>
        <Col xs={12} md={3
        }>
          <img
            alt=""
            src={props.image}
            className="img-fluid rounded-3 border"
            style={{
              height: "100%",
              minWidth: "100%",
              maxHeight: "160px",
              objectFit: "cover",
              maxWidth: "130px",
            }}
          ></img>
        </Col>
        <Col className="d-flex flex-column justify-content-center my-3 text-black" md={4}>
          <h5 className="fw-bold">{props.name}</h5>
          <h6 className="fw-light">{props.description}</h6>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center p-0 align-items-center mt-3"
          md={1}
        >
          <h6 className="fw-bold mb-0"> € {props.price * count}</h6>
        </Col>
        <Col
          className="d-flex flex-row justify-content-center align-items-center gap-3 ps-4 mt-3"
          md={3}
        >
          <Button
            onClick={handleDecrement}
            className="position-relative ms-1"
            style={{ maxHeight: "50px", minWidth: "40px" }}
          >
            -
          </Button>

          <div
            className="fw-bold position-relative text-center"
            style={{ maxHeight: "50px", minWidth: "18px" }}
          >
            {count}
          </div>

          <Button
            onClick={handleIncrement}
            className="position-relative"
            style={{ maxHeight: "40px", minWidth: "40px" }}
          >
            +
          </Button>
        </Col>
        <Col className="ps-4 pt-0 float-end hover-image" md={1}>
            <img className="img-fluid img-effect" src={Minus} alt=""></img>
        </Col>
      </Row>
    </Container>
  );
});

export default CartElement;