import { Row, Col, Container } from "react-bootstrap";
import Flower from "../../assets/Flower.jpg";
function ImgDesc() {
    return (
        <Container fluid className="mt-5 mx-0 mb-5" >
        <Row  >
            <Col className="" md={4} style={{ height: "600px" }}>
            <img
                src={Flower}
                alt=""
                className="img-fluid object-fit-cover mb-5"
                style={{ height: "100%", minWidth: "100%" }}
            ></img>
            </Col>
            <Col
            className="bg-grey mx-0 p-5 d-flex justify-content-center text-start flex-column"
            md={8}
           
            >
            <h1 className="display-3 ms-5 my-4 fw-light align-middle">Shop</h1>
            <h4 className="ms-5 my-3 fw-light">
                Browse our shop to find the perfect speaker for you
            </h4>
            <p className="ms-5 fw-light">
                Although you are able to send us custom requests, we have a large
                inventory of speakers to choose from.
            </p>
            </Col>
      </Row>
        </Container>
    )

}

export default ImgDesc;