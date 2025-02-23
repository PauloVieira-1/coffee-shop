import { Col, Container, Row } from "react-bootstrap";
import CoffeeCup from "../assets/unsplash7.jpg"
import CoffeePlaceholder from "../assets/unsplash6.jpg"
import CarouselComponent from "../components/other/Carousel";
import { useEffect
 } from "react";

function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <> 
        <div className="d-none d-md-none d-lg-block">
     <img src={CoffeeCup}
      className="img-fluid position-relative"
      style={{width: "100%", height: "650px", objectFit: "cover"}}
      >
      </img>
      <div className=" text-white position-absolute" style={{top: "210px", left: "50px"}}>
          <h1>About Us</h1>
            <p>Explore our story and commitment to quality</p>
      </div>
      <div className="text-dark position-absolute d-flex flex-column align-items-end" style={{top: "360px", right: "50px"}}>
        <h1>Our Story</h1>
        <p>Discover our journey and passion for coffee</p>
      </div>
        </div>
        <div className="d-block d-md-block d-lg-none">
     <img src={CoffeeCup}
      className="img-fluid position-relative"
      style={{width: "100%", height: "650px", objectFit: "cover"}}
      >
      </img>
      <div className=" text-white position-absolute" style={{top: "110px", left: "50px"}}>
          <h1>About Us</h1>
            <p>Explore our story and our commitment to quality</p>
      </div>
      <div className="text-dark position-absolute d-flex flex-column align-items-end" style={{top: "440px", right: "50px"}}>
        <h1>Our Story</h1>
        <p>Discover our journey and passion for coffee</p>
      </div>
        </div>
        <Container className="my-5">
            <Row className="p-5">
                <Col xs={12} md={7} className="pe-5 d-flex justify-content-center flex-column mb-5">
                    <h1 className="fw-bold mb-5">Our Founder </h1>
                    <p className="fw-light lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit, est, aperiam officiis incidunt quisquam recusandae error quia perferendis eum culpa neque? Necessitatibus temporibus atque esse sequi veritatis officiis. Illum, hic in autem at aperiam quas, assumenda aliquid fugiat ipsum rem provident sed dicta cum quis repudiandae earum quo tempore vel harum repellendus fugit excepturi quos architecto asperiores. Repellat veniam, autem adipisci deleniti pariatur, fugit magni quidem optio consequatur nihil error laudantium dolorem amet et saepe sequi doloribus! Neque, consectetur.</p>
                </Col>
                <Col xs={12} md={6} className="text-center d-flex align-items-center justify-content-center d-block d-md-block d-lg-none">
                <div className="card bg-dark" >
                    <img src={CoffeePlaceholder} className="card-img-top" alt="..." style={{width: "30vh", height: "40vh", objectFit: "cover"
                    }}>
                    </img>
                </div>
                </Col>
                <Col xl={5}className="text-center d-none d-md-none d-lg-block d-flex align-items-center">
                <div className="card bg-dark" >
                    <img src={CoffeePlaceholder} className="card-img-top" alt="..." style={{width: "50vh", height: "50vh", objectFit: "cover"}}>
                    </img>
                </div>
                </Col>
            </Row>
            <Row className="p-5">
                <Col xl={5}className="text-center d-none d-md-none d-lg-block d-flex align-items-center justify-content-center mt-4">
                <div className="card bg-dark" >
                    <img src={CoffeePlaceholder} className="card-img-top" alt="..." style={{width: "50vh", height: "50vh", objectFit: "cover"}}>
                    </img>
                </div>
                </Col>
                <Col xs={12} md={7} className="pe-5 d-flex justify-content-center flex-column mb-5">
                    <h1 className="fw-bold mb-5 ps-5">Our Mission </h1>
                    <p className="fw-light lh-lg ps-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit, est, aperiam officiis incidunt quisquam recusandae error quia perferendis eum culpa neque? Necessitatibus temporibus atque esse sequi veritatis officiis. Illum, hic in autem at aperiam quas, assumenda aliquid fugiat ipsum rem provident sed dicta cum quis repudiandae earum quo tempore vel harum repellendus fugit excepturi quos architecto asperiores. Repellat veniam, autem adipisci deleniti pariatur, fugit magni quidem optio consequatur nihil error laudantium dolorem amet et saepe sequi doloribus! Neque, consectetur.</p>
                </Col>
                <Col xs={12} md={6} className="text-center d-flex align-items-center justify-content-center d-block d-md-block d-lg-none">
                <div className="card bg-dark" >
                    <img src={CoffeePlaceholder} className="card-img-top" alt="..." style={{width: "30vh", height: "40vh", objectFit: "cover"
                    }}>
                    </img>
                </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className="my-5">
            <CarouselComponent />
        </Container>
        </>
    );
}

export default AboutUs