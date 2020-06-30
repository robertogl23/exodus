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
  margin-top:78px;

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
  top:0;
  left:0;
  margin-top:56px;
  padding-left:15px;
`;
export default function List({ products }) {
  const { register, handleSubmit } = useForm();
  const [filter, setFilter] = useState(products);
  const onSubmit = (data) => {
    console.log(data);
    switch (data.filter) {
      case "HP":
        setFilter(products.filter((e) => e.proveedor.nombreProveedor === "HP"));
        break;
      case "Apple":
        setFilter(
          products.filter((e) => e.proveedor.nombreProveedor === "Apple")
        );
        break;
      case "Lenovo":
        setFilter(
          products.filter((e) => e.proveedor.nombreProveedor === "Lenovo")
        );
        break;
      case "all":
        setFilter(products);

        break;
      default:
        setFilter(products);
        break;
    }
  };

  return (
    <>
      <LayoutFilter>
        <select
          name="filter"
          onChange={handleSubmit(onSubmit)}
          ref={register}
        >
          <option value="all">Filtrar marca</option>
          <option value="Apple">Apple</option>
          <option value="Lenovo">Lenovo</option>
          <option value="HP">HP</option>
        </select>
      </LayoutFilter>
      <LayoutListProducts>
        {filter.map((e, i) => (
          <CardProduct key={i} product={e} />
        ))}
      </LayoutListProducts>
    </>
  );
}
