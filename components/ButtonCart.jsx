import React from "react";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";
import CartSvg from "./CartSvg";
const LayoutButtoCart = styled.div`
  border: 1px solid #fff;
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  padding: 12px;
  align-items: center;
  color: #fff;
`;
const SpanDisplayQuantity = styled.span`
  position: absolute;
  margin-left: 44px;
  margin-top: -12px;
  font-size: 12px;
  border-radius: 50%;
  width: 1.8em;
  height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(252, 175, 74);
  color: #000;
  font-size: 12px;
`;
const DisplayTotal = styled.span`
  width: 100%;
  font-size: 12px;
`;
export default function ButtonCart() {
  return (
    <LayoutButtoCart>
      <AppContext.Consumer>
        {(context) => {
          const { cart, total } = context;
          return cart.length ? (
            <>
              <CartSvg />
              <SpanDisplayQuantity>{cart.length}</SpanDisplayQuantity>

              <DisplayTotal> ${total}</DisplayTotal>
            </>
          ) : (
            <CartSvg />
          );
        }}
      </AppContext.Consumer>
    </LayoutButtoCart>
  );
}
