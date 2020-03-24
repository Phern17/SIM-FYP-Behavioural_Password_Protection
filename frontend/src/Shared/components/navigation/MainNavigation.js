import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavigationLinks from "./NavigationLinks";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/Backdrop";

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const OpenDrawer = () => {
    setDrawerIsOpen(true);
  };

  const CloseDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={CloseDrawer} />}
      {drawerIsOpen ? (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavigationLinks />
          </nav>
        </SideDrawer>
      ) : null}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={OpenDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/questionnaire">( ° ͜ʖ͡°)EzPass</Link>
        </h1>
        {/*<nav>
          <NavigationLinks />
        </nav> */}
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
