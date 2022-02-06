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
    res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
  });
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.post("/payment", async (req, res) => {
  const { amount, previousIntent } = req.body;

  try {
    if (previousIntent !== null) {
      await stripe.paymentIntents
        .cancel(previousIntent)
        .then((res) => console.log("Intent " + previousIntent + " Cancelled"));
    }
  } catch (error) {}

  if (amount === 0) {
    res.send({
      clientSecret: null,
    });
    return;
  }

  console.log("Request with totalPrice of $" + amount / 100);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    intent: paymentIntent.id,
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
