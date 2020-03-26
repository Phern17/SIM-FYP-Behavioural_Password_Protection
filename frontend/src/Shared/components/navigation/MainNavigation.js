import React from "react";
//import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import img from "./logo.jpg";

const MainNavigation = props => {
  return (
    <React.Fragment>
      <MainHeader>
        <Navbar.Brand href="/home">
          <img
            src={img}
            width="140"
            height="60"
            className="d-inline-block align-top"
            alt="EzPass logo"
          />
        </Navbar.Brand>
        <NavLinks />
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
