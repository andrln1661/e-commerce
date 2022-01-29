import React from "react";

import "./Shoppage.styles.scss";

import CollectionsOverview from "../components/collections-overview.component";

function Shoppage() {
  return (
    <div className="shoppage">
      <CollectionsOverview />
    </div>
  );
}

export default Shoppage;
