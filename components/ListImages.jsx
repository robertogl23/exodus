import React from "react";
import styled from "styled-components";
const LayoutListImagenes = styled.div`
  width: 100%;
  height: 450px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
`;
const LayoutImage = styled.div`
  width: 100px;
  height: 100px;
  cursor:pointer;
`;
const Imagen = styled.img`
width: 90%;
height: 90%;
`
export default function ListImages({ urls,handleSelectImagen }) {
  return (
    <LayoutListImagenes>
      {urls.map((e, i) => (
        <LayoutImage
          key={i}
          onMouseOver={() => handleSelectImagen(e)}
        >
            <Imagen src={e}/>
        </LayoutImage>
      ))}
    </LayoutListImagenes>
  );
}
