import React, { useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import CardProduct from "./CardProduct";
import styled from "styled-components";
import { useForm } from "react-hook-form";
const LayoutListProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 80%;
  overflow-y: auto;
  margin-top: 78px;

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
const LayoutFilter = styled.div`
  position: fixed;
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  margin-top: 60px;
  padding-left: 15px;
  font-size:18px;
`;
export default function List({ products }) {
  const { register, handleSubmit } = useForm();
  const [filter, setFilter] = useState("all");
  const onSubmit = (data) => {
    setFilter(data.filter)
    console.log(data);
  };

  return (
    <>
      <LayoutFilter>
        <select name="filter" onChange={handleSubmit(onSubmit)} ref={register}>
          <option value="all">Filtrar marca</option>
          <option value="Apple">Apple</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Hp">HP</option>
          <option value="all">Mostrar todo</option>
        </select>
      </LayoutFilter>
      <LayoutListProducts>
        <AppContext.Consumer>
          {(context) => {
            const { getFilterProducts } = context;
            return getFilterProducts(filter) ? (
              getFilterProducts(filter).map((e, i) => (
                <CardProduct key={i} product={e} />
              ))
            ) : (
              <h1>Cargando Productos</h1>
            );
          }}
        </AppContext.Consumer>
      </LayoutListProducts>
    </>
  );
}
