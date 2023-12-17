"use client"
import styled from "styled-components";


import { FaTimes } from "react-icons/fa";

import isPropValid from "@emotion/is-prop-valid"; // Import isPropValid from emotion

interface SidebarContainerProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.div
  .withConfig({
    shouldForwardProp: (prop, validate) => isPropValid(prop),
  })

  .attrs<SidebarContainerProps>((props) => ({
    style: {
      right: props.isOpen ? "0" : "-1000px",
    },
  }))<{ isOpen: boolean }>`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 400px) {
      width: 100%;
    }
  `;
  
  
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: #000;
`;
export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(3, 60px);
  }
`;
export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled.a`
  background: #e31837;
  white-space: nowrap;
  text-decoration: none;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  transition: 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    transition: 0.2s ease-in-out;
    background: dodgerblue;
    color: #010606;
  }
`;
