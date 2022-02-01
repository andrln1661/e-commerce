import React, { useEffect, useState } from "react";

import { useParams, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../redux/shop/shop.selectors";

import WithSpinner from "../components/with-spinner.component";
import CollectionsOverview from "../components/collections-overview.component";
import Collection from "../pages/collection.component";

import "./Shoppage.styles.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

function Shoppage({
  isCollectionFetching,
  fetchCollectionsStartAsync,
  isCollectionLoaded,
}) {
  let params = useParams();

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);

  return (
    <div className="shoppage">
      <Routes>
        <Route
          path=""
          element={
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />
          }
        />
        <Route
          path=":collectionId"
          element={
            <CollectionWithSpinner
              isLoading={!isCollectionLoaded}
              params={params}
            />
          }
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shoppage);
