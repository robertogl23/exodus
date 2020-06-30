import React from "react";
import styled from "styled-components";
import ButtonAddCart from "./ButtonAddCart";
import { AppContext } from "../context/AppContext";
const LayoutCar = styled.div`
  border: 1px solid #dedede;
  height: 100%;
  width: 400px;
  position: fixed;
  right: 0px;
  top: 56px;
  box-sizing: border-box;
  transform: translateX(0px);
  transition: transform 150ms ease-out 0s;
  @media (max-width: 967px) {
    transform: translateX(24.8767rem);
  }
`;
const LayoutTitleCart = styled.div`
  border-bottom: 1px solid #dedede;
  box-sizing: border-box;

  height: 6.8%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 600;
`;
const LayoutItemsCart = styled.div`
  height: 70%;
  overflow-y: auto;
  box-sizing: border-box;
`;
const LayoutItemCart = styled.div`
  border-bottom: 1px solid #dedede;
  height: 10em;
`;
const LayoutImage = styled.div`
  box-sizing: border-box;
  width: 6em;
  height: 60%;
  padding: 8px;
`;
const Image = styled.img`
  width: 100%;
`;
const LayoutDescripcions = styled.div`
  width: 74.8%;
  box-sizing: border-box;
  height: 60%;
  margin-left: 6em;
  margin-top: -96px;
`;
const LayoutInfo = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 65%;
  padding: 4px;
  font-size: 12px;
`;
const LayoutPrice = styled.div`
  box-sizing: border-box;
  box-sizing: content-box;
  margin-left: 11.5em;
  margin-top: -94.5px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LayoutButtons = styled.div`
  display: flex;
  justify-content: space-around;
  height: 4em;
  padding: 6px;
  box-sizing: border-box;
  align-items: center;
`;
export default function CartLayout() {
  return (
    <LayoutCar>
      <LayoutTitleCart>Carrito de Compras</LayoutTitleCart>
      <LayoutItemsCart>
        <AppContext.Consumer>
          {(context) => {
            const { cart } = context;
            return cart.map((e, i) => (
              <LayoutItemCart key={i}>
                <LayoutImage>
                  <Image src={e.urlImagenes[0]} />
                </LayoutImage>
                <LayoutDescripcions>
                  <LayoutInfo>
                    <p>{e.nombreProducto}</p>
                    <p>{e.proveedor.nombreProveedor}</p>
                  </LayoutInfo>
                  <LayoutPrice>
                    <p>${e.pricio}.00</p>
                  </LayoutPrice>
                </LayoutDescripcions>
                <LayoutButtons>
                  <ButtonAddCart id={e._id} product={e}/>
                  <div style={{ width: 15 }}></div>
                  <ButtonAddCart />
                </LayoutButtons>
              </LayoutItemCart>
            ));
          }}
        </AppContext.Consumer>
      </LayoutItemsCart>
    </LayoutCar>
  );
}
