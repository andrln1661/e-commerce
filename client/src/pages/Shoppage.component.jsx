import React, { useEffect, useState } from "react";
import { useParams, Route, Routes } from "react-router-dom";

import { fetchCollectionsStart } from "../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../components/collections-overview.container";
import CollectionContainer from "../components/collection.container";

import "./Shoppage.styles.scss";
import { useDispatch } from "react-redux";

function Shoppage() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shoppage">
      <Routes>
        <Route path="" element={<CollectionsOverviewContainer />} />
        <Route path=":collectionId" element={<CollectionContainer />} />
      </Routes>
    </div>
  );
}

export default Shoppage;
