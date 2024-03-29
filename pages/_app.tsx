import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ScrollButton } from "@elements";
import { MainLayout, ProtectedRoute } from "@modules";
import {
	persistor,
	wrapper,
	AuthContextProvider,
	UserStuffContextProvider,
} from "@utils";
import Head from "next/head";
import React from "react";
import "@styles/globals.css";
import "@styles/loader.css";

export const noAuthRequired = ["/", "/login", "/register"];

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {
	const { pathname } = useRouter();
	const {
		store,
		props: { pageProps },
	} = wrapper.useWrappedStore(rest);

	return (
		<AuthContextProvider>
			<Head>
				<title>Mini Galaxy Cafe</title>
				<meta
					name="keywords"
					content="mini galaxy cafe, galaxy cafe erick, mini galaxy cafe erick ezrandy, cafe erick ezrandy"
				/>
				<meta name="author" content="Erick Ezrandy" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="Mini Galaxy Cafe is a modern cafe that has been built by Erick Ezrandy from University of Indonesia in 2022"
				></meta>
				<link rel="preconnect" href="https://mini-galaxy-cafe.vercel.app/" />
				<link rel="icon" href="/gal-logo.svg" />
			</Head>

			<Provider store={store}>
				<UserStuffContextProvider>
					{noAuthRequired.includes(pathname) ? (
						pathname === "/" ? (
							<>
								<ScrollButton />
								<Component {...pageProps} />
							</>
						) : (
							<MainLayout>
								<Component {...pageProps} />
							</MainLayout>
						)
					) : (
						<ProtectedRoute>
							<ScrollButton />
							<MainLayout>
								<PersistGate loading={null} persistor={persistor}>
									<Component {...pageProps} />
								</PersistGate>
							</MainLayout>
						</ProtectedRoute>
					)}
				</UserStuffContextProvider>
			</Provider>
		</AuthContextProvider>
	);
};

export default MyApp;
