import React from "react";
import styled from "styled-components";
import ButtonCart from "./ButtonCart";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const LayoutHeader = styled.header`
  box-sizing: border-box;

  height: 56px;
  background: var(--headerColor);
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 967px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const TitleExodus = styled.p`
  color: #fff;
  font-size: 21px;
  display: under-line;
`;
export default function Header() {
 
  return (
    <LayoutHeader>
      <div>
        <Link href="/">
          <a>
            <TitleExodus>Exodus</TitleExodus>
          </a>
        </Link>
      </div>

      <div ></div>

      <div>
        <ButtonCart />
      </div>
    </LayoutHeader>
  );
}
