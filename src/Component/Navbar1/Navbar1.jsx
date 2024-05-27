import React from "react";
import "./Navbar1.css";
import logo from "../../assets/logo.png";
import wish from "../../assets/wishlist.png";
import account from "../../assets/account.png";
import cart from "../../assets/cart.png";

const Navbar = () => {
  return (
    <nav className="navbar1">
      <div className="navbar1-brand">
        <img src={logo} alt="" />
        <h1>Quick Pick</h1>
      </div>
      <div className="navbar1-search">
        <input type="text" placeholder="What are you shooping for" />
        <button type="submit">Search</button>
      </div>
      <div className="navbar1-links">
      <div className="wish">
      <img src={wish} alt="" />
      <a className="navbar1-icon">
          Wishlist
        </a>
      </div>
        <div className="wish">
        <img src={cart} alt="" />
        <a className="navbar1-icon">‎ ‎ ‎  Cart</a>
        </div>
        <div className="wish">
        <img src={account} alt="" />
        <a className="navbar1-icon">My Account</a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
