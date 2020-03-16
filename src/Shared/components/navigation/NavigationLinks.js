import React from "react"
import { NavLink } from "react-router-dom"
import './NavigationLinks.css'

const NavigationLinks = (props) =>{
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">Login Page</NavLink>
            </li>
            <li>
                <NavLink to="/questionnaire">Questionnaire</NavLink>
            </li>
        </ul>
    )
}

export default NavigationLinks;