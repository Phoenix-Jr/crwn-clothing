import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.scss";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
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
};

export default Navigation;
