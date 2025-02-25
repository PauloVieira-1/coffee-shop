import express from "express";

require("dotenv").config();
const cors = require("cors");
const app = express(); 
const port = process.env.PORT || 80;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const stripe = require('stripe')('sk_test_51QsRhPFb6wjMdquvcPUXVb8zqeu0oTMjhUXhzWy4HbNxPQXjEsfdLd0htK5lTzJNfhgiR9pILgMRhQ7Cd5Ehgkun00andfr9Cc');


app.post("/create-payment-intent", async (req, res) => {
    const { amount } = req.body;

    if (!amount || amount <= 0){
        return res.status(400).send({
            error: {
                message: "Invalid amount",
            },
        })
    }
    try{
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


