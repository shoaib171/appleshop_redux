/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const HandleReducers = useSelector((state) => state.HandleReducers);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm ">
        <div className="container-fluid ">
          <NavLink className="navbar-brand fw-bold" to="/">
            <span className="fa fa-apple"></span> Apple_Shop
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0  ">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {isAuthenticated ? (
                <NavLink
                  to="/"
                  className="btn btn-outline-light ms-2"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <i className="fa fa-sign-out me-2"></i>
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/cart"
                  className="btn btn-outline-light ms-2"
                  onClick={() => loginWithRedirect()}
                >
                  <i className="fa fa-sign-in me-2"></i>
                  Login
                </NavLink>
              )}

              <NavLink to="/cart" className="btn btn-outline-light ms-2">
                <i className="fa fa-cart-plus me-2"></i>
                Cart ({HandleReducers.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
