import App from "next/app";
import { ThemeProvider } from "styled-components";
import {AppContextProvider} from "../context/AppContext";
const theme = {
	colors: {
		primary: "#0070f3",
	},
};
class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider  theme={theme}>
				<AppContextProvider>
					<Component {...pageProps} />
				</AppContextProvider>
			</ThemeProvider>
		);
	}
}

export default MyApp;
