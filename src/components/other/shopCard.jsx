import { Container, Row } from "react-bootstrap";
import CoffeeExample from "../../assets/coffeeBag.png";
import { Button } from "react-bootstrap";
import { useState } from "react";

function ShopCard(props) {
  const [added, setAdded] = useState(false);

  const changeColor = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Container
      className="my-1 mx-3 card p-4 rounded-4 img-effect mb-5 d-flex flex-column justify-content-between"
      style={{ width: "18rem", height: "28rem" }}
    >
      {/* Title + Flavour Text */}
      <Row className="text-center">
        <h4 className="fw-bold mb-3">{props.coffee}</h4>
        <p className="text-muted mb-4">{props.underline}</p>
      </Row>

      {/* Image */}
      <div className="d-flex justify-content-center mb-3">
        <img
          src={CoffeeExample}
          alt={props.coffee}
          className="img-fluid object-fit-contain card-img"
          style={{ width: "10rem" }}
        />
      </div>

      {/* Button (sticks to bottom) */}
      <div className="mt-auto d-flex justify-content-center">
        <Button
          className={`w-50 rounded-3 ${added ? "added" : ""}`}
          variant={added ? "success" : "dark"}
          onClick={() => {
            props.addItem(props.coffee);
            changeColor();
          }}
        >
          {added ? "Added" : "Add to Cart"}
        </Button>
      </div>
    </Container>
  );
}

export default ShopCard;
