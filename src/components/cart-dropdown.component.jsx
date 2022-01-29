import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import { selectCartItems } from "../redux/cart/cart.selectors";

import CustomButton from "./custom-button.component";
import CartItem from "./cart-item.component";
import { toggleCartHidden } from "../redux/cart/cart.actions";

function CartDropdown({ cartItems, dispatch }) {
  let navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>

      <CustomButton
        inverted
        to="checkout"
        onClick={() => {
          navigate(`/checkout`);
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
