import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Minus from "../../assets/minus.svg";

const CartElement = ({ name, price, image, description, quantity, removeItem, addItem, removeSingleItem}) => {
  const [count, setCount] = useState(quantity);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
      setCount(count - 1);
  };

  return (
    <Container className="bg-custom-color-grey py-3 px-3 rounded-4 mb-3 img-effect border image-container">
      <Row>
        <Col xs={12} md={3}>
          <img
            alt=""
            src={image}
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
        <Col
          className="d-flex flex-column justify-content-center my-3 text-black"
          md={4}
        >
          <h5 className="ps-3 fw-bold">{name}</h5>
          <h6 className="fw-light">{description}</h6>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center p-0 align-items-center mt-3"
          md={1}
        >
          <h6 className="fw-bold mb-0"> € {price * count}</h6>
        </Col>
        <Col
          className="d-flex flex-row justify-content-center align-items-center gap-3 ps-4 mt-3"
          md={3}
        >
          <Button
            onClick={() => {
              if (count > 1) {
                handleDecrement();
                removeSingleItem(name);
              } else {
                removeItem(name);
              }
            }}
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
            onClick={() => {
              handleIncrement();
              addItem(name);
            }}
            className="position-relative"
            style={{ maxHeight: "40px", minWidth: "40px" }}
          >
            +
          </Button>
        </Col>
        <Col className="ps-4 pt-0 float-end hover-image" md={1}>
          <img
            className="img-fluid img-effect"
            onClick={() => removeItem(name)}
            src={Minus}
            alt=""
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default CartElement;
