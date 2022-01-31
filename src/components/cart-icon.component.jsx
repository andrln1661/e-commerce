import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";

import { toggleCartHidden } from "../redux/cart/cart.actions";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";

import ShoppingIcon from "../assets/shopping-bag.svg?component";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount > 99 ? "99+" : itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
