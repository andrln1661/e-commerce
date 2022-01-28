import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import { selectCartItems } from "../redux/cart/cart.selectors";

import CustomButton from "./custom-button.component";
import CartItem from "./cart-item.component";
import { toggleCartHidden } from "../redux/cart/cart.actions";

function CartDropdown({ cartItems, dispatch }) {
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

      <CustomButton inverted>
        <Link
          to="checkout"
          onClick={() => {
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </Link>
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
