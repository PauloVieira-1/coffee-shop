import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Nav.css";
import Button from "react-bootstrap/Button";
import Cart from "../assets/cart3.svg";
import { Link } from "react-router-dom";

const scrollFunction = () => {
  window.scrollTo(0, 0);
};

function NavBar() {
  return (
    <>
      <Navbar
        id="nav"
        expand="md"
        collapseOnSelect
        className="navbar-nav mx-auto pb-2 text-white shadow1 mt-0 position-fixed w-100 slide-animation"
      >
        <Container>
          {/* Brand */}
          <Navbar.Brand>
            <Link
              to={"/"}
              className="fw-bold text-white text-decoration-none"
              onClick={scrollFunction}
            >
              Dutch Pearl Coffee
            </Link>
          </Navbar.Brand>

          {/* Toggle button for mobile (white color) */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0"
            style={{ filter: "invert(1)" }} // makes hamburger icon white
          />

          {/* Collapsible Nav */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="text-white my-1 align-items-center">
              <Link
                className="nav-link text-white mx-2"
                to={"/"}
                onClick={scrollFunction}
              >
                Home
              </Link>
              <Link
                className="nav-link text-white mx-2"
                to={"/AboutUs"}
                onClick={scrollFunction}
              >
                About
              </Link>
              <Link
                className="nav-link text-white mx-2"
                to={"/shop"}
                onClick={scrollFunction}
              >
                Shop
              </Link>
              {/* Cart now hidden inside menu too */}
              <Link
                className="nav-link mx-2"
                to={"/cart"}
                onClick={scrollFunction}
              >
                <Button
                  className="btn-rounded d-flex align-items-center justify-content-center p-2"
                  variant="primary"
                  role="button"
                >
                  <img alt="Cart" src={Cart} width="18" height="18" />
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
