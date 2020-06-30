import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
const LayoutFilter = styled.div`
  margin-top: -260px;
  position: fixed;
  width: 80%;
  height: 50px;
  border: 1px solid blue;
`;
export default function FilterContainer() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data.filter);
  return (
    <LayoutFilter>
      <select name="filter" onChange={handleSubmit(onSubmit)} ref={register}>
        <option value="value1">Value 1</option>
        <option value="value2" selected>
          Value 2
        </option>
        <option value="value3">Value 3</option>
      </select>
    </LayoutFilter>
  );
}
