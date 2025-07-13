import Tick from "../assets/check-circle.svg";
import Background from "../assets/unsplash4.jpg";

function Success(){
    return (
        <>
        
        <img
        src={Background}
        alt="background"
        className="img-fluid transition-top"
        style={{ width: "100%", height: "60vh", objectFit: "cover" }}
        ></img>
        <div className="text-center p-5 my-5" style={{ minHeight: "50vh" }}>
          <h1 className="mt-5">Checkout Completed</h1>
          <h6>Thank you for your purchase!</h6>
          <img alt="" src={Tick} style={{ width: "100px", height: "100px", filter:"invert(1)"}} className="img-fluid mt-4"></img>
        </div>
        </>
      );
}

export default Success