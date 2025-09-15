import {
  useStripe,
  useElements,
  PaymentElement,
  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import CoffeeBag from "../assets/coffeebag.jpg";
import { Button, Spinner } from 'react-bootstrap';

const stripePromise = loadStripe("pk_test_51QsRhPFb6wjMdquvTpSk3zcc0QmBsfpgFj93vYigON7NbdTQiGxNFVXRGpDMocPA6nHE4dayUS3Nrgly5a9g55u4005hIKHfTg");

const CheckoutFormInner = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const returnUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:3000/success"
        : "https://your-frontend-domain.com/success"; // Replace with deployed frontend URL

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: returnUrl,
      },
    });

    if (error) {
      console.error(error.message);
      setIsProcessing(false);
    }
  };

  return (
    <>
      <img
        src={CoffeeBag}
        alt="coffeebag"
        className="img-fluid transition-top"
        style={{ width: "100%", height: "60vh", objectFit: "cover" }}
      />
      <div className='text-center mt-5'>
        <h1 className='display-3'>Checkout</h1>
        <p>Complete your purchase by entering your payment details</p>
      </div>
      <form className="p-5 mt-2" onSubmit={handleSubmit}>
        <PaymentElement />
        <Button 
          type="submit" 
          className='mt-4 text-white' 
          disabled={!stripe || !elements || isProcessing}
        >
          {isProcessing ? <Spinner animation="border" size="sm" /> : 'Submit'}
        </Button>
      </form>
    </>
  );
};

const CheckoutForm = ({ total = 0 }) => {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    if (!total || total <= 0) return;

    fetch("https://coffee-shop-backend-eh68.onrender.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total * 100 }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(err => console.error(err));
  }, [total]);

  const options = {
    clientSecret,
    appearance: { theme: "stripe" },
    loader: "auto",
  };

  if (!clientSecret) {
    return (
      <div className="text-center mt-5">
        <h1>Preparing checkout...</h1>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutFormInner />
    </Elements>
  );
};

export default CheckoutForm;
