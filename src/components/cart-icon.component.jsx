import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";

import { toggleCartHidden } from "../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

function CartIcon(props) {
  const items = 103;
  const { toggleCartHidden } = props;
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{items > 99 ? "99+" : items}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
