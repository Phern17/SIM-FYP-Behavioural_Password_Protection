import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavigationLinks from './NavigationLinks';

const MainNavigation = props => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to='/questionnaire'>EzPass</Link>
      </h1>
      <nav>
          <NavigationLinks/>
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
