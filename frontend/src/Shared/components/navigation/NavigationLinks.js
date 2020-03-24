import React , {useContext}  from "react";
import { NavLink } from "react-router-dom";
import "./NavigationLinks.css";
import {AuthContext} from "../context/AuthContext"

const NavigationLinks = props => {
  const auth = useContext(AuthContext)

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Login Page</NavLink>
      </li>
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      {auth.isLoggedIn && ( <li>
       <NavLink to="/pwdgen">Password Generation</NavLink>
      </li> )}
    </ul>
  );
};

export default NavigationLinks;
