import React from "react";
import './ShopHeader.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div>
          <i className="cart-icon fa fa-shopping-cart" />
          { numItems } items (${ total })
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
