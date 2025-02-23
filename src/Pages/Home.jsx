import { Container, Row, Col, Button } from "react-bootstrap";
import Coffee from "../assets/coffeebag3.jpg";
import CoffeeCard from "../components/CoffeeCard/coffeeCard.jsx";
import AvailableCoffees from "../components/CoffeeCard/AvailableCoffees.js";
import ImgDesc from "../components/ImgDesc/ImgDesc.jsx";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

const styles = {
  // backgroundImage: `url(${Coffee})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "100%",
  height: "50vh",
  position: "relative",
  zIndex: "1",
  top: "0",
};

const bg = {
  // background: "linear-gradient(to bottom, rgba(26, 30, 34, 1) 49%, white 98%)",
  background: "rgb(240, 234, 228)",
  height: "280vh",
  width: "100%",
  position: "relative",
  top: "0",
  zIndex: "2",
};

function Home() {
  return (
    <>
      <div>
        <img
          src={Coffee}
          className="img-fluid position-relative w-100"
          alt="coffee"
          style={{ height: "100vh", objectFit: "cover" }}
        />
        
        <div className="text-white position-absolute w-100 d-none d-lg-block" style={{ top: "330px", left: "50px" }}>
          <Container className="d-flex align-items-center">
            <Row className="w-100">
              <Col className=" ps-5 ms-4">
                <h1 className="text-white fw-bold display-2 mb-4">
                  The Best <br /> Ugandan Coffee
                </h1>
                <p className="text-white">
                  Roasted by expert coffee roasters based in Uganda. The flavors of Africa
                  <br /> distilled into our unique coffee blends
                </p>
                <Button
                  id="my-button"
                  className="btn btn-white rounded-3 px-5 mt-4 text-center"
                  onClick={() => window.scrollTo(0, 750)}
                >
                  <h4 className="fw-bold text-center d-block pt-1">Shop Now</h4>
                </Button>
                <Link to="/AboutUs">
                <Button

id="my-button-2"
className="btn btn-outline-white rounded-3 px-4 mt-4 text-center ms-4"
>
<h4 className="fw-bold text-center d-block pt-1">About Us</h4>
</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="text-white position-absolute w-100 d-block d-lg-none" style={{ top: "250px", left: "10px" }}>
          <Container className="d-flex align-items-center justify-content-center">
            <Row>
              <Col className="text-center ps-3 ms-4">
                <h3 className="text-white fw-bold display-6 mb-4">
                  The Best <br /> Ugandan Coffee
                </h3>
                <p className="text-white">
                  Roasted by expert coffee roasters based in Uganda. The flavors of Africa distilled into our unique coffee blends
                </p>
                <Button
                  id="my-button"
                  className="btn btn-white rounded-3 px-3 mt-4 text-center"
                  onClick={() => window.scrollTo(0, 750)}
                >
                  <h4 className="fw-bold text-center d-block pt-1">Shop Now</h4>
                </Button>
                <Link to="/AboutUs">
                <Button

id="my-button-2"
className="btn btn-outline-white rounded-3 px-4 mt-4 text-center ms-4"
>
<h4 className="fw-bold text-center d-block pt-1">About Us</h4>
</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <main className="d-flex justify-content-center mb-4 mx-0 w-100">
        <div className="mb-5 position-relative">
          <div className="mt-5 mb-3 text-center">
            <h6>Free Delivery</h6>
            <h2 className="fw-bold display-6">Choose a Coffee From Our Selection</h2>
            <hr className="w-50 mt-5 text-center mx-auto" style={{ borderColor: "black", borderWidth: "2px" }} />
          </div>

          <Container fluidclassName="mb-5 mt-3 d-flex justify-content-center text-center mx-0 w-100">
            <Row className="w-100 d-dlex d-lg-none">
              {Object.keys(AvailableCoffees).map((coffee) => (
                <Col key={coffee} className="d-flex align-items-center justify-content-center text-center mt-5">
                  <CoffeeCard
                    name={AvailableCoffees[coffee].name}
                    specs={AvailableCoffees[coffee].specs}
                    image={AvailableCoffees[coffee].img}
                  />
                </Col>
              ))}
            </Row>
            <Row className="w-100 d-none d-lg-flex">
              {Object.keys(AvailableCoffees).map((coffee) => (
                <Col xs={4} key={coffee} className="d-flex align-items-center justify-content-center text-center mt-5">
                  <CoffeeCard
                    name={AvailableCoffees[coffee].name}
                    specs={AvailableCoffees[coffee].specs}
                    image={AvailableCoffees[coffee].img}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </main>
        <Row className="justify-content-center mt-5">
          <Col className="d-flex align-items-center justify-content-center text-center">
            <ImgDesc />
          </Col>
        </Row>
    </>
  );
}


export default Home;
