import "../styles/globals.css";
import "../styles/loader.css";
import type { AppProps } from "next/app";
import { AuthContextProvider, UserStuffContextProvider } from "@context";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ScrollButton } from "@elements";
import { persistor, wrapper } from "@reduxs";
import { MainLayout, ProtectedRoute } from "@modules";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";
import React from "react";

export const noAuthRequired = ["/", "/login", "/register"];

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {
	const [queryClient] = React.useState(() => new QueryClient());
	const { pathname } = useRouter();
	const {
		store,
		props: { pageProps },
	} = wrapper.useWrappedStore(rest);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<AuthContextProvider>
					<Head>
						<title>Mini Galaxy Cafe</title>
						<meta
							name="keywords"
							content="mini galaxy cafe, galaxy cafe erick, mini galaxy cafe erick ezrandy, cafe erick ezrandy"
						/>
						<meta name="author" content="Erick Ezrandy" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0"
						/>
						<link
							rel="preconnect"
							href="https://mini-galaxy-cafe.vercel.app/"
						/>
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
				<ReactQueryDevtools initialIsOpen={false} />
			</Hydrate>
		</QueryClientProvider>
	);
};

export default MyApp;
