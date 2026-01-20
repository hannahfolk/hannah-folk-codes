// Dependencies
import React from "react";
import {
  faHome,
  faUser,
  faToolbox,
  faFileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Custom Styles
import { Nav, NavLink, LinkIcon } from "./navbar.styles";

const Navbar = () => {
  return (
    <Nav className="navbar" role="navigation" aria-label="Main navigation">
      <NavLink exact to="/" className="navbarLink">
        <LinkIcon icon={faHome} />
        Home
      </NavLink>
      <NavLink to="/about" className="navbarLink">
        <LinkIcon icon={faUser} />
        About
      </NavLink>
      <NavLink to="/skills" className="navbarLink">
        <LinkIcon icon={faToolbox} />
        Skills
      </NavLink>
      <NavLink to="/resume" className="navbarLink">
        <LinkIcon icon={faFileAlt} />
        Resume
      </NavLink>
      <NavLink to="/contact" className="navbarLink">
        <LinkIcon icon={faEnvelope} />
        Contact
      </NavLink>
    </Nav>
  );
};

export default Navbar;
