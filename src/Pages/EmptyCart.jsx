
import Cart from "../assets/cart4.svg"

function EmptyCart() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100 mt-3 p-3">
            <img src={Cart} alt="cart"  className="img-fluid mb-3" style={{width: "75px", height: "75px"}}/>
            <h2>Cart is empty</h2>
            <p>Go back to the shop and add some items to your cart</p>  
        </div>  
    );
}   

export default EmptyCart