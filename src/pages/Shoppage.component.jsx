import React, { useEffect, useState } from "react";
import { useParams, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../components/collections-overview.container";
import CollectionContainer from "../components/collection.container";

import "./Shoppage.styles.scss";

function Shoppage({ fetchCollectionsStartAsync }) {
  let params = useParams();
  useEffect(() => {
    fetchCollectionsStart();
  }, []);

  return (
    <div className="shoppage">
      <Routes>
        <Route path="" element={<CollectionsOverviewContainer />} />
        <Route
          path=":collectionId"
          element={<CollectionContainer params={params} />}
        />
      </Routes>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shoppage);
