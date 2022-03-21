import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.scss";
export default function Nav() {
  return (
    <div className="header">
      <h1 className="title">Janus's Marketplace</h1>
      <nav>
        <Link className="link" to="/Home">Home</Link>
        <Link className="link" to="/Marketplace">Marketplace</Link>
        <Link className="link" to="/Commission">Commission</Link>
        <Link className="link" to="/Form">Contact Us</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
