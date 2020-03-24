import React /*, {useContext} */   from "react";
//import { NavLink } from "react-router-dom";
//import {AuthContext} from "../context/AuthContext"
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import img from "./logo.jpg";


/*
const NavigationLinks = props => {
  const auth = useContext(AuthContext)

  return (
    <ul className="nav-links">
     <li>
        <NavLink to="/Home">Home</NavLink>
      </li>
      {!auth.isLoggedIn && (<li>
        <NavLink to="/login">Login</NavLink>
      </li>) }
      {!auth.isLoggedIn && (<li>
        <NavLink to="/CreateAccount">SignUp</NavLink>
      </li>)}
      {auth.isLoggedIn && (<li>
       <NavLink to="/pwdgen">Password Generation</NavLink>
      </li> )}
    </ul>
  );
};
*/

const Styles = styled.div`
  .navbar {
    background-color: #484849;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #e3cf5b;

    &:hover {
      color: white;
    }
  }
  .navbar-light .navbar-toggler {
    color: #484849;
    border-color: #e3cf5b;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #e3cf5b;
    &:hover {
      color: white;
    }
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/home">
        <img
          src={img}
          width="140"
          height="60"
          className="d-inline-block align-top"
          alt="EzPass logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/pwdGen">Our Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/CreateAccount">Sign Up</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;
