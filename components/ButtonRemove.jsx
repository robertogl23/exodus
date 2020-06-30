import React from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
const LayoutButtonRemove = styled.div`
  border: 1px solid red;
  border-radius: 8px;
  width: 80%;
  height: 40px;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  cursor:pointer;
`;

export default function ButtonRemove({ product }) {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <LayoutButtonRemove
            onClick={() => context.deleteProduct(product._id, product.pricio)}
          >
            <span>Eliminar</span>
          </LayoutButtonRemove>
        );
      }}
    </AppContext.Consumer>
  );
}
