const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");

const secretKey = "sk_test_51HPvTmH6MnslJF7wHvp18NAQjti9NT652nMzDNrkCMeuDQNirrnb7lWuOdScNmnXpCx8UPSzV8GBZyJXzcBrqM3400LOUemqu3";
const stripe = require("stripe")(secretKey);

const app = express()

//middleware
app.use(cors({origin: true}))
app.use(express.json())


//routes
app.get('/', (req, res) => {
    res.status(200).send("Welcome to my app")
})

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log('payment request receives', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })

    res.status(201).send({
        clientSecret: paymentIntent
    })
})

//listen
exports.api = functions.https.onRequest(app)
