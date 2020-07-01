import React, { useState } from "react";
import styled from "styled-components";
import ListImages from "./ListImages";
import ButtonAddCart from "./ButtonAddCart";
import Feature from "./Feature";
const LayoutSelect = styled.div`
  height: 450px;
  width: 100%;
  top: 56px;
  box-sizing: border-box;
  display: grid;
  padding-right:480px;
  grid-template-columns: 25% 40% 35%;
  grid-gap: 20px;
  @media (max-width: 967px) {
    padding: 0;
    width: 100%;
    grid-template-columns: 20% 35% 45%;
  }
`;
const ImageContainer = styled.div`
  box-sizing: border-box;


  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LayoutDescription = styled.div`

  box-sizing: border-box;
  width: 400px;
  height: 450px;
`;
const Imagen = styled.img`
  width: 100%;
  max-width: 300px;
`;
const BarOpcions = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  
  @media (max-width: 967px) {
    justify-content: space-around;
    width: 100vh;
  }
`;
const OpcionDes = styled.div`
  ${(props) => props.select && "border-bottom: 2px solid blue;"}
  width: 130px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const OpcionCara = styled.div`
  ${(props) => !props.select && "border-bottom: 2px solid blue;"}
  width: 130px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default function ProductSelected({ product }) {
  const [imagenes, setImagenes] = useState(product[0].urlImagenes[0]);
  const [select, setSelect] = useState(true);
  const [selectC, setSelectC] = useState(true);
  const handleSelectImagen = (url) => {
    setImagenes(url);
  };
  return (
    <>
      <LayoutSelect>
        <div>
          <ListImages
            urls={product[0].urlImagenes}
            handleSelectImagen={handleSelectImagen}
          />
        </div>
        <ImageContainer>
          <Imagen src={imagenes} />
        </ImageContainer>
        <LayoutDescription>
          <h1 style={{ marginTop: 80, fontSize: 18 }}>
            {product[0].nombreProducto}
          </h1>
          <h4 style={{ marginTop: 20, fontSize: 18 }}>
            ${product[0].pricio}.00
          </h4>
          <div style={{ width: 300 }}>
            <ButtonAddCart id={product[0]._id} product={product[0]} />
          </div>
        </LayoutDescription>
      </LayoutSelect>
      <BarOpcions>
        <OpcionDes select={select} onClick={() => setSelect(true)}>
          Descripción
        </OpcionDes>
        <OpcionCara select={select} onClick={() => setSelect(false)}>
          Características
        </OpcionCara>
      </BarOpcions>
      <div>
        {select ? (
          <div style={{ width: "60%" }}>
            <p>{product[0].descripcion}</p>
          </div>
        ) : (
          <div style={{ width: "80%" }}>
            <Feature f={product[0].caracteristicas} />
          </div>
        )}
      </div>
    </>
  );
}
