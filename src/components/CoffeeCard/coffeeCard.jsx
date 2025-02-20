import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Check from "../../assets/check-circle.svg";
import { useContext } from "react";
import CartContext from "../../context/cartContext"

const cardStyle = {
  width: "23rem",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
  height: "26rem",
};

const imgStyle = {
  width: "200px",
  height: "190px",
};

const getCart = () => {
  const cartStored = JSON.parse(localStorage.getItem("CoffeCart")) || [];
  return cartStored;
};

function CoffeeCard(props) {
  const [cart, setCart] = useState([]);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const initialCart = getCart();
    setCart(initialCart);
  }, []);

  const addtoCart = () => {
    const existingItem = cart?.find((item) => item.name === props.name) || false;
    console.log(existingItem);

    const newCart = existingItem
      ? cart?.map((item) => {
          if (item.name === props.name) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        })
      : [...cart, { name: props.name, count: 1 }];

    localStorage.setItem("CoffeCart", JSON.stringify(newCart));

    setCart(newCart);

    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // !AI
    console.log(cart);
  };


  const addButton = (
    <Button
      variant="grey position-relative mb-4"
      className="w-50"
      onClick={() => addtoCart()}
    >
      <h6 className="fw-bold text-center d-block pt-2">Add to Cart</h6>
    </Button>
  );

  const addedButton = (
    <Button
      variant="primary text-white position-relative mb-4"
      className="w-50"
      disabled
    >
      <div className="d-flex justify-content-center align-items-center text-center">
        <img className="me-2" src={Check} alt="check" />
        <h6 className="fw-bold text-center d-block pt-2">Added</h6>
      </div>
    </Button>
  );

  return (
    <div
      style={cardStyle}
      className="card text-start bg-white text-black d-flex align-items-center justify-content-center shadow1 img-effect"
    >
      <h2 className="fw-bold mt-3">{props.name}</h2>
      <img src={props.image} style={imgStyle} alt={`${props.name}`} />
      {props.specs.map((spec) => (
        <p key={spec} className="fw-bold list-unstyled text-center">
          {spec}
        </p>
      ))}
      {added ? addedButton : addButton}
    </div>
  );
}

export default CoffeeCard;
