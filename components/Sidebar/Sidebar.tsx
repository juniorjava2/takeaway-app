"use client"
import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarStyles";

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
  }
export const Sidebar = ({ isOpen, toggle }:SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink href="#">Pizzas</SidebarLink>
        <SidebarLink href="#">Desserts</SidebarLink>
        <SidebarLink href="#">Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute href="#">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};
