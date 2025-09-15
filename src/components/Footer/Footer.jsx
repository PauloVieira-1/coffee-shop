import { Container, Row, Col, Button } from "react-bootstrap";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter-x.svg";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="bg-grey mt-5 pb-4 w-100" style={{ overflowX: "hidden" }}>
      <Container fluid className="px-0">
        {/* Back to Top Button */}
        <Row className="justify-content-center p-3 mx-0">
          <Col className="d-flex justify-content-center">
            <Button
              className="btn-rounded wide px-5"
              variant="primary text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              Back to Top
            </Button>
          </Col>
        </Row>

        {/* Footer Logo */}
        <Row className="justify-content-center px-3 mx-0">
          <Col className="text-center">
            <img
              src={Logo}
              alt="Pearldutch Logo"
              width="160"
              height="120"
              className="d-inline-block align-top mb-3"
            />
          </Col>
        </Row>

        {/* Social Icons */}
        <Row className="justify-content-center text-center mx-0">
          <Col className="d-flex justify-content-center m-3">
            <img
              src={Instagram}
              width="25"
              height="25"
              className="mx-3"
              alt="instagram"
              onClick={() => window.open("https://instagram.com", "_blank")}
            />
            <img
              src={Facebook}
              width="25"
              height="25"
              className="mx-3"
              alt="facebook"
              onClick={() => window.open("https://facebook.com", "_blank")}
            />
            <img
              src={Twitter}
              width="25"
              height="25"
              className="mx-3"
              alt="twitter"
              onClick={() => window.open("https://twitter.com", "_blank")}
            />
          </Col>
        </Row>

        {/* Footer Text */}
        <p className="text-center mt-3 mb-0">© 2025 Pearldutch. All rights reserved.</p>
      </Container>
    </div>
  );
}

export default Footer;
 