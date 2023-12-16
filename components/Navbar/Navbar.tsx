"use client"
import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarStyles";

interface NavbarProps {
    toggle?: () => void;
  }

const Navbar = ({ toggle }:NavbarProps) => {
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
