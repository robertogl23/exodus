import React from "react";
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
  height: 100%;
  width: 260px;
  box-sizing: border-box;
`;
const LayoutImg = styled.div`

  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;
const LayoutButtonCard = styled.div`
display: flex;
justify-content: center;
`;

const TitleDisplay = styled.p`

  color: #484848;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: -.4px;

  
`;
const NameProvider = styled.div`
  color: red;
  margin-left: 1em;
  margin-top: -18px;
  display: inherit;
    padding-top: inherit;
`;
const LayoutDescription = styled.div`
padding-top:9px;

`;
const PriceDisplay = styled.p`

  margin-top: -.1em;
  color: #484848;
  font-size: 20px;
  font-weight:700;
  display: inherit;
    padding-top: inherit;


`;

export default function CardProduct({ product }) {
  return (
    <LayoutCard>
      <LayoutImg>
        <Img src="https://res.cloudinary.com/walmart-labs/image/upload/w_225,dpr_auto,f_auto,q_auto:good/mg/gm/3pp/asr/8c5df9cc-7350-44cc-8c40-f99ec6d3b8d9.ff43c2f54b399e08f67683aeef3aec7a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff" />
      </LayoutImg>
      <LayoutDescription>
        <a>
          <TitleDisplay>
            Laptop Gamer DELL G7 7790 17 Nvidia GeForce Rtx 2060 Core I5
          </TitleDisplay>
        </a>
      <NameProvider>
        <a>dell</a>
        <PriceDisplay>$1993</PriceDisplay>
      </NameProvider>
      </LayoutDescription>
      <LayoutButtonCard>
        <ButtonAddCart />
      </LayoutButtonCard>
    </LayoutCard>
  );
}
