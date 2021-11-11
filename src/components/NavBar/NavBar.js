import React from "react";
import "../../styles.css";
import AOS from 'aos';
import "aos/dist/aos.css";
import { CartWidget } from "./CartWidget/CartWidget.js";
import { UserWidget } from "./UserWidget/UserWidget.js";
import { WishWidget } from "./WishWidget/WishWidget.js";
import navlogo from "./logo.svg";
import { Link } from "react-router-dom";

export const NavBar = ({ id }) => {
  return (
    <div className="navBar">
      <nav>
        <Link to="/">
          <img src={navlogo} className="navLogo" alt="logo" width="60rem" />
        </Link>
        <div className="navLinks">
          <ul>
            <li>
              <Link to={"/build-your-own"}>Build your own</Link>
            </li>
            <li>
              <Link to={"/category/hardware"}>Hardware</Link>
              <ul className="submenu animate__animated animate__fadeIn animate__faster">
                <Link to={"/type/CPUs"}><li>Processors</li></Link>
                <Link to={"/type/motherboards"}><li>Motherboards</li></Link>
                <Link to={"/type/GPUs"}><li>Graphics cards</li></Link>
                <Link to={"/type/RAMs"}><li>RAMs</li></Link>
                <Link to={"/type/coolers"}><li>Coolers</li></Link>
                <Link to={"/type/PSUs"}><li>Power Supplies</li></Link>
              </ul>
            </li>
            <li>
              <Link to={"/category/pre-built"}>Pre-built</Link>
            </li>
          </ul>
        </div>
        <div className="navBarIcons">
          <UserWidget />
          <CartWidget />
          <WishWidget />
        </div>
      </nav>
    </div>
  );
};
