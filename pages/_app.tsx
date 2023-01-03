import "../styles/globals.css";
import "../styles/loader.css";
import type { AppProps } from "next/app";
import { AuthContextProvider, UserStuffContextProvider } from "@context";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ScrollButton } from "@elements";
import { persistor, wrapper } from "@redux";
import { MainLayout, ProtectedRoute } from "@modules";
import Head from "next/head";
import React from "react";

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
