import { Row, Col, Container, Button } from "react-bootstrap";
import Flower from "../../assets/Flower.jpg";
import { Link } from "react-router-dom";
function ImgDesc() {
  
  return (
    <Container fluid className="mt-5 mx-0 mb-5 text-white">
      <Row>
        <Col className="" md={4} style={{ height: "600px" }}>
          <img
            src={Flower}
            alt=""
            className="img-fluid object-fit-cover mb-5"
            style={{ height: "100%", minWidth: "100%" }}
          ></img>
        </Col>
        <Col
          className="bg-brown-1 mx-0 p-5 d-flex justify-content-center text-start flex-column "
          md={8}
        >
          <h1 className="display-3 ms-5 my-4 fw-light align-middle">Our Story</h1>
          <h4 className="ms-5 my-3 fw-light">
            Browse our shop to find the perfect coffee roast for you
          </h4>
          <p className="ms-5 fw-light">
            We offer a vast selection of coffee blends and also welcome custom orders to suit your taste.
          </p>
          <Row className="position-relative bottom-0 end-0 pt-5 ps-2">
          <Link to="/AboutUs">
            <Button id="my-button-2" className="btn btn-outline-white rounded-3 px-4 mt-4 text-center ms-5 mt-5 " style={{ width: "13vw", height: "5vh"}} onClick={() => window.scrollTo(0, 0)}> About Us</Button>
        </ Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ImgDesc;
