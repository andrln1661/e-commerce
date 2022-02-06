import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

import "./stripe-checkout.styles.scss";

import CheckoutForm from "./stripe-form.component";

function StripeCheckout({ price }) {
  const [clientSecret, setClientSecret] = useState("");
  const [intent, setIntent] = useState(null);

  const priceForStripe = price * 100;
  const publishable_key =
    "pk_test_51KNlcoDhUtPGC7pL8cUdmGm3kaWzHL7qOmm5fdPsbNFWcOViQPCLqEvbDXK5HRhxXWuD6ZEJ3LreRE7B5fsxlPl4000dh8pfDb";
  const stripePromise = loadStripe(publishable_key, {
    locale: "en",
  });

  useEffect(() => {
    axios
      .post("http://localhost:5000/payment", {
        amount: priceForStripe,
        previousIntent: intent,
      })
      .then((response) => {
        setClientSecret(response.data.clientSecret);
        setIntent(response.data.intent);
      });

    return () => {
      axios.post("http://localhost:5000/payment", {
        amount: 0,
        previousIntent: intent,
      })
    };
  }, [price]);

  const appearance = {
    theme: "flat",
    variables: {
      fontFamily: ' "Gill Sans", sans-serif',
      fontLineHeight: "1.5",
      borderRadius: "10px",
      colorBackground: "#F6F8FA",
      colorPrimaryText: "#262626",
    },
    rules: {
      ".Block": {
        backgroundColor: "var(--colorBackground)",
        boxShadow: "none",
        padding: "12px",
      },
      ".Input": {
        padding: "12px",
      },
      ".Input:disabled, .Input--invalid:disabled": {
        color: "lightgray",
      },
      ".Tab": {
        padding: "10px 12px 8px 12px",
        border: "none",
      },
      ".Tab:hover": {
        border: "none",
        boxShadow:
          "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)",
      },
      ".Tab--selected, .Tab--selected:focus, .Tab--selected:hover": {
        border: "none",
        backgroundColor: "#fff",
        boxShadow:
          "0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)",
      },
      ".Label": {
        fontWeight: "500",
      },
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="stripe-checkout">
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
      ) : (
        <div className="payment-loading">Loading Payment</div>
      )}
    </div>
  );
}

export default StripeCheckout;
