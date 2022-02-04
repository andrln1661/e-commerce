import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

import "./stripe-checkout.styles.scss";

import CheckoutForm from "./stripe-form.component";

function StripeCheckout({ price }) {
  const [clientSecret, setClientSecret] = useState("");

  const priceForStripe = price * 100;
  const publishable_key =
    "pk_test_51KNlcoDhUtPGC7pL8cUdmGm3kaWzHL7qOmm5fdPsbNFWcOViQPCLqEvbDXK5HRhxXWuD6ZEJ3LreRE7B5fsxlPl4000dh8pfDb";
  const stripePromise = loadStripe(publishable_key);

  useEffect(() => {
    axios
      .post("http://localhost:5000/payment", { amount: priceForStripe })
      .then((response) => {
        setClientSecret(response.data.clientSecret);
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="stripe-checkout">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default StripeCheckout;
