import React from "react";
import { AppContext } from "../context/AppContext";
import CardProduct from "./CardProduct";
import List from "./List";
import styled from "styled-components";
const LayoutListProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;
  overflow-y: auto;
  @media (max-width: 1637px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1365px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default function ListProducts() {
  return (
      <AppContext.Consumer>
        {(context) => {
          const { products } = context;
          return <List products={products}/>
        }}
      </AppContext.Consumer>

  );
}
