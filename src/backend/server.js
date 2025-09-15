import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Stripe from "stripe";

dotenv.config();

const app = express();
const port = process.env.PORT || 80;

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_51QsRhPFb6wjMdquvcPUXVb8zqeu0oTMjhUXhzWy4HbNxPQXjEsfdLd0htK5lTzJNfhgiR9pILgMRhQ7Cd5Ehgkun00andfr9Cc");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Routes
app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).send({
      error: {
        message: "Invalid amount",
      },
    });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
