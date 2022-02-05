const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const serveStatic = require("serve-static");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(serveStatic(path.join(__dirname, "/client/dist")));
  app.get("*", (req, res) => {
    res.send(path.join(__dirname, "/client/dist", "index.html"));
  }); 
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.post("/payment", async (req, res) => {
  const { amount } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",

    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
