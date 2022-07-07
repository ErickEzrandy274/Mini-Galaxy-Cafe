import "../styles/globals.css";
import "../styles/loader.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import MainLayout from "../components/modules/MainLayout/MainLayout";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/modules/ProtectedRoute/ProtectedRoute";
import { PathContextProvider } from "../context/PathContext";
import ScrollButton from "../components/elements/Button/ScrollButton";
import { Provider } from "react-redux";
import { store } from "../store/store";

const noAuthRequired = ["/login", "/register"];

const MyApp = ({ Component, pageProps }: AppProps) => {
	const { pathname } = useRouter();

	return (
		<AuthContextProvider>
			<Head>
				<title>Mini Galaxy Cafe</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel="icon" href="/gal-logo.svg" />
			</Head>

			{noAuthRequired.includes(pathname) ? (
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			) : (
				<Provider store={store}>
					<ProtectedRoute>
						<ScrollButton />
						<MainLayout>
							<PathContextProvider>
								<Component {...pageProps} />
							</PathContextProvider>
						</MainLayout>
					</ProtectedRoute>
				</Provider>
			)}
		</AuthContextProvider>
	);
};

export default MyApp;
