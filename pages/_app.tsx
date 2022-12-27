import "../styles/globals.css";
import "../styles/loader.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { UserStuffContextProvider } from "../context/UserStuffContext";
import { persistor, store } from "../redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";
import MainLayout from "../components/modules/MainLayout/MainLayout";
import withRedux from "next-redux-wrapper";
import ProtectedRoute from "../components/modules/ProtectedRoute/ProtectedRoute";
import ScrollButton from "../components/elements/Button/ScrollButton";

export const noAuthRequired = ["/", "/login", "/register"];

const MyApp = ({ Component, pageProps }: AppProps) => {
	const { pathname } = useRouter();

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
					<Provider store={store}>
						<ProtectedRoute>
							<ScrollButton />
							<MainLayout>
								<PersistGate loading={null} persistor={persistor}>
									<Component {...pageProps} />
								</PersistGate>
							</MainLayout>
						</ProtectedRoute>
					</Provider>
				)}
			</UserStuffContextProvider>
		</AuthContextProvider>
	);
};

const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
