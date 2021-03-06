import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "./collection-item.component";
import { useNavigate } from "react-router-dom";

function CollectionPreview({ title, items }) {
  let navigate = useNavigate();
  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() => navigate(`${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
