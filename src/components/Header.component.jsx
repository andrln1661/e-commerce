import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.styles.scss";

import Logo from "../assets/crown.svg?component";
import CartIcon from "./cart-icon.component";
import CartDropdown from "./cart-dropdown.component";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../redux/cart/cart.selectors";
import { selectCurrentUser } from "../redux/user/user.selectors";

import { signOutStart } from "../redux/user/user.actions";

function Header({ currentUser, hidden, signOutStart }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOutStart}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="sign">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
