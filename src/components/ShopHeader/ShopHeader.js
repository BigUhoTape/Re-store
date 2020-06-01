import React from "react";
import './ShopHeader.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <a href="#" className="logo text-dark">ReStore</a>
      <a>
        <i className="cart-icon fa fa-shopping-cart" />
        { numItems } items (${ total })
      </a>
    </header>
  );
};

export default ShopHeader;
