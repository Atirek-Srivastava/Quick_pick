import React from "react";
import "./Navbar.css"; // Optional: For adding custom styles
import arrow from "../../assets/down-arrow.png";
import menu from "../../assets/menu.ico";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={menu} alt="" className="menu-logo" /> Shop by Category{" "}
        <img src={arrow} alt="" />
      </div>

      <ul className="navbar-links">
        <li className="dropdown">
          Home <img src={arrow} alt="" />
          <ul className="dropdown-menu">
            <li>Home</li>
          </ul>
        </li>

        <li className="dropdown">
          Deals Today <img src={arrow} alt="" />
          <ul className="dropdown-menu">
            <li>Deal Of The Day</li>
          </ul>
        </li>

        <li className="dropdown">
          Blog <img src={arrow} alt="" />
          <ul className="dropdown-menu">
            <li>Blog</li>
          </ul>
        </li>

        <li className="dropdown">
          Pages <img src={arrow} alt="" />
          <ul className="dropdown-menu">
            <li>Pages</li>
          </ul>
        </li>

        <li className="dropdown">
          Services <img src={arrow} alt="" />
          <ul className="dropdown-menu">
            <li>Services</li>
          </ul>
        </li>

        <li className="dropdown">
          Frozen Food <img src={arrow} alt="" />
          <ul className="dropdown-menu">
            <li>Frozen Food</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
