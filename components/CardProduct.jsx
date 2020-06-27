import React from 'react'

export default function CardProduct({product}) {
    return (
        <div>
            <img src={product.urlImg}/>
            <h2>{product.nombreProducto}</h2>
            <p>{product.proveedor.nombreProveedor}</p>
        </div>
    )
}
