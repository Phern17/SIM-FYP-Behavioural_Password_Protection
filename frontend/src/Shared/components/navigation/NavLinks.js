import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import classes from "./NavLinks.module.css";
//import "./NavLinks.css"

import { Button } from "react-bootstrap";

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className={classes.NavLinks}>
      <li>
        <NavLink to="/home" exact>
          Home
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/pwdgen">Our Services</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <Button onClick={auth.logout}>LOGOUT</Button>
        </li>
      )}
    </ul>
  );
};
export default NavLinks;

// const Styles = styled.div`
//   .navbar {
//     background-color: #484849;
//   }
//   a,
//   .navbar-nav,
//   .navbar-light .nav-link {
//     color: #e3cf5b;

//     &:hover {
//       color: white;
//     }
//   }
//   .navbar-light .navbar-toggler {
//     color: #484849;
//     border-color: #e3cf5b;
//   }
//   .navbar-brand {
//     font-size: 1.4em;
//     color: #e3cf5b;
//     &:hover {
//       color: white;
//     }
//   }
// `;

// //the idea is to hide certain navBar items when it's not logged in and logged in
// const NavigationBar = () => {

//   const auth = useContext(AuthContext);

//   return(
//   <Styles>
//     <Navbar expand="lg">
//       <Navbar.Brand href="/home">
//         <img
//           src={img}
//           width="140"
//           height="60"
//           className="d-inline-block align-top"
//           alt="EzPass logo"
//         />
//       </Navbar.Brand>

//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Item>
//             <Nav.Link href="/home">Home</Nav.Link>
//           </Nav.Item>
//           {/*User can only use our services after he/she log in.*/}
//           {auth.isLoggedIn && (<Nav.Item>
//             <Nav.Link href="/pwdgen">Our Services</Nav.Link>
//           </Nav.Item>) }
//           {!auth.isLoggedIn && (<Nav.Item>
//             <Nav.Link href="/CreateAccount">Sign Up</Nav.Link>
//           </Nav.Item> )}
//           {!auth.isLoggedIn && (<Nav.Item>
//             <Nav.Link href="/login">Login</Nav.Link>
//           </Nav.Item>)}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   </Styles>)
// };

// export default NavigationBar
