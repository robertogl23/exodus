import React from 'react'
import styled from 'styled-components'
const LayoutCar = styled.div`
    border:1px solid blue;
    height: 100%;
    width:400px;
    position: fixed;
    right: 0px;
    top: 56px;
    box-sizing: border-box;
    transform: translateX(0px);
	transition: transform 150ms ease-out 0s;
    @media (max-width: 967px) {
		transform: translateX(24.8767rem);
	}
`
export default function CartLayout() {
    return (
        <LayoutCar>
            
        </LayoutCar>
    )
}
