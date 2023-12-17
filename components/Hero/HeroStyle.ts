"use client"
import styled from "@emotion/styled";
import ImgBg from "../../public/images/grilledchicken.jpg";

interface HeroContainerProps {
    backgroundImage: string;
  }
  //url(${({ backgroundImage }) => backgroundImage});
export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${ImgBg.src});

  height: 100vh;
  background-position: center;
  background-size: cover;
  width:100vw;
`;

export const HeroContent = styled.div`
  display: flex;
  height: 500px;
`;
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and(max-width:650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  text-align: center;
`;
export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;
export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    cursor: pointer;
    background: #ffc500;
    transition: ease-out;
    color: #000;
  }
`;
