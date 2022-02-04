import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./cart-icon.styles.scss";

import { toggleCartHidden } from "../redux/cart/cart.actions";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";

import ShoppingIcon from "../assets/shopping-bag.svg?component";

function CartIcon() {
  let itemCount = useSelector(selectCartItemsCount);
  let dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount > 99 ? "99+" : itemCount}</span>
    </div>
  );
}

export default CartIcon;
