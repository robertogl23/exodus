import React from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
const ButtonAddToCart = styled.div`
  border: 1px solid var(--headerColor);
  border-radius: 8px;
  width: 80%;
  height: 40px;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;
const Span = styled.span`
  height: 100%;
  width: 26px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
const SpanT = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
export default function ButtonAddCart({ id, product }) {
  return (
    <ButtonAddToCart>
      <AppContext.Consumer>
        {(context) => {
          const { getQuantityById, removeProduct, addToCart } = context;
          return getQuantityById(id) ? (
            <>
              <Span onClick={() => removeProduct(product._id, product.pricio)}>
                -
              </Span>
              <span>{getQuantityById(id)}</span>
              <Span onClick={() => addToCart(product)}>+</Span>
            </>
          ) : (
            <div
              style={{
                width: "100%",
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => context.addToCart(product)}
            >
              <SpanT>Agregar</SpanT>
            </div>
          );
        }}
      </AppContext.Consumer>
    </ButtonAddToCart>
  );
}
