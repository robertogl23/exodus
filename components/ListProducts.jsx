import React from 'react'
import {AppContext} from '../context/AppContext'
import CardProduct from './CardProduct'
import styled from 'styled-components'
const LayoutListProducts = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 15px;
`
export default function ListProducts() {
    return (
        <LayoutListProducts>
            <AppContext.Consumer>
                {(context) => {
                    const {products} = context
                    return products.length ? (
                        products.map((e,i) => <CardProduct product={e}/>)
                    ):(
                        <h1>Cargando Datos</h1>
                    )
                }

                }
            </AppContext.Consumer>
        </LayoutListProducts>
    )
}
