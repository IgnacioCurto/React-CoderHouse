import React from "react";
import { CartWidget } from "./CartWidget/CartWidget.js";
import { UserWidget } from "./UserWidget/UserWidget.js";
import { WishWidget } from "./WishWidget/WishWidget.js";
import './NavBar.css'
import navlogo from "./logo.svg";
import { Link } from "react-router-dom";

export const NavBar = ({ id }) => {
  return (
    <div className="navBar">
      <nav>
        <Link to="/">
          <img src={navlogo} className="navLogo" width="50rem" alt="logo" />
        </Link>
        <div className="navLinks">
          <ul>
          <li>
              <Link to={"/"}>Build your Own</Link>
            </li>
            <li>
              <Link to={"/category/hardware"}>Hardware</Link>
            </li>
            <li>
              <Link to={"/category/pre-built"}>Pre-built</Link>
            </li>
          </ul>
        </div>
        <div className="navBarIcons">
          <UserWidget />
          <CartWidget badgeNumber={3} />
          <WishWidget />
        </div>
      </nav>
    </div>
  );
};
