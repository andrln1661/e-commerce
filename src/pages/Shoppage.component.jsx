import React, { useState } from "react";
import SHOP_DATA from "./shop.data.js";
import "./Shoppage.styles.scss";

import CollectionPreview from "../components/collection-preview.component.jsx";

function Shoppage() {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className="shoppage">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}

export default Shoppage;
