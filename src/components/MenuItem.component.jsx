import React from "react";
import "./MenuItem.styles.scss";
import { Link } from "react-router-dom";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  return (
    <Link to={linkUrl} className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="subtitle">Shop Now</p>
      </div>
    </Link>
  );
}

export default MenuItem;
