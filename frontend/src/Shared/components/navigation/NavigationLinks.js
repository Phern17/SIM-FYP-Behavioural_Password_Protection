import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationLinks.css";

const NavigationLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Login Page</NavLink>
      </li>
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/pwdgen">Password Generation</NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinks;
