import React from "react";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";

import CustomButton from "./custom-button.component";
import CartItem from "./cart-item.component";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { selectCartHidden } from "../redux/cart/cart.selectors";
import { useSelector, useDispatch } from "react-redux";

function CartDropdown() {
  let cartItems = useSelector(selectCartItems);
  let hidden = useSelector(selectCartHidden);
  let total = useSelector(selectCartTotal);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className={`cart-dropdown ${hidden ? 'hidden' : ''}`}>
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
        disabled={total ? false : true}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default CartDropdown;
