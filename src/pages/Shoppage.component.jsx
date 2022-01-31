import React from "react";

import { Outlet, useParams, Route, Routes } from "react-router-dom";

import CollectionsOverview from "../components/collections-overview.component";
import Collection from "../pages/collection.component";

import "./Shoppage.styles.scss";

function Shoppage() {
  let params = useParams();
  return (
    <div className="shoppage">
      <Routes>
        <Route path="" element={<CollectionsOverview />} />
        <Route path=":collectionId" element={<Collection params={params} />} />
      </Routes>
    </div>
  );
}

export default Shoppage;
