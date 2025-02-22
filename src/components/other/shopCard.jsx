import { Container, Row, Col } from "react-bootstrap";
import CoffeeExample from "../../assets/coffeeBag.png"
import { Button } from "react-bootstrap";
import { useState } from "react";

function ShopCard(props){

    const [added, setAdded] = useState(false);

    const changeColor = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000); 
    }

    return (
        <Container className="my-1 mx-3 card p-3 rounded-4 img-effect" style={{width: "18rem"}}>
            <Row>
                <h2 className="fw-bold">{props.coffee}</h2>
                <p>{props.underline}</p>
                <div className="d-flex justify-content-center">
                    <img src={CoffeeExample} className="img-fluid object-fit-cover card-img" style={{width: "10rem"}}>
                    </img>
                </div>
                <ul className="ms-4 mb-4">
                {props.specifications.map((spec) => (
                    <li>{spec}</li>
                ))}
                </ul>
                <div className="d-flex justify-content-center">
                <Button className={`w-50 rounded-3 ${added ? "added" : "btn-dark"}`} variant="dark" onClick={() => {props.addItem(props.coffee); changeColor()}}>{added ? "Added" : "Buy"}
                    
                </Button>
                </div>
            </Row>
        </Container>
    )
}

export default ShopCard