import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn, setIsLoggedIn, token }) {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        {" "}
        Drop Shop
      </Link>

      <ul>
        <li>
          {" "}
          <Link to="/"> Home </Link>
        </li>

        <li>
          <Link to="/SalePage">Items For Sale</Link>
        </li>

        <li>
          <Link to="/Cart">View Cart</Link>
        </li>

        {/* {isLoggedIn ? (
          <li>
            {" "}
            <Link to="/Logout"> Logout </Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )} */}

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
