import { Col, Container, Row } from "react-bootstrap";
import CoffeeCup from "../assets/unsplash7.jpg";
import CoffeePlaceholder from "../assets/unsplash6.jpg";
import CarouselComponent from "../components/other/Carousel";
import { useEffect } from "react";
import Plantation1 from "../assets/plantation1.jpeg";
import Plantation3 from "../assets/plantation3.jpeg";
import Plantation2 from "../assets/plantation2.jpeg";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero section */}
      <div className="d-none d-md-none d-lg-block">
        <img
          src={CoffeeCup}
          alt="coffee cup"
          className="img-fluid position-relative"
          style={{ width: "100%", height: "650px", objectFit: "cover" }}
        />
        <div
          className="text-white position-absolute transition-fast"
          style={{ top: "210px", left: "50px" }}
        >
          <h1>About Us</h1>
          <p>Explore our story and commitment to quality</p>
        </div>
        <div
          className="text-dark position-absolute d-flex flex-column align-items-end transition-fast-right"
          style={{ top: "360px", right: "50px" }}
        >
          <h1>Our Story</h1>
          <p>Pearldutch: Coffee with purpose</p>
        </div>
      </div>

      {/* Mobile hero */}
      <div className="d-block d-md-block d-lg-none">
        <img
          src={CoffeeCup}
          alt="coffee cup"
          className="img-fluid position-relative"
          style={{ width: "100%", height: "650px", objectFit: "cover" }}
        />
        <div
          className="text-white position-absolute transition-fast"
          style={{
            top: "110px",
            left: "15px",
            right: "15px",
            padding: "0",
            boxSizing: "border-box",
          }}
        >
          <h1>About Us</h1>
          <p>Explore our story and commitment to quality</p>
        </div>
        <div
          className="text-dark position-absolute d-flex flex-column align-items-end transition-fast-right"
          style={{
            top: "440px",
            left: "15px",
            right: "15px",
            padding: "0",
            boxSizing: "border-box",
          }}
        >
          <h1>Our Story</h1>
          <p>Pearldutch: Coffee with purpose</p>
        </div>
      </div>

      {/* Story Section */}
      <Container className="my-5">
        <Row className="p-5">
          <Col
            xs={12}
            md={7}
            className="d-flex justify-content-center flex-column mb-5"
            style={{ paddingLeft: "15px", paddingRight: "15px" }} // mobile padding
          >
            <h1 className="fw-bold mb-5">Our Founder</h1>
            <p className="fw-light lh-lg">
              Pearldutch was born from the strength and resilience of a mother,
              <strong> Maggie</strong>, a woman whose dedication to her family
              and community inspired this mission. Based in Central Uganda, she
              has worked alongside female farmers—many of them single mothers—
              who struggle to find fair markets for their coffee beans.
              <br />
              <br />
              Through Pearldutch, we honor her legacy and provide these women
              with opportunities to thrive, ensuring that every cup you drink
              helps create a better future for families in Uganda.
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            className="text-center d-flex align-items-center justify-content-center d-block d-md-block d-lg-none mb-4"
          >
            <div className="card bg-dark">
              <img
                src={Plantation3}
                className="card-img-top"
                alt="Founder"
                style={{ width: "30vh", height: "40vh", objectFit: "cover" }}
              />
            </div>
          </Col>
          <Col
            xl={5}
            className="text-center d-none d-md-none d-lg-block d-flex align-items-center"
          >
            <div className="card bg-dark">
              <img
                src={Plantation3}
                className="card-img-top"
                alt="Founder"
                style={{ width: "100%", height: "50vh", objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="p-5">
          <Col
            xl={5}
            className="text-center d-none d-md-none d-lg-block d-flex align-items-center justify-content-center mt-4"
          >
            <div className="card bg-dark">
              <img
                src={Plantation1}
                className="card-img-top"
                alt="Mission"
                style={{ width: "100%", height: "50vh", objectFit: "cover" }}
              />
            </div>
          </Col>
          <Col
            xs={12}
            md={7}
            className="d-flex justify-content-center flex-column mb-5"
            style={{ paddingLeft: "15px", paddingRight: "15px" }} // mobile padding
          >
            <h1 className="fw-bold mb-5 mt-5">Our Mission</h1>
            <p className="fw-light lh-lg">
              At Pearldutch, our mission is simple: help farmers, especially
              single mothers in Uganda, gain access to global markets, fair
              prices, and a sustainable future. Every purchase directly supports
              these hardworking women, empowering them to provide for their
              families and build stronger communities.
              <br />
              <br />
              We also commit to sustainability—highlighting eco-friendly farming
              practices, shade-grown methods, and ethical sourcing. Every cup is
              not just coffee, but change.
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            className="text-center d-flex align-items-center justify-content-center d-block d-md-block d-lg-none mb-4"
          >
            <div className="card bg-dark">
              <img
                src={CoffeePlaceholder}
                className="card-img-top"
                alt="Mission"
                style={{ width: "30vh", height: "40vh", objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>

        {/* Sustainability Section */}
        <Row className="p-5 align-items-center">
          {/* Text content */}
          <Col
            xs={12}
            md={7}
            className="d-flex justify-content-center flex-column mb-5"
            style={{ paddingLeft: "15px", paddingRight: "15px" }} // mobile padding
          >
            <h1 className="fw-bold mb-4">Sustainability & Community</h1>
            <p className="fw-light lh-lg">
              At Pearldutch, sustainability is at the heart of everything we do.
              From eco-friendly, shade-grown farming methods to ethical
              sourcing, we are committed to protecting the land that nurtures
              our beans.
              <br />
              <br />
              Our work extends beyond the farms — every cup of Pearldutch coffee
              helps low-income families, especially single mothers, gain access
              to fair wages, education, and brighter futures. Together, we’re
              brewing change one harvest at a time.
            </p>
          </Col>

          {/* Image on right for large screens */}
          <Col
            xl={5}
            className="text-center d-none d-md-none d-lg-block d-flex align-items-center justify-content-center"
          >
            <div className="card bg-dark">
              <img
                src={Plantation2}
                className="card-img-top"
                alt="Sustainability"
                style={{ width: "100%", height: "50vh", objectFit: "cover" }}
              />
            </div>
          </Col>

          {/* Image on mobile (stays above text) */}
          <Col
            xs={12}
            md={6}
            className="text-center d-flex align-items-center justify-content-center d-block d-md-block d-lg-none mb-4"
          >
            <div className="card bg-dark">
              <img
                src={Plantation2}
                className="card-img-top"
                alt="Sustainability"
                style={{ width: "30vh", height: "40vh", objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>

        {/* Coffees Section */}
        <Row className="p-5 bg-light rounded">
          <Col xs={12} className="text-center mb-5">
            <h1 className="fw-bold">Our Coffees</h1>
            <p className="fw-light">
              Each cup tells a story — carefully grown, ethically sourced, and
              roasted with passion.
            </p>
          </Col>

          <Col md={4} className="mb-4 d-flex">
            <div className="card flex-fill shadow-sm">
              <div className="card-body">
                <h3 className="fw-bold">Classic Arabica</h3>
                <p className="mb-2">
                  <em>Flavour:</em> Smooth, naturally sweet, with notes of
                  chocolate and caramel.
                </p>
                <p>
                  Handpicked in the heart of Central Uganda, our Arabica beans
                  are slow-roasted to highlight their delicate balance of
                  sweetness and light acidity. Perfect for a refined,
                  easy-drinking cup.
                </p>
              </div>
            </div>
          </Col>

          <Col md={4} className="mb-4 d-flex">
            <div className="card flex-fill shadow-sm">
              <div className="card-body">
                <h3 className="fw-bold">Bold Robusta</h3>
                <p className="mb-2">
                  <em>Flavour:</em> Strong, earthy, with nutty undertones and a
                  lingering richness.
                </p>
                <p>
                  For those who love a deep, full-bodied coffee, our Robusta
                  beans deliver intensity and higher caffeine content. Grown
                  with care by single-mother farmers, it’s a bold taste with a
                  bold story.
                </p>
              </div>
            </div>
          </Col>

          <Col md={4} className="mb-4 d-flex">
            <div className="card flex-fill shadow-sm">
              <div className="card-body">
                <h3 className="fw-bold">Pearldutch Signature Blend</h3>
                <p className="mb-2">
                  <em>Flavour:</em> A perfect harmony of chocolate, fruit, and
                  subtle spice.
                </p>
                <p>
                  A house blend of Arabica and Robusta beans, designed to
                  represent the best of both worlds. Smooth yet strong,
                  comforting yet exciting. This is Pearldutch’s flagship coffee.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Carousel */}
      <Container fluid className="my-5">
        <CarouselComponent />
      </Container>
    </>
  );
}

export default AboutUs;
