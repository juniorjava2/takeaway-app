"use client"
import React from "react";

import {
  Facebook,
  FooterContainer,
  Icons,
  IconsContainer,
  ImportantLinks,
  Input,
  InputWrapper,
  Instagram,
  Newsletter,
  Twitter,
  YoutubeI,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <Newsletter>
        <InputWrapper>
          <Input type="text" />
          <button>Subscribe</button>
        </InputWrapper>
        <p>
          Please subscribe to our Newsletter to get the best news and updates on
          healthy foods and organic drinks.
        </p>
      </Newsletter>
      <ImportantLinks>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Cart</a>
      </ImportantLinks>
      <IconsContainer>
        <Icons href="https://www.youtube.com" target="_blank">
          <YoutubeI />
        </Icons>
        <Icons href="#">
          <Instagram />
        </Icons>
        <Icons href="https://www.twitter.com" target ="_blank">
          <Twitter />
        </Icons>
        <Icons href="https://www.facebook.com" target ="_blank">
          <Facebook />
        </Icons>
      </IconsContainer>
      <div>
        <p>All Rights reserved &copy; Copyright</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
