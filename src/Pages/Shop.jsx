import { Container, Row, Col } from "react-bootstrap";
import Background from "../assets/unsplash9.jpg";
import ShopCard from "../components/other/shopCard";
import AvailableCoffees from "../components/CoffeeCard/AvailableCoffees";
import { useEffect, useState } from "react";

function Shop() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("CoffeCart")) || [];
    setCart(cart);
  }, []);

  const addItem = (name) => {
    const ExistingItem = cart ? cart.find((item) => item.name === name) : false;

    const newCart = ExistingItem
      ? cart.map((item) =>
          item.name === name ? { ...item, count: item.count + 1 } : item,
        )
      : [...cart, { name: name, count: 1 }];
    console.log(newCart);
    localStorage.setItem("CoffeCart", JSON.stringify(newCart));
    setCart(newCart);
  };

  //        const amount = cart.reduce((acc, item) => item.name === name ? acc + item.count : acc, 0) + 1;

  return (
    <>
      <img
        src={Background}
        className="img-fluid transition-top"
        style={{ width: "100%", height: "60vh", objectFit: "cover" }}
      />
      <Container className="my-5">
        <Row className="p-5">
          <Col className="pe-5">
            <h1 className="fw-bold mb-4">Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              eveniet vitae voluptate quasi ipsum cupiditate non, aliquam
              nesciunt ullam a sed atque magni illum modi voluptatum fugiat cum.
              Fugit, ab.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center mb-5">
        <Row className="mb-5">
          {Object.keys(AvailableCoffees).map((coffee) => (
            <Col>
              <ShopCard
                price={AvailableCoffees[coffee].price}
                coffee={coffee}
                image={AvailableCoffees[coffee].img}
                specifications={AvailableCoffees[coffee].specs}
                underline={AvailableCoffees[coffee].underline}
                addItem={addItem}
              />
            </Col>
          ))}
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Shop;
