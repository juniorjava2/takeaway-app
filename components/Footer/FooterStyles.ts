"use client"
import styled from "@emotion/styled";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const FooterContainer = styled.div`
  display: flex;
  background-color: #b3541e;
  flex: 100%;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
  @media screen and (max-width: 759px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 40%;
  padding: 0.7rem;
  p {
    font-size: 17px;
    color: black;
    font-weight: 500;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Input = styled.input`
  width: 100%;
  height: 25px;
`;

export const ImportantLinks = styled.div`
  display: flex;
  flex: 30%;
  justify-content: space-evenly;
  a {
    text-decoration: none;
    color: yellow;
    font-weight: 600;
    margin-left:1rem;
  }
  @media screen and (max-width: 759px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 5px;
   
  }
`;
export const IconsContainer = styled.div`
  display: flex;
  flex: 30%;
  align-items: center;
  justify-content: space-evenly;
  
`;

export const Icons = styled.a`
  text-decoration: none;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 759px) {
    margin-left: 1rem;
  }
`;
export const Facebook = styled(FaFacebook)`
  color: blue;
  font-size: 34px;
`;
export const Twitter = styled(FaTwitter)`
  color: dodgerblue;
  font-size: 35px;
`;
export const Instagram = styled(FaInstagram)`
  color: orange;
  font-size: 35px;
`;
export const YoutubeI = styled(FaYoutube)`
  color: red;
  font-size: 35px;
`;
