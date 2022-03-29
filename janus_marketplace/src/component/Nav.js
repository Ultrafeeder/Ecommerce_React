import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.scss";
import multicolor from "../slider/multicolor.png";
import resIcon from "../imgs/menu_icon.png";

export default function Nav() {
  return (
    <div className="header">
      <div className="flex-wrapper">
        <img className="header-img" src={multicolor} alt="emblem" />
        <h1 className="title">JANUS'S MARKETPLACE</h1>
        <nav>
          <Link className="link" to="/Home">
            Home
          </Link>
          <Link className="link" to="/Marketplace">
            Marketplace
          </Link>
          <Link className="link" to="/Commission">
            Commission
          </Link>
          <Link className="link" to="/Form">
            Contact
          </Link>
        </nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
