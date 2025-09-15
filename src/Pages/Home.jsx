import { Container, Row, Col, Button } from "react-bootstrap";
import Coffee from "../assets/coffeebag3.jpg";
import CoffeeCard from "../components/CoffeeCard/coffeeCard.jsx";
import AvailableCoffees from "../components/CoffeeCard/AvailableCoffees.js";
import ImgDesc from "../components/ImgDesc/ImgDesc.jsx";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef } from "react";

function Home({ addItem }) {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  const revealRefs = useMemo(() => [headingRef, paraRef], []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === headingRef.current && entry.isIntersecting) {
          entry.target.classList.add("transition-fast");
        }
        if (entry.target === paraRef.current && entry.isIntersecting) {
          entry.target.classList.add("transition-slow");
        }
      });
    });

    revealRefs.forEach((ref) => {
      if (ref) observer.observe(ref.current);
    });

    return () => {
      revealRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [revealRefs]);

  return (
    <>
      {/* Hero Section */}
      <div>
        <img
          src={Coffee}
          className="img-fluid position-relative w-100"
          alt="coffee"
          style={{ height: "100vh", objectFit: "cover" }}
        />

        {/* Desktop Overlay */}
        <div
          className="text-white position-absolute w-100 d-none d-lg-block"
          style={{ top: "330px", left: "50px" }}
        >
          <Container className="d-flex align-items-center">
            <Row className="w-100">
              <Col className="ps-5 ms-4">
                <h1 className="text-white fw-bold display-2 mb-4">
                  The Best <br /> Ugandan Coffee
                </h1>
                <p className="text-white">
                  Roasted by expert coffee roasters based in Uganda. The flavors
                  of Africa <br /> distilled into our unique coffee blends
                </p>
                <Button
                  className="btn btn-white rounded-3 px-5 mt-4 text-center transition-fast p-2"
                  onClick={() => window.scrollTo(0, 750)}
                >
                  <h4 className="fw-bold text-center d-block pt-1 fs-4">Shop Now</h4>
                </Button>
                <Link to="/AboutUs">
                  <Button
                    className="btn btn-outline-white rounded-3 px-4 mt-4 text-center ms-4 transition-fast p-2"
                  >
                    <h4 className="fw-bold text-center d-block pt-1 fs-4">
                      About Us
                    </h4>
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Mobile Overlay */}
        <div
          className="text-white position-absolute w-100 d-block d-lg-none"
          style={{ top: "250px", left: "10px" }}
        >
          <Container className="d-flex align-items-center justify-content-center">
            <Row>
              <Col className="text-center ps-3 ms-4">
                <h3 className="text-white fw-bold display-6 mb-4">
                  The Best <br /> Ugandan Coffee
                </h3>
                <p className="text-white">
                  Roasted by expert coffee roasters based in Uganda. The flavors
                  of Africa distilled into our unique coffee blends
                </p>
                <Button
                  className="btn btn-white rounded-3 px-3 mt-4 text-center"
                  onClick={() => window.scrollTo(0, 750)}
                >
                  <h4 className="fw-bold text-center d-block pt-1">Shop Now</h4>
                </Button>
                <Link to="/AboutUs">
                  <Button
                    className="btn btn-outline-white rounded-3 px-4 mt-4 text-center ms-4"
                  >
                    <h4 className="fw-bold text-center d-block pt-1">
                      About Us
                    </h4>
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Coffee Selection Section */}
      <main className="d-flex justify-content-center mb-4 mx-0 w-100">
        <div className="mb-5 position-relative">
          <div className="mt-5 mb-3 text-center">
            <h6 ref={paraRef}>Free Delivery</h6>
            <h2 className="fw-bold display-6" ref={headingRef}>
              Choose a Coffee From Our Selection
            </h2>
            <hr
              className="w-50 mt-5 text-center mx-auto"
              style={{ borderColor: "black", borderWidth: "2px" }}
            />
          </div>

          <Container className="mb-5 mt-3 d-flex justify-content-center text-center mx-0 w-100">
            {/* Mobile view */}
            <Row className="w-100 d-flex d-lg-none">
              {Object.keys(AvailableCoffees).map((coffee) => (
                <Col
                  key={coffee}
                  className="d-flex align-items-center justify-content-center text-center mt-5"
                >
                  <CoffeeCard
                    name={AvailableCoffees[coffee].name}
                    specs={AvailableCoffees[coffee].specs}
                    image={AvailableCoffees[coffee].img}
                    price={AvailableCoffees[coffee].price}
                    underline={AvailableCoffees[coffee].underline}
                    addItem={addItem} 
                  />
                </Col>
              ))}
            </Row>

            {/* Desktop view */}
            <Row className="w-100 d-none d-lg-flex">
              {Object.keys(AvailableCoffees).map((coffee) => (
                <Col
                  xs={4}
                  key={coffee}
                  className="d-flex align-items-center justify-content-center text-center mt-5"
                >
                  <CoffeeCard
                    name={AvailableCoffees[coffee].name}
                    specs={AvailableCoffees[coffee].specs}
                    image={AvailableCoffees[coffee].img}
                    price={AvailableCoffees[coffee].price}
                    underline={AvailableCoffees[coffee].underline}
                    addItem={addItem} 
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </main>

      {/* Image Description Section */}
      <Row className="justify-content-center mt-5">
        <Col className="d-flex align-items-center justify-content-center text-center">
          <ImgDesc />
        </Col>
      </Row>
    </>
  );
}

export default Home;
