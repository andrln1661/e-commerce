import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collections-overview.styles.scss";

import { selectCollectionsForPreview } from "../redux/shop/shop.selectors";
import CollectionPreview from "./collection-preview.component";
import { useSelector } from "react-redux";

function CollectionsOverview() {
  let collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} id={id} />;
      })}
    </div>
  );
}

export default CollectionsOverview;
