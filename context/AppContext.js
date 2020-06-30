import React, { createContext, Component } from "react";
import { getFetch } from "../libs/fetch";
export const AppContext = createContext();
export class AppContextProvider extends Component {
	state = {
		products: [],
		cart: [],
		ids: [],
		total: 0,
	};
	getQuantityById = (id) => {
		return this.state.ids[id] || 0;
	};
	removeProduct = (id,price) => {
		const {total } = this.state;
		const idDecrement = this.state.ids[id] - 1;
		const indexProduct = this.state.cart.findIndex((a) => a._id === id);
		this.setState({ total: total - price });
		console.log(indexProduct);
		if (idDecrement === 0) {
			return this.setState({
				cart: this.state.cart.filter((e, i) => i !== indexProduct),
				ids: { ...this.state.ids, [id]: this.state.ids[id] - 1 },
			});
		}
		this.setState({
			ids: {
				...this.state.ids,
				[id]: this.state.ids[id] - 1,
			},
		});
	};
	addToCart = (product) => {
		const { cart, ids, total } = this.state;
		const findProduct = cart.find((p) => p._id === product._id);
		const priceProduc = parseFloat(product.pricio);
		const sumarTotal = total + priceProduc;
		this.setState({ total: sumarTotal });
		if (!findProduct) {
			this.setState({
				cart: [...this.state.cart, product],
				ids: {
					...this.state.ids,
					[product._id]: (this.state.ids[product._id] || 0) + 1,
				},
			});
		}

		return this.setState({
			ids: {
				...this.state.ids,
				[product._id]: (this.state.ids[product._id] || 0) + 1,
			},
		});
	};
	componentDidMount() {
		getFetch("productos").then((resp) => {
			this.setState({products: resp.productsDB})
		});
	}
	render() {
		return (
			<AppContext.Provider
				value={{
					...this.state,
					addToCart: this.addToCart,
					getQuantityById: this.getQuantityById,
					removeProduct: this.removeProduct,
				}}
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
