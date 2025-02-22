import { Container, Row, Col, Button } from "react-bootstrap";
import Coffee from "../assets/coffeebag3.jpg";
import CoffeeCard from "../components/CoffeeCard/coffeeCard.jsx";
import AvailableCoffees from "../components/CoffeeCard/AvailableCoffees.js";
import ImgDesc from "../components/ImgDesc/ImgDesc.jsx";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

const styles = {
  backgroundImage: `url(${Coffee})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "100%",
  height: "100vh",
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
      <div style={bg} className="mb-5 position-absolute">
        <main style={styles} >
          <Container className="d-flex align-items-center justify-content- position-absolute top-50 start-50 translate-middle">
            <Row>
              <Col className="text-ceter ps-5 ms-4">
                <h1 className="text-white fw-bold display-2 mb-4">
                  The Best <br /> Ugandan Coffee
                </h1>
                <p className="text-white">Roasted by expert coffee roasters based in Uganda. The flavors of Africa <br />distilled into our unique coffee blends</p>
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
        </main>
        <div className="mt-5 mb-3" >
          <div className=" d-flex align-items-center justify-content-center flex-column text-center text-dark-grey mt-5 mb-3">
            <h6>Free Delivery</h6>
            <h2 className="fw-bold display-6">
              Choose a Coffee From Our  Selection
            </h2>
            <hr className="w-50 mt-5" style={{borderColor: "black", borderWidth: "2px"}}></hr>
          </div>
        </div>
        <Container
          className=" mb-5 mt-3 d-fle justify-content-center text-center pb-5"
          style={{ height: "60vh" }}
        >
          <Row > 
            {Object.keys(AvailableCoffees).map((coffee) => {
              return (
                <Col className="d-flex align-items-center justify-content-center text-center mt-5">
                  <CoffeeCard
                    key={coffee}
                    name={AvailableCoffees[coffee].name}
                    specs={AvailableCoffees[coffee].specs}
                    image={AvailableCoffees[coffee].img}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <Row>
            <Col className="d-flex align-items-center justify-content-center text-center mt-5 mx-0">
            <ImgDesc />
            </Col>
          </Row>
        <div className="mt- ">
        </div>
      </div>
    </>
  );
}

export default Home;
