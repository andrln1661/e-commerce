import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Homepage from "./pages/Homepage.component";
import Shoppage from "./pages/Shoppage.component";
import Header from "./components/Header.component";
import Signpage from "./pages/Signpage.component";

import CheckoutPage from "./pages/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import { selectCurrentUser } from "./redux/user/user.selectors";

function App({ setCurrentUser, currentUser }) {
  let unsubscribeFormAuth = null;
  useEffect(() => {
    unsubscribeFormAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        } else {
          setCurrentUser(userAuth);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsubscribeFormAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="*"
          element={<h1 className="nothing-matching">Nothing Matching Found</h1>}
        />
        <Route exact path="/" element={<Homepage />} />
        <Route path="shop/*" element={<Shoppage />} />
        <Route
          path="sign"
          element={currentUser ? <Navigate to="/" /> : <Signpage />}
        />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
