import React from "react";

import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import CheckoutItem from "../components/checkout-item.component";
import StripeCheckout from "../components/stripe-checkout.component";

import "./checkout.styles.scss";
import { useSelector } from "react-redux";

function CheckoutPage() {
  let total = useSelector(selectCartTotal);
  let cartItems = useSelector(selectCartItems);

  return (
    <div className="checkout-page">
      <div className="checkout">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>

          <div className="header-block">
            <span>Description</span>
          </div>

          <div className="header-block">
            <span>Quantity</span>
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
      </div>

      <div className="payment">
        <StripeCheckout price={total} />
      </div>

      <div className="test-warning">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVC: 123
        <hr />
        DON'T EVEN TRY TO PROVIDE REAL CARD CREDENTIALS
        <hr />
        Shipping info expires right after you press "Pay Now" button
        <br />
        So provide there whatever you want
      </div>
    </div>
  );
}

export default CheckoutPage;
