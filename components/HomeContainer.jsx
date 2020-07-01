import React from "react";
import styled from "styled-components";
const LayoutHome = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-right: 25em;

  height: 100vh !important;
  top: 56px;
  box-sizing: border-box;
  @media (max-width: 967px) {
		padding:0;
	}

`;
export default function HomeContainer({ children }) {
  return <LayoutHome>{children}</LayoutHome>;
}
