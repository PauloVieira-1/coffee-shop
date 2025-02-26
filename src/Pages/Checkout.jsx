import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import CoffeeBag from "../assets/coffeebag.jpg";
import { Button } from 'react-bootstrap';

const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
    }
  };

  return (
    <>
          <img
        src={CoffeeBag}
        className="img-fluid transition-top"
        style={{ width: "100%", height: "60vh", objectFit: "cover" }}
      ></img>
      <div className='text-center mt-5'>
      <h1 className='display-3'>Checkout</h1>
      <p>Complete your purchase by entering your payment details</p>
      </div>
    <form className="p-5 mt-2" onSubmit={handleSubmit}>
      <PaymentElement />
      <Button type="submit" className='mt-4 text-white'>Submit</Button>
      {/* <button disabled={!stripe}>Submit</button> */}
    </form>
    </>
  )
};

export default CheckoutForm;