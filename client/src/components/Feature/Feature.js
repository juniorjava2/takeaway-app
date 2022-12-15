import React from "react";
import { FeatureButton, FeatureContainer } from "./FeatureStyles";

export const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Meal of the Day</h1>
      <p>Eggs wrap in Meat wrapped in turkey wrapped in pizza</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};
