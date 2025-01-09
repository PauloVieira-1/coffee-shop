import { Container, Row, Col, Button } from 'react-bootstrap';
import Coffee from "../assets/coffeebag3.jpg";
import CoffeeCard from "../components/CoffeeCard/coffeeCard.jsx";
import AvailableCoffees from "../components/CoffeeCard/AvailableCoffees.js";
import ImgDesc from "../components/ImgDesc/ImgDesc.jsx";

const styles = {
    backgroundImage: `url(${Coffee})`, 
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: '100%',
    height: "100vh",
    position: "relative",
    zIndex: "1",
    top: "0",
  };

  const bg = {
    background: "linear-gradient(to bottom, rgba(26, 30, 34, 1) 49%, white 98%)", 
    height: "270vh",
    width: "100%",
    position: "relative",
    top: "0",
    zIndex: "2",
  };

function Home() {
    return (
     <>
     <div style={bg} className="mb-5">
        <main style = {styles}>
           <Container className="d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle">
            <Row>
              <Col className="text-center">
                <h1 className="text-white fw-bold display-2">
                  The Best <br /> Ugandan Coffee
                </h1>
                <Button id="my-button"  className="btn btn-white rounded-3 px-5 mt-4 text-center"><h4 className="fw-bold text-center d-block pt-1">Shop Now</h4></Button>
              </Col>
            </Row>
           </Container>
        </main>
        <div className="mt-5" >
          <h2 className="text-center text-white fw-bold display-6 mt-5 mb-5">Everything You Need</h2>
        </div>
           <Container className=" mb-5 mt-5 d-fle  justify-content-center text-center" style={{height: "60vh"}}>
            <Row>
                  {Object.keys(AvailableCoffees).map((coffee) => {
                    return (
                    <Col className="d-flex align-items-center justify-content-center text-center mt-5">
                      <CoffeeCard key={coffee} name={AvailableCoffees[coffee].name} specs = {AvailableCoffees[coffee].specs} image = {AvailableCoffees[coffee].img}/>
                    </Col>
                    )
                  })}
            </Row>
           </Container>
      <div className="mt-5">
        <ImgDesc />
     </div>
     </div>
     </>
    );
  }
  
  export default Home;
  