import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";

import "./App.css";

import Homepage from "./pages/Homepage.component";
import Shoppage from "./pages/Shoppage.component";
import Header from "./components/Header.component";
import Signpage from "./pages/Signpage.component";
import CheckoutPage from "./pages/checkout.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
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

export default App;
