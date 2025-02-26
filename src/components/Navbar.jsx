import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Nav.css";
import Button from "react-bootstrap/Button";
import Cart from "../assets/cart3.svg";
import { Link } from "react-router-dom";

const cursorStyle = {
  cursor: "pointer !important",
};

function navBar() {
  const additionalStyling = {
    display: "flex!important",
    justifyContent: "space-around",
    flexBasis: "auto",
  };

  return (
    <>
      <Navbar
        id="nav"
        className="navbar-nav  mx-auto pb-2 text-white shadow1 mt-0 position-fixed w-100"
      >
        <Container>
        <Navbar.Brand >
          <Link to={"/"} className=" fw-bold text-white style-none underline-none text-decoration-none">
            Dutch Pearl Coffee
          </Link>
        </Navbar.Brand>
          <Nav
            style={additionalStyling}
            className="m-auto d-flex text-align-center text-white my-1"
          >
            <Link className="text-white mx-2 text-decoration-none mx-2 px-2" style={{cursor: "pointer !important"}} to={"/"}>
              Home
            </Link>
            <Link className="text-white mx-2 text-decoration-none mx-2 px-2" to={"/AboutUs"}>
              About
            </Link>
          </Nav>
          <Link to="/shop">
            <Button variant="primary text-white" role="button" className="rounded-3 px-5">
              Shop
            </Button>
          </Link>
          <Link
            className="mx-3"
            to={"/cart"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Button
              className="btn-rounded d-flex align-items-center justify-content-center p-2"
              variant="primary"
              role="button"
            >
              <img alt="" src={Cart} width="18" height="18" className=""></img>
            </Button>{" "}
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default navBar;
