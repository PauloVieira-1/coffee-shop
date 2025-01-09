import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Check from "../../assets/check-circle.svg"

const cardStyle = {
    width: "18rem",
    // height: "20rem",
    // border: "1px solid #fff",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
}

const imgStyle = {
    width: "200px",
    height: "190px",
}

function CoffeeCard(props) {

    const [cart, setCart] = useState();
    const [added, setAdded] = useState(false);

    const addButton = (
        <Button variant='grey position-relative mb-4' className='w-50'><h6 className="fw-bold text-center d-block pt-2" onClick={() => {addtoCart()
            setAdded(true)
        }}>Add to Cart</h6></Button>
    )

    const addedButton = (
        <Button variant='primary text-white position-relative mb-4' className='w-50' onClick={() => addtoCart()}>
                <div className="d-flex justify-content-center align-items-center text-center">
                    <img className="me-2" src={Check}></img>
                    <h6 className=" fw-bold text-center d-block pt-2">
                    Added </h6>
                </div>
</Button>
    )

    useEffect(() => {
        const cartStored = JSON.parse(localStorage.getItem("CoffeCart")) || [];        
        setCart(cartStored);
    }, []);

    const addtoCart = () => {

        const existingItem = cart.find((item) => item.name === props.name);

        const newCart = existingItem ? cart.map((item) => {
            if (item.name === props.name) {
                return { ...item, count: item.count + 1};
            }
            return item;
        }) : [...cart, { name: props.name, count: 1 }];
                
        
        localStorage.setItem("CoffeCart", JSON.stringify(newCart));
        setCart(newCart);

        console.log(newCart);
        console.log(localStorage.getItem("CoffeCart"));
    }


    return (
        <div style={cardStyle} className="card text-start bg-white text-black d-flex align-items-center justify-content-center shadow1 img-effect">
            <h2 className="fw-bold mt-3">{props.name}</h2>
            <img src={props.image} style={imgStyle} alt="" />
            {/* <ul className='mt-3 text-center'> */}
                {props.specs.map((spec) => {
                    return (
                        <p key={spec} className="fw-bold list-unstyled text-center">{spec}</p>                
                )})}
            {added ? addedButton : addButton}        
</div>
    )
}

export default CoffeeCard;