import React from "react";

import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import CheckoutItem from "../components/checkout-item.component";
import StripeCheckoutButton from "../components/stripe-button.component";

import "./checkout.styles.scss";
import { useSelector } from "react-redux";

function CheckoutPage() {
  let total = useSelector(selectCartTotal);
  let cartItems = useSelector(selectCartItems);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantityy</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>

      <div className="test-warning">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>

      <StripeCheckoutButton price={total} />
    </div>
  );
}

export default CheckoutPage;
