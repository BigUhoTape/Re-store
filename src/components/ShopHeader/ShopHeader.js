import React from "react";
import './ShopHeader.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/Re-store/">
        <div className="logo text-dark">ReStore</div>
      </Link>
    </header>
  );
};

export default ShopHeader;
