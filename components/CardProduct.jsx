import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ButtonAddCart from "./ButtonAddCart";
const LayoutCard = styled.div`
  border: 1px solid #dedede;
  display: grid;
  grid-template-rows: 60% 28% 13%;
  height: 100%;
  height: 450px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 437px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Img = styled.img`
  width: 100%;
  margin: auto;
  display: block;
`;
const LayoutImg = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
`;
const LayoutButtonCard = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleDisplay = styled.p`
  color: #484848;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: -0.4px;
  cursor:pointer;
`;
const NameProvider = styled.div`
  color: var(--headerColor);
  margin-left: 1em;
  margin-top: -18px;
  display: inherit;
  padding-top: inherit;
`;
const LayoutDescription = styled.div`
  padding-top: 9px;
  
`;
const PriceDisplay = styled.p`
  margin-top: -0.1em;
  color: #484848;
  font-size: 20px;
  font-weight: 700;
  display: inherit;
  padding-top: inherit;
`;
const ImDisplay = styled.a`
padding: 0;
    margin: auto;
`;

export default function CardProduct({ product }) {
  return (
    <LayoutCard>
      <LayoutImg>
        <Link href="[id]" as={`${product.urlSeo}`}>
          <a>
            <Img src={product.urlImagenes[0]} />
          </a>
        </Link>
      </LayoutImg>
      <LayoutDescription>
        <Link href="[id]" as={`${product.urlSeo}`}>
          <ImDisplay>
            <TitleDisplay>{product.nombreProducto}</TitleDisplay>
          </ImDisplay>
        </Link>
        <NameProvider>
          <a>{product.proveedor.nombreProveedor}</a>
          <PriceDisplay>${product.pricio}.00</PriceDisplay>
        </NameProvider>
      </LayoutDescription>
      <LayoutButtonCard>
        <ButtonAddCart id={product._id} product={product} />
      </LayoutButtonCard>
    </LayoutCard>
  );
}
