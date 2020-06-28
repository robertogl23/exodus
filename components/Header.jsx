import React from "react";
import styled from "styled-components";
const LayoutHeader = styled.header`
  height: 56px;
  background: var(--headerColor);
  position: fixed;
  width: 100%;
`;
export default function Header() {
  return <LayoutHeader></LayoutHeader>;
}
