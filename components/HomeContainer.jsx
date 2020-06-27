import React from 'react'
import styled from 'styled-components'
const LayoutHome = styled.div`
align-items: center;
display: flex;
justify-content: center;
`
export default function HomeContainer({children}) {
    return (
        <LayoutHome>
            {children}
        </LayoutHome>
    )
}
