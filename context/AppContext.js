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
				}}
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
