import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter-x.svg";
function Footer() {
  return (
    <div className="bg-grey mt-5 pb-2">
      <Container className="mt-4">
        <Row className="p-3">
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
        <div className="footer">
          <Row className="p-3">
            <Col className="text-center">
              <img
                alt=""
                src={""}
                width="160"
                height="33"
                className="d-inline-block align-top"
              />{" "}
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="d-flex justify-content-center m-3">
              <img
                src={Instagram}
                width="25"
                height="25"
                className="mx-3"
                onClick={() => window.open("_blank")}
                alt="instagram"
              ></img>
              <img
                src={Facebook}
                width="25"
                height="25"
                className="mx-3"
                alt="facebook"
              ></img>
              <img
                src={Twitter}
                width="25"
                height="25"
                className="mx-3"
                alt="twitter"
              ></img>
            </Col>
          </Row>
          <p className="text-center mt-3">© 2025 . All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
