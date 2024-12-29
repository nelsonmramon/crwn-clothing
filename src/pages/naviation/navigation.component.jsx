import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";

function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link>
          <div className="logo-container" to="/">
            <img src={CrwnLogo} alt="Crwn-logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
