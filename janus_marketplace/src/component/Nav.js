import * as React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/Marketplace">Marketplace</Link>
        <Link to="/Form">Contact Us</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
