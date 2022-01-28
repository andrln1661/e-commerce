import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Homepage from "./pages/Homepage.component";
import Shoppage from "./pages/Shoppage.component";
import Header from "./components/Header.component";
import Signpage from "./pages/Signpage.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

function App(props) {
  let unsubscribeFormAuth = null;
  useEffect(() => {
    const setCurrentUser = props.setCurrentUser;
    unsubscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
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
    });

    return () => {
      unsubscribeFormAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<h1>Nothing Matching Found</h1>} />
        <Route exact path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route
          path="/sign"
          element={props.currentUser ? <Navigate to="/" /> : <Signpage />}
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
