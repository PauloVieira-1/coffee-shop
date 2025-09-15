import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

function VerticalModal({ show, close, name, image, specs, underline, price }) {
  return (
    <Modal
      show={show}
      onHide={close}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="coffee-modal"
    >
      <Modal.Header closeButton className="border-0 p-4">
        <Modal.Title className="fw-bold text-center w-100 fs-4">{name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row className="align-items-center p-2">
          {/* Coffee Image */}
          <Col
            md={5}
            className="d-flex justify-content-center mb-3 mb-md-0"
          >
            <img
              src={image}
              alt={name}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "250px", objectFit: "contain" }}
            />
          </Col>

          {/* Coffee Info */}
          <Col md={7}>

            {/* Specs */}
            {specs && specs.length > 0 && (
              <ul className="list-unstyled mb-3" style={{ paddingLeft: "0" }}>
                {specs.map((spec, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "6px",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        display: "inline-block",
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#6c757d",
                        borderRadius: "50%",
                        marginTop: "6px", // aligns with text
                      }}
                    ></span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Price */}
            {price && (
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#f0f0f0",
                  padding: "4px 10px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  marginTop: "12px",
                }}
              >
                {price}
              </div>
            )}
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className="border-0 justify-content-center p-4">
        <Button
          variant="outline-primary"
          className="rounded-pill px-4 py-2 fw-semibold"
          onClick={close}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticalModal;
