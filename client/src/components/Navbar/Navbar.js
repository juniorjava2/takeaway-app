import React from "react";
import { Bar, Bars, Nav, NavIcon, NavLink } from "./NavbarStyles";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLink href="#">BigJim`s</NavLink>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
};

export default Navbar;
