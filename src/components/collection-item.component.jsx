import React from "react";
import "./collection-item.styles.scss";

import CustomButton from "./custom-button.component";
import { addItem } from "../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

function CollectionItem({ item }) {
  const { id, name, price, imageUrl } = item;
  let dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
}

export default CollectionItem;
