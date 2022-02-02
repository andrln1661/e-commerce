import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../components/collection-item.component";
import { selectCollection } from "../redux/shop/shop.selectors";

import "./collection.styles.scss";

function Collection() {
  let params = useParams();
  let collection = useSelector(selectCollection(params.collectionId));
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
