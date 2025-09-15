import Button from "react-bootstrap/Button";
import { useState } from "react";
import Check from "../../assets/check-circle.svg";
import Question from "../../assets/question-circle-fill.svg";
import VerticalModal from "./modal";

const cardStyle = {
  width: "22rem",
  borderRadius: "14px",
  boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
  height: "34rem",
  backgroundColor: "white",
  position: "relative",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

const imgStyle = {
  width: "160px",
  height: "160px",
  objectFit: "contain",
  margin: "10px 0",
};

function CoffeeCard(props) {
  const [added, setAdded] = useState(false);
  const [show, setShow] = useState(false);

  const handleAdd = () => {
    if (props.addItem) props.addItem(props.name); // ✅ uses App's addItem
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <div
        style={cardStyle}
        className="card text-center shadow-sm coffee-card shadow1 img-effect"
      >
        {/* Question mark top-right */}
        <img
          src={Question}
          alt="More info"
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            width: "24px",
            height: "24px",
            cursor: "pointer",
          }}
          onClick={() => setShow(true)}
        />

        {/* Coffee Name */}
        <h4 className="fw-semibold mb-2 mx-4">{props.name}</h4>

        {/* Flavour Profile */}
        {props.underline && (
          <p className="text-muted small mb-3 fst-italic px-2">
            {props.underline}
          </p>
        )}

        {/* Coffee Image */}
        <img src={props.image} style={imgStyle} alt={props.name} />

        {/* Specs */}
        {props.specs && props.specs.length > 0 && (
          <p className="text-secondary small mt-3 mb-2 text-center px-5">
            {props.specs[0].replace("Flavour: ", "")}
          </p>
        )}

        {/* Price */}
        {props.price && (
          <p className="fw-bold small text-dark mb-3">{props.price}</p>
        )}

        {/* Add to cart button at bottom */}
        {added ? (
          <Button
            variant="primary"
            className="w-50 rounded-pill mb-0 d-flex justify-content-center align-items-center"
            disabled
          >
            <img className="me-2" src={Check} alt="check" width={16} />
            Added
          </Button>
        ) : (
          <Button
            variant="outline-dark"
            className="w-50 rounded-pill mb-0 fw-semibold"
            onClick={handleAdd}
          >
            Add to Cart
          </Button>
        )}
      </div>

      {/* Modal */}
      <VerticalModal
        show={show}
        setShow={setShow}
        name={props.name}
        image={props.image}
        specs={props.specs}
        underline={props.underline}
        price={props.price}
        close={() => setShow(false)}
      />
    </>
  );
}

export default CoffeeCard;
