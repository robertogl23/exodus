import React from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
const ButtonAddToCart = styled.div`
	border: 2px solid var(--headerColor);
	border-radius: 8px;
	width: 80%;
	height: 40px;
	background: #fff;
	box-sizing: border-box;
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;
`;
export default function ButtonAddCart({ id ,product}) {
	return (
		<ButtonAddToCart>
			<AppContext.Consumer>
				{(context) => {
					const { getQuantityById, removeProduct, addToCart } = context;
					return getQuantityById(id) ? (
						<>
							<span onClick={() => removeProduct(product._id,product.pricio)}>-</span>
							<span>{getQuantityById(id)}</span>
							<span onClick={() => addToCart(product)}>+</span>
						</>
					) : (
						<div
							style={{
								width: "100%",
								height: 40,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
							onClick={() => context.addToCart(product)}
						>
							<span>Agregar</span>
						</div>
					);
				}}
			</AppContext.Consumer>
		</ButtonAddToCart>
	);
}
