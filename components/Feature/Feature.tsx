"use client"

import React from "react";
import { FeatureButton, FeatureContainer } from "./FeatureStyles";


const Feature = () => {
    
  return (
    <FeatureContainer >
      <h1>Meal of the Day</h1>
      <p>Eggs wrap in Meat wrapped in turkey wrapped in pizza</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;