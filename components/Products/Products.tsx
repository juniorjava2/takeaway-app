"use client"
import React from "react";
import {
  ProductButton,
  ProductCard,
  ProductDesc,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductTitle,
} from "./ProductStyle";

interface Product {
    img: string;
    alt: string;
    name: string;
    desc: string;
    price: string;
    button: string;
  }
  
  interface ProductsProps {
    heading: string;
    data: Product[];
  }

 const Products = ({ heading, data }:ProductsProps) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {data.map((product, index) => (
          <ProductCard key={index}>
            <ProductImg src={product.img} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price} </ProductPrice>
              <ProductButton>{product.button}</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsWrapper>
    </ProductsContainer>
  );
};
export default Products
