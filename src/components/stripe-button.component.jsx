import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishable_key =
    "pk_test_51KNlcoDhUtPGC7pL8cUdmGm3kaWzHL7qOmm5fdPsbNFWcOViQPCLqEvbDXK5HRhxXWuD6ZEJ3LreRE7B5fsxlPl4000dh8pfDb";

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Lts."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishable_key}
    />
  );
}

export default StripeCheckoutButton;
